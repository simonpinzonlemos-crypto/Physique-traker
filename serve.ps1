param(
    [int]$Port = 5177,
    [string]$Root = $PSScriptRoot
)

function Get-LanIPs {
    Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
        Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } |
        Select-Object -ExpandProperty IPAddress
}

$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:$Port/")

try {
    $listener.Start()
} catch {
    if ($isAdmin) {
        # Reserva el prefijo para que futuras ejecuciones no necesiten ser administrador
        try { netsh http add urlacl url="http://+:$Port/" user="Everyone" | Out-Null } catch {}
        try { $listener.Start() } catch {}
    }
    if (-not $listener.IsListening) {
        Write-Host ""
        Write-Host "No se pudo abrir el servidor para la red local." -ForegroundColor Red
        Write-Host "Esto suele pasar la primera vez por permisos de Windows. Para arreglarlo:" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "  Cierra esta ventana y vuelve a abrir 'Iniciar App.bat' con clic derecho -> 'Ejecutar como administrador' (solo hace falta la primera vez)." -ForegroundColor Yellow
        Write-Host ""
        Read-Host "Presiona Enter para salir"
        exit 1
    }
}

if ($isAdmin) {
    try {
        netsh advfirewall firewall show rule name="Physique Tracker" | Out-Null
        if ($LASTEXITCODE -ne 0) {
            netsh advfirewall firewall add rule name="Physique Tracker" dir=in action=allow protocol=TCP localport=$Port | Out-Null
        }
    } catch {}
}

$ips = Get-LanIPs

Write-Host ""
Write-Host "==================================================" -ForegroundColor Green
Write-Host " Physique Tracker esta corriendo" -ForegroundColor Green
Write-Host ""
Write-Host "  En esta PC:        http://localhost:$Port/"
foreach ($ip in $ips) {
    Write-Host "  Desde tu celular:  http://${ip}:${Port}/" -ForegroundColor Cyan
}
Write-Host ""
Write-Host "  El celular debe estar conectado al mismo WiFi que esta PC." -ForegroundColor Yellow
if (-not $isAdmin) {
    Write-Host "  Si desde el celular no carga, cierra esta ventana y abre 'Iniciar App.bat' como administrador una vez (para permitir el acceso en el firewall)." -ForegroundColor Yellow
}
Write-Host ""
Write-Host "  Deja esta ventana abierta mientras uses la app. Ctrl+C para detener." -ForegroundColor DarkGray
Write-Host "==================================================" -ForegroundColor Green
Write-Host ""

$mime = @{
    '.html' = 'text/html'; '.css' = 'text/css'; '.js' = 'application/javascript';
    '.json' = 'application/json'; '.png' = 'image/png'; '.jpg' = 'image/jpeg'; '.svg' = 'image/svg+xml'
}

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response
    try {
        $path = $req.Url.LocalPath
        if ($path -eq '/') { $path = '/index.html' }
        $filePath = Join-Path $Root ($path.TrimStart('/'))
        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath)
            $contentType = $mime[$ext]
            if (-not $contentType) { $contentType = 'application/octet-stream' }
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $res.ContentType = $contentType
            $res.ContentLength64 = $bytes.Length
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $res.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
            $res.OutputStream.Write($msg, 0, $msg.Length)
        }
    } catch {
        $res.StatusCode = 500
    } finally {
        $res.OutputStream.Close()
    }
}
