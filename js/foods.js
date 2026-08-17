// Base de alimentos comunes: valores por cada 100 g (aprox.)
// kcal, proteína (g), carbohidratos (g), grasa (g)
const FOOD_DB = [
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
];

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
