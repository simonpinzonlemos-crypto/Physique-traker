// ==================== Base de datos local (genérica + colombiana) ====================
// Valores por cada 100 g (aprox.). kcal, proteína (g), carbohidratos (g), grasa (g).
const FOOD_DB = [
  // --- Genéricos ---
  { name: 'Pechuga de pollo (cocida)', kcal: 165, protein: 31, carbs: 0, fat: 3.6 },
  { name: 'Arroz blanco (cocido)', kcal: 130, protein: 2.7, carbs: 28, fat: 0.3 },
  { name: 'Arroz integral (cocido)', kcal: 123, protein: 2.6, carbs: 26, fat: 1 },
  { name: 'Huevo entero', kcal: 155, protein: 13, carbs: 1.1, fat: 11 },
  { name: 'Clara de huevo', kcal: 52, protein: 11, carbs: 0.7, fat: 0.2 },
  { name: 'Carne de res (magra, cocida)', kcal: 217, protein: 26, carbs: 0, fat: 12 },
  { name: 'Carne molida de res (90/10)', kcal: 176, protein: 20, carbs: 0, fat: 10 },
  { name: 'Salmón (cocido)', kcal: 208, protein: 20, carbs: 0, fat: 13 },
  { name: 'Atún en agua', kcal: 116, protein: 26, carbs: 0, fat: 1 },
  { name: 'Papa/patata (cocida)', kcal: 87, protein: 1.9, carbs: 20, fat: 0.1 },
  { name: 'Camote/batata (cocido)', kcal: 90, protein: 2, carbs: 21, fat: 0.1 },
  { name: 'Avena (seca)', kcal: 389, protein: 17, carbs: 66, fat: 7 },
  { name: 'Pan blanco', kcal: 265, protein: 9, carbs: 49, fat: 3.2 },
  { name: 'Pan integral', kcal: 247, protein: 13, carbs: 41, fat: 4.2 },
  { name: 'Pasta (cocida)', kcal: 131, protein: 5, carbs: 25, fat: 1.1 },
  { name: 'Frijoles/fríjoles (cocidos)', kcal: 127, protein: 8.7, carbs: 23, fat: 0.5 },
  { name: 'Lentejas (cocidas)', kcal: 116, protein: 9, carbs: 20, fat: 0.4 },
  { name: 'Garbanzos (cocidos)', kcal: 164, protein: 8.9, carbs: 27, fat: 2.6 },
  { name: 'Plátano/banano', kcal: 89, protein: 1.1, carbs: 23, fat: 0.3 },
  { name: 'Manzana', kcal: 52, protein: 0.3, carbs: 14, fat: 0.2 },
  { name: 'Aguacate/palta', kcal: 160, protein: 2, carbs: 9, fat: 15 },
  { name: 'Almendras', kcal: 579, protein: 21, carbs: 22, fat: 50 },
  { name: 'Maní/cacahuate', kcal: 567, protein: 26, carbs: 16, fat: 49 },
  { name: 'Mantequilla de maní', kcal: 588, protein: 25, carbs: 20, fat: 50 },
  { name: 'Queso fresco', kcal: 264, protein: 18, carbs: 3.4, fat: 21 },
  { name: 'Yogur griego natural', kcal: 59, protein: 10, carbs: 3.6, fat: 0.4 },
  { name: 'Leche entera', kcal: 61, protein: 3.2, carbs: 4.8, fat: 3.3 },
  { name: 'Leche descremada', kcal: 34, protein: 3.4, carbs: 5, fat: 0.1 },
  { name: 'Aceite de oliva', kcal: 884, protein: 0, carbs: 0, fat: 100 },
  { name: 'Brócoli (cocido)', kcal: 35, protein: 2.4, carbs: 7, fat: 0.4 },
  { name: 'Espinaca', kcal: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
  { name: 'Tomate', kcal: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
  { name: 'Zanahoria', kcal: 41, protein: 0.9, carbs: 10, fat: 0.2 },
  { name: 'Quinoa (cocida)', kcal: 120, protein: 4.4, carbs: 21, fat: 1.9 },
  { name: 'Tofu', kcal: 76, protein: 8, carbs: 1.9, fat: 4.8 },
  { name: 'Pechuga de pavo (cocida)', kcal: 135, protein: 30, carbs: 0, fat: 1 },
  { name: 'Whey protein (polvo)', kcal: 400, protein: 80, carbs: 8, fat: 6 },

  // --- Base propia colombiana ---
  { name: 'Arepa de maíz (asada)', kcal: 215, protein: 5, carbs: 44, fat: 2 },
  { name: 'Arepa de queso', kcal: 280, protein: 9, carbs: 40, fat: 9 },
  { name: 'Arepa boyacense (dulce)', kcal: 250, protein: 5, carbs: 45, fat: 5 },
  { name: 'Patacón (plátano verde frito)', kcal: 250, protein: 1.5, carbs: 32, fat: 13 },
  { name: 'Plátano maduro frito (tajadas)', kcal: 230, protein: 1, carbs: 40, fat: 8 },
  { name: 'Yuca cocida', kcal: 160, protein: 1.4, carbs: 38, fat: 0.3 },
  { name: 'Ñame cocido', kcal: 118, protein: 1.5, carbs: 27, fat: 0.2 },
  { name: 'Papa criolla (cocida)', kcal: 90, protein: 2, carbs: 20, fat: 0.2 },
  { name: 'Chicharrón', kcal: 610, protein: 35, carbs: 0, fat: 53 },
  { name: 'Chorizo colombiano (asado)', kcal: 350, protein: 19, carbs: 3, fat: 29 },
  { name: 'Morcilla/rellena', kcal: 320, protein: 15, carbs: 10, fat: 25 },
  { name: 'Frijoles antioqueños (con garra, cocidos)', kcal: 140, protein: 8, carbs: 22, fat: 3 },
  { name: 'Sancocho (caldo con pollo y verduras)', kcal: 90, protein: 6, carbs: 10, fat: 3 },
  { name: 'Ajiaco bogotano', kcal: 85, protein: 4, carbs: 12, fat: 2 },
  { name: 'Changua', kcal: 50, protein: 3, carbs: 4, fat: 2 },
  { name: 'Mondongo', kcal: 110, protein: 8, carbs: 8, fat: 5 },
  { name: 'Lechona', kcal: 300, protein: 18, carbs: 15, fat: 19 },
  { name: 'Tamal colombiano', kcal: 210, protein: 8, carbs: 25, fat: 9 },
  { name: 'Empanada de carne (frita)', kcal: 260, protein: 7, carbs: 28, fat: 13 },
  { name: 'Buñuelo', kcal: 330, protein: 8, carbs: 30, fat: 20 },
  { name: 'Pandebono', kcal: 300, protein: 9, carbs: 40, fat: 11 },
  { name: 'Almojábana', kcal: 310, protein: 8, carbs: 38, fat: 13 },
  { name: 'Arequipe/dulce de leche', kcal: 315, protein: 6, carbs: 55, fat: 8 },
  { name: 'Bocadillo de guayaba', kcal: 290, protein: 0.3, carbs: 73, fat: 0.1 },
  { name: 'Panela', kcal: 380, protein: 0, carbs: 98, fat: 0 },
  { name: 'Aguapanela', kcal: 40, protein: 0, carbs: 10, fat: 0 },
  { name: 'Chocolate santafereño (con leche)', kcal: 70, protein: 2, carbs: 10, fat: 2.5 },
  { name: 'Queso costeño', kcal: 330, protein: 22, carbs: 2, fat: 26 },
  { name: 'Queso campesino', kcal: 280, protein: 20, carbs: 3, fat: 21 },
  { name: 'Cuajada', kcal: 290, protein: 18, carbs: 3, fat: 23 },
  { name: 'Suero costeño', kcal: 90, protein: 3, carbs: 4, fat: 7 },
  { name: 'Arroz con coco', kcal: 200, protein: 3, carbs: 33, fat: 6 },
  { name: 'Arroz atollado', kcal: 180, protein: 6, carbs: 28, fat: 5 },
  { name: 'Carne asada (res, a la parrilla)', kcal: 250, protein: 26, carbs: 0, fat: 16 },
  { name: 'Pollo asado (con piel)', kcal: 215, protein: 27, carbs: 0, fat: 11 },
  { name: 'Costillas de cerdo (BBQ)', kcal: 280, protein: 24, carbs: 4, fat: 19 },
  { name: 'Sobrebarriga', kcal: 230, protein: 22, carbs: 2, fat: 15 },
  { name: 'Bagre frito', kcal: 230, protein: 18, carbs: 8, fat: 14 },
  { name: 'Mojarra frita', kcal: 210, protein: 19, carbs: 3, fat: 14 },
  { name: 'Tilapia (cocida)', kcal: 128, protein: 26, carbs: 0, fat: 2.7 },
  { name: 'Cuchuco de trigo/cebada (sopa)', kcal: 70, protein: 3, carbs: 12, fat: 1 },
  { name: 'Guayaba', kcal: 68, protein: 2.6, carbs: 14, fat: 1 },
  { name: 'Lulo', kcal: 28, protein: 1, carbs: 6, fat: 0.2 },
  { name: 'Maracuyá', kcal: 97, protein: 2.2, carbs: 23, fat: 0.7 },
  { name: 'Curuba', kcal: 45, protein: 0.7, carbs: 11, fat: 0.1 },
  { name: 'Feijoa', kcal: 55, protein: 1, carbs: 13, fat: 0.6 },
  { name: 'Mango', kcal: 60, protein: 0.8, carbs: 15, fat: 0.4 },
  { name: 'Papaya', kcal: 43, protein: 0.5, carbs: 11, fat: 0.3 },
  { name: 'Mora de Castilla', kcal: 43, protein: 1.4, carbs: 10, fat: 0.5 },
  { name: 'Guanábana', kcal: 66, protein: 1, carbs: 17, fat: 0.3 },
  { name: 'Chontaduro', kcal: 180, protein: 3.3, carbs: 32, fat: 6.6 },
  { name: 'Ahuyama (calabaza, cocida)', kcal: 26, protein: 1, carbs: 6.5, fat: 0.1 },
  { name: 'Habichuela (judía verde, cocida)', kcal: 35, protein: 2, carbs: 7, fat: 0.1 },
  { name: 'Hogao (salsa criolla tomate-cebolla)', kcal: 55, protein: 1, carbs: 6, fat: 3 },
  { name: 'Café negro (sin azúcar)', kcal: 2, protein: 0.1, carbs: 0, fat: 0 },
  { name: 'Chicha (bebida de maíz)', kcal: 50, protein: 0.5, carbs: 11, fat: 0.1 },
  { name: 'Masato', kcal: 55, protein: 0.3, carbs: 13, fat: 0.1 },
];

// ---- Búsqueda en la base local (genérica/colombiana + alimentos personalizados del usuario) ----
function searchLocalFoodDB(query, limit = 10) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const pool = [
    ...FOOD_DB.map(f => ({ ...f, source: 'Local' })),
    ...(Store.data.customFoods || []).map(f => ({ ...f, source: 'Personal' }))
  ];
  const starts = [];
  const contains = [];
  pool.forEach(f => {
    const n = f.name.toLowerCase();
    if (n.startsWith(q)) starts.push(f);
    else if (n.includes(q)) contains.push(f);
  });
  return [...starts, ...contains].slice(0, limit).map(f => ({
    name: f.name, brand: '', kcal: f.kcal, protein: f.protein, carbs: f.carbs, fat: f.fat, source: f.source
  }));
}

// Usada por el flujo antiguo (compatibilidad): estimación exacta por nombre+gramos desde la base local.
function estimateFromLocalDB(foodName, grams) {
  const q = foodName.trim().toLowerCase();
  const match = FOOD_DB.find(f => f.name.toLowerCase() === q) ||
    FOOD_DB.find(f => f.name.toLowerCase().includes(q) || q.includes(f.name.toLowerCase()));
  if (!match) return null;
  const factor = Number(grams) / 100;
  return {
    calories: Math.round(match.kcal * factor),
    protein: Math.round(match.protein * factor * 10) / 10,
    carbs: Math.round(match.carbs * factor * 10) / 10,
    fat: Math.round(match.fat * factor * 10) / 10,
    matchedName: match.name
  };
}

// ==================== OCR de etiquetas nutricionales (Tesseract.js, gratis, en el navegador) ====================
// Busca en el texto extraído los números junto a las palabras clave típicas de una tabla nutricional.
function parseNutritionLabel(text) {
  const norm = text.toLowerCase().replace(/,/g, '.');
  function findNumber(keywords) {
    for (const kw of keywords) {
      const regex = new RegExp(kw + '[^0-9]{0,15}([0-9]+(?:\\.[0-9]+)?)', 'i');
      const m = norm.match(regex);
      if (m) return parseFloat(m[1]);
    }
    return null;
  }
  return {
    kcal: findNumber(['calor[ií]as?', 'energ[ií]a', 'valor energ[eé]tico', 'calories']),
    protein: findNumber(['prote[ií]nas?', 'protein']),
    carbs: findNumber(['carbohidratos?(?:\\s+totales)?', 'hidratos\\s+de\\s+carbono', 'carbohydrate']),
    fat: findNumber(['grasas?(?:\\s+total(?:es)?)?', '\\bfat\\b'])
  };
}

// ==================== Open Food Facts (API pública, sin key) ====================
async function searchOpenFoodFacts(query, limit = 6) {
  const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=${limit}&lc=es`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Error consultando Open Food Facts');
  const json = await res.json();
  return (json.products || [])
    .filter(p => p.product_name && p.nutriments && p.nutriments['energy-kcal_100g'] != null)
    .slice(0, limit)
    .map(p => ({
      name: p.product_name,
      brand: p.brands ? p.brands.split(',')[0].trim() : '',
      kcal: Number(p.nutriments['energy-kcal_100g']) || 0,
      protein: Number(p.nutriments['proteins_100g']) || 0,
      carbs: Number(p.nutriments['carbohydrates_100g']) || 0,
      fat: Number(p.nutriments['fat_100g']) || 0,
      source: 'Open Food Facts'
    }));
}

// ==================== Búsqueda combinada ====================
// Combina la base local + personal (instantánea) con Open Food Facts (tolerando fallos).
async function searchAllFoodSources(query) {
  const local = searchLocalFoodDB(query);
  const [offResult] = await Promise.allSettled([searchOpenFoodFacts(query)]);
  const off = offResult.status === 'fulfilled' ? offResult.value : [];
  return {
    results: [...local, ...off].filter(r => r.kcal > 0).slice(0, 20),
    errors: {
      off: offResult.status === 'rejected'
    }
  };
}
