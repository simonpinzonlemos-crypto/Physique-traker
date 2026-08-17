// Gráficos de línea simples en SVG, sin dependencias externas.

function renderLineChart(container, points, { color = '#4ade80', unit = '', height = 180 } = {}) {
  container.innerHTML = '';
  if (!points || points.length === 0) {
    container.innerHTML = '<p class="empty-hint">Aún no hay datos suficientes.</p>';
    return;
  }
  if (points.length === 1) {
    container.innerHTML = `<p class="empty-hint">Solo hay 1 registro (${points[0].y}${unit}). Agrega más para ver la tendencia.</p>`;
    return;
  }

  const width = container.clientWidth || 600;
  const padding = { top: 20, right: 16, bottom: 28, left: 44 };
  const values = points.map(p => p.y);
  let min = Math.min(...values);
  let max = Math.max(...values);
  if (min === max) { min -= 1; max += 1; }
  const pad = (max - min) * 0.1;
  min -= pad; max += pad;

  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const x = i => padding.left + (i / (points.length - 1)) * innerW;
  const y = v => padding.top + innerH - ((v - min) / (max - min)) * innerH;

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(p.y).toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L ${x(points.length - 1).toFixed(1)} ${(padding.top + innerH).toFixed(1)} L ${x(0).toFixed(1)} ${(padding.top + innerH).toFixed(1)} Z`;

  const gridLines = 4;
  let gridSvg = '';
  for (let i = 0; i <= gridLines; i++) {
    const v = min + (i / gridLines) * (max - min);
    const gy = y(v);
    gridSvg += `<line x1="${padding.left}" y1="${gy.toFixed(1)}" x2="${width - padding.right}" y2="${gy.toFixed(1)}" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,3"/>`;
    gridSvg += `<text x="${padding.left - 8}" y="${(gy + 4).toFixed(1)}" text-anchor="end" font-size="11" fill="var(--text-dim)">${v.toFixed(1)}</text>`;
  }

  const showEvery = Math.max(1, Math.ceil(points.length / 6));
  let labelsSvg = '';
  points.forEach((p, i) => {
    if (i % showEvery === 0 || i === points.length - 1) {
      labelsSvg += `<text x="${x(i).toFixed(1)}" y="${height - 6}" text-anchor="middle" font-size="10" fill="var(--text-dim)">${p.label}</text>`;
    }
  });

  const dotsSvg = points.map((p, i) =>
    `<circle cx="${x(i).toFixed(1)}" cy="${y(p.y).toFixed(1)}" r="3.5" fill="${color}" stroke="var(--bg-card)" stroke-width="1.5"><title>${p.label}: ${p.y}${unit}</title></circle>`
  ).join('');

  const svg = `
    <svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="grad-${color.replace('#', '')}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${gridSvg}
      <path d="${areaPath}" fill="url(#grad-${color.replace('#', '')})" stroke="none"/>
      <path d="${linePath}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      ${dotsSvg}
      ${labelsSvg}
    </svg>`;
  container.innerHTML = svg;
}

function renderBarChart(container, points, { color = '#60a5fa', height = 150 } = {}) {
  container.innerHTML = '';
  if (!points || points.length === 0) {
    container.innerHTML = '<p class="empty-hint">Aún no hay datos suficientes.</p>';
    return;
  }
  const width = container.clientWidth || 600;
  const padding = { top: 16, right: 12, bottom: 26, left: 28 };
  const max = Math.max(1, ...points.map(p => p.y));
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;
  const bw = innerW / points.length;
  const barW = Math.min(28, bw * 0.55);

  let bars = '';
  points.forEach((p, i) => {
    const cx = padding.left + bw * i + bw / 2;
    const h = (p.y / max) * innerH;
    const by = padding.top + innerH - h;
    bars += `<rect x="${(cx - barW / 2).toFixed(1)}" y="${by.toFixed(1)}" width="${barW.toFixed(1)}" height="${Math.max(2, h).toFixed(1)}" rx="5" fill="${color}"><title>${p.label}: ${p.y}</title></rect>`;
    bars += `<text x="${cx.toFixed(1)}" y="${(padding.top + innerH + 16).toFixed(1)}" text-anchor="middle" font-size="10" fill="var(--text-dim)">${p.label}</text>`;
    if (p.y > 0) bars += `<text x="${cx.toFixed(1)}" y="${(by - 4).toFixed(1)}" text-anchor="middle" font-size="10" fill="var(--text)">${p.y}</text>`;
  });

  container.innerHTML = `<svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" preserveAspectRatio="xMidYMid meet">${bars}</svg>`;
}
