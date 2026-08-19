# Fotos de comidas para agregar a la base de datos

Carpeta para fotos de comidas o etiquetas nutricionales que **no** aparecen en la búsqueda de la app (base local, Open Food Facts, ni tus alimentos personalizados).

## Cómo se usa

1. Comparte la foto directamente en el chat con Claude Code (esta conversación o una nueva).
2. Claude estima las calorías y macros (por 100 g) a partir de la imagen.
3. Claude guarda la foto aquí y agrega el alimento a `js/foods.js` (`FOOD_DB`), luego sube (`git push`) los cambios.
4. El alimento queda disponible en la búsqueda de la app en todos los dispositivos, la próxima vez que carguen la versión actualizada.

No hay subida automática desde la app ni interpretación automática por IA — se hace a mano, en el chat, para no requerir una API de pago ni exponer credenciales en el código de la app.

## Convención de nombres

`nombre-del-alimento.jpg` (o .png/.jpeg) — en minúsculas, con guiones. Ejemplo: `sancocho-de-gallina.jpg`.
