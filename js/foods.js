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

  // --- Comida rápida / Fast food ---
  { name: 'Hamburguesa sencilla', kcal: 250, protein: 12, carbs: 31, fat: 9 },
  { name: 'Hamburguesa con queso', kcal: 280, protein: 14, carbs: 29, fat: 13 },
  { name: 'Hamburguesa doble con queso', kcal: 305, protein: 17, carbs: 25, fat: 17 },
  { name: 'Papas fritas (de paquete)', kcal: 536, protein: 6.6, carbs: 53, fat: 35 },
  { name: 'Pizza margarita', kcal: 250, protein: 11, carbs: 33, fat: 8 },
  { name: 'Pizza pepperoni', kcal: 275, protein: 12, carbs: 30, fat: 12 },
  { name: 'Pizza hawaiana', kcal: 240, protein: 10, carbs: 32, fat: 8 },
  { name: 'Perro caliente/hot dog', kcal: 290, protein: 10.4, carbs: 24, fat: 17 },
  { name: 'Nuggets de pollo', kcal: 296, protein: 15.6, carbs: 18, fat: 19 },
  { name: 'Sándwich club', kcal: 230, protein: 12, carbs: 22, fat: 10 },
  { name: 'Shawarma de pollo', kcal: 235, protein: 14, carbs: 20, fat: 11 },
  { name: 'Döner kebab', kcal: 215, protein: 13.5, carbs: 17, fat: 10.5 },
  { name: 'Papas a la francesa', kcal: 312, protein: 3.4, carbs: 41, fat: 15 },
  { name: 'Aros de cebolla (fritos)', kcal: 400, protein: 5, carbs: 40, fat: 24 },
  { name: 'Alitas de pollo (buffalo)', kcal: 290, protein: 27, carbs: 3, fat: 19 },
  { name: 'Alitas de pollo (BBQ)', kcal: 280, protein: 25, carbs: 10, fat: 16 },

  // --- Comida italiana ---
  { name: 'Espagueti a la boloñesa', kcal: 150, protein: 7, carbs: 20, fat: 5 },
  { name: 'Espagueti carbonara', kcal: 195, protein: 8, carbs: 20, fat: 9 },
  { name: 'Lasaña de carne', kcal: 135, protein: 8, carbs: 11, fat: 7 },
  { name: 'Risotto', kcal: 150, protein: 3.5, carbs: 25, fat: 4 },
  { name: 'Pizza napolitana', kcal: 245, protein: 10, carbs: 31, fat: 9 },
  { name: 'Ravioles rellenos (carne/queso)', kcal: 180, protein: 8, carbs: 22, fat: 6 },
  { name: 'Canelones', kcal: 160, protein: 8, carbs: 16, fat: 7 },
  { name: 'Ñoquis con salsa', kcal: 150, protein: 4, carbs: 25, fat: 4 },
  { name: 'Pasta al pesto', kcal: 190, protein: 6, carbs: 24, fat: 8 },
  { name: 'Tiramisú', kcal: 330, protein: 5, carbs: 29, fat: 21 },
  { name: 'Panna cotta', kcal: 285, protein: 2.8, carbs: 20, fat: 21 },

  // --- Comida mexicana ---
  { name: 'Tacos al pastor', kcal: 200, protein: 12, carbs: 18, fat: 9 },
  { name: 'Quesadilla de queso', kcal: 275, protein: 12.5, carbs: 28, fat: 14 },
  { name: 'Burrito de carne y frijoles', kcal: 215, protein: 10, carbs: 25, fat: 8 },
  { name: 'Nachos con queso', kcal: 300, protein: 8, carbs: 30, fat: 17 },
  { name: 'Guacamole', kcal: 150, protein: 2, carbs: 8.5, fat: 13 },
  { name: 'Enchiladas de pollo', kcal: 210, protein: 9, carbs: 17, fat: 11 },
  { name: 'Fajitas de pollo', kcal: 160, protein: 14, carbs: 12, fat: 6 },
  { name: 'Chilaquiles', kcal: 190, protein: 7, carbs: 20, fat: 9 },
  { name: 'Tamales mexicanos', kcal: 205, protein: 4.5, carbs: 24, fat: 10.5 },
  { name: 'Churros', kcal: 380, protein: 4.5, carbs: 42, fat: 20 },

  // --- Comida asiática (china, japonesa, tailandesa) ---
  { name: 'Arroz frito chino', kcal: 174, protein: 4, carbs: 30, fat: 5 },
  { name: 'Pollo agridulce', kcal: 250, protein: 10, carbs: 24, fat: 13 },
  { name: 'Sushi (rollo california)', kcal: 145, protein: 4.5, carbs: 25, fat: 3 },
  { name: 'Sushi (rollo salmón y aguacate)', kcal: 170, protein: 6, carbs: 22, fat: 6 },
  { name: 'Ramen con pollo', kcal: 90, protein: 6, carbs: 10, fat: 3 },
  { name: 'Pad thai', kcal: 155, protein: 7.8, carbs: 22, fat: 4 },
  { name: 'Pollo teriyaki', kcal: 165, protein: 18, carbs: 8.5, fat: 5.5 },
  { name: 'Dumplings/dim sum (al vapor)', kcal: 200, protein: 8, carbs: 22, fat: 9 },
  { name: 'Sopa wonton', kcal: 40, protein: 3, carbs: 4, fat: 1.5 },
  { name: 'Curry verde tailandés con pollo', kcal: 120, protein: 9, carbs: 4, fat: 9 },
  { name: 'Arroz chaufa', kcal: 180, protein: 7, carbs: 24, fat: 6 },
  { name: 'Rollitos primavera (fritos)', kcal: 220, protein: 5, carbs: 24, fat: 11 },

  // --- Comida árabe/mediterránea ---
  { name: 'Falafel', kcal: 333, protein: 13.3, carbs: 32, fat: 18 },
  { name: 'Hummus', kcal: 166, protein: 7.9, carbs: 14.3, fat: 9.6 },
  { name: 'Tabulé', kcal: 120, protein: 1.6, carbs: 12, fat: 9 },
  { name: 'Kibbe', kcal: 220, protein: 11, carbs: 18, fat: 12 },
  { name: 'Baba ghanoush', kcal: 167, protein: 4.1, carbs: 11.4, fat: 13.2 },
  { name: 'Pan pita', kcal: 275, protein: 9, carbs: 55.7, fat: 1.2 },

  // --- Comida americana/otros ---
  { name: 'Sándwich BBQ de cerdo desmechado', kcal: 220, protein: 12, carbs: 23, fat: 8 },
  { name: 'Mac and cheese', kcal: 164, protein: 6.5, carbs: 16, fat: 8 },
  { name: 'Pancakes', kcal: 227, protein: 6.4, carbs: 28, fat: 7.5 },
  { name: 'Waffles', kcal: 291, protein: 7.9, carbs: 33, fat: 14.1 },
  { name: 'Ensalada César con pollo', kcal: 140, protein: 12, carbs: 5, fat: 8 },
  { name: 'Brownie', kcal: 466, protein: 5.5, carbs: 55, fat: 25 },
  { name: 'Cheesecake', kcal: 321, protein: 5.5, carbs: 25.5, fat: 22.5 },
  { name: 'Donas/donuts', kcal: 452, protein: 5, carbs: 51, fat: 25 },

  // --- Bebidas y postres internacionales ---
  { name: 'Helado de vainilla', kcal: 207, protein: 3.5, carbs: 24, fat: 11 },
  { name: 'Helado de chocolate', kcal: 216, protein: 3.8, carbs: 28, fat: 11 },
  { name: 'Malteada', kcal: 112, protein: 3.9, carbs: 17.8, fat: 3 },
  { name: 'Gaseosa/cola', kcal: 42, protein: 0, carbs: 10.6, fat: 0 },
  { name: 'Jugo de naranja envasado', kcal: 45, protein: 0.7, carbs: 10.4, fat: 0.2 },
  { name: 'Cerveza', kcal: 43, protein: 0.5, carbs: 3.6, fat: 0 },
  { name: 'Vino tinto', kcal: 85, protein: 0.1, carbs: 2.6, fat: 0 },
  { name: 'Café con leche', kcal: 55, protein: 3, carbs: 4.8, fat: 2.8 },
  { name: 'Capuchino', kcal: 40, protein: 2.5, carbs: 4, fat: 1.8 },
  { name: 'Té helado', kcal: 34, protein: 0, carbs: 8.5, fat: 0 },
  { name: 'Frappé de café', kcal: 90, protein: 2, carbs: 14, fat: 3 },

  // --- Panadería/desayuno internacional ---
  { name: 'Croissant', kcal: 414, protein: 9.2, carbs: 47, fat: 20.9 },
  { name: 'Pan francés/baguette', kcal: 272, protein: 9, carbs: 55.8, fat: 1.2 },
  { name: 'Muffin de arándanos', kcal: 340, protein: 6, carbs: 50, fat: 13 },
  { name: 'Bagel con queso crema', kcal: 280, protein: 10, carbs: 40, fat: 8 },
  { name: 'Tostadas francesas (French toast)', kcal: 229, protein: 7.9, carbs: 24.5, fat: 10 },
  { name: 'Granola con yogur', kcal: 170, protein: 6, carbs: 22, fat: 6 },

  // --- Región Caribe / Costeña ---
  { name: 'Arroz de lisa', kcal: 180, protein: 7, carbs: 27, fat: 5 },
  { name: 'Mote de queso (sopa de ñame con queso costeño)', kcal: 125, protein: 6, carbs: 14, fat: 5.5 },
  { name: 'Sancocho de guandú con carne salada', kcal: 100, protein: 7, carbs: 11, fat: 4 },
  { name: 'Sancocho de sábalo', kcal: 95, protein: 8, carbs: 9, fat: 3.5 },
  { name: 'Ceviche de camarón costeño', kcal: 95, protein: 15, carbs: 8, fat: 1.5 },
  { name: 'Boronía de plátano (puré de plátano y berenjena)', kcal: 150, protein: 4, carbs: 24, fat: 4.5 },
  { name: 'Dulce de coco', kcal: 330, protein: 2, carbs: 55, fat: 12 },
  { name: 'Cocadas', kcal: 380, protein: 3, carbs: 55, fat: 17 },
  { name: 'Butifarra soledeña', kcal: 300, protein: 18, carbs: 2, fat: 24 },
  { name: 'Carimañola (yuca rellena de carne, frita)', kcal: 280, protein: 8, carbs: 30, fat: 14 },
  { name: 'Bollo limpio (de maíz)', kcal: 180, protein: 4, carbs: 38, fat: 1.5 },
  { name: 'Posta cartagenera', kcal: 220, protein: 22, carbs: 10, fat: 10 },
  { name: 'Queso de capa', kcal: 300, protein: 24, carbs: 2, fat: 22 },

  // --- Región Pacífica ---
  { name: 'Encocado de pescado', kcal: 190, protein: 14, carbs: 8, fat: 12 },
  { name: 'Encocado de camarón', kcal: 175, protein: 15, carbs: 7, fat: 10 },
  { name: 'Tapao de pescado', kcal: 140, protein: 12, carbs: 12, fat: 5 },
  { name: 'Arroz con piangua', kcal: 170, protein: 8, carbs: 27, fat: 4 },
  { name: 'Pusandao', kcal: 110, protein: 7, carbs: 12, fat: 4 },
  { name: 'Aborrajado (plátano maduro relleno de queso, frito)', kcal: 290, protein: 6, carbs: 40, fat: 12 },
  { name: 'Empanadas de pipián (papa y maní)', kcal: 250, protein: 6, carbs: 32, fat: 11 },
  { name: 'Cuca (galleta de panela)', kcal: 420, protein: 6, carbs: 68, fat: 14 },
  { name: 'Champús', kcal: 65, protein: 0.5, carbs: 16, fat: 0.2 },
  { name: 'Marranitas de plátano (con chicharrón)', kcal: 420, protein: 8, carbs: 45, fat: 22 },
  { name: 'Cholado', kcal: 110, protein: 1.5, carbs: 24, fat: 1.5 },

  // --- Región Paisa / Antioquia ---
  { name: 'Mazamorra antioqueña', kcal: 110, protein: 3, carbs: 20, fat: 2 },
  { name: 'Calentao paisa', kcal: 170, protein: 9, carbs: 20, fat: 6.5 },
  { name: 'Natilla antioqueña', kcal: 115, protein: 2, carbs: 22, fat: 2.5 },

  // --- Región Andina / Cundiboyacense ---
  { name: 'Cuchuco boyacense con espinazo', kcal: 110, protein: 6, carbs: 14, fat: 3.5 },
  { name: 'Mute santandereano', kcal: 130, protein: 8, carbs: 15, fat: 4 },
  { name: 'Arroz de maíz', kcal: 150, protein: 3.5, carbs: 30, fat: 2 },
  { name: 'Longaniza santandereana', kcal: 330, protein: 20, carbs: 3, fat: 26 },
  { name: 'Hormigas culonas (tostadas)', kcal: 430, protein: 38, carbs: 5, fat: 25 },
  { name: 'Pepitoria', kcal: 220, protein: 14, carbs: 15, fat: 12 },
  { name: 'Envuelto de mazorca (dulce)', kcal: 200, protein: 4, carbs: 38, fat: 4 },

  // --- Región de los Llanos Orientales ---
  { name: 'Mamona/Ternera a la llanera', kcal: 230, protein: 27, carbs: 0, fat: 13 },
  { name: 'Casabe', kcal: 300, protein: 2.5, carbs: 71, fat: 0.5 },
  { name: 'Cachama asada', kcal: 115, protein: 19, carbs: 0, fat: 4 },
  { name: 'Hayaca llanera', kcal: 200, protein: 7, carbs: 27, fat: 8 },
  { name: 'Palo a pique (arroz con fríjol llanero)', kcal: 150, protein: 6, carbs: 25, fat: 3 },

  // --- Región Amazónica ---
  { name: 'Pescado moqueado (ahumado)', kcal: 150, protein: 26, carbs: 0, fat: 5 },
  { name: 'Fariña (harina de yuca tostada)', kcal: 360, protein: 1.6, carbs: 88, fat: 0.3 },
  { name: 'Patarashca', kcal: 140, protein: 20, carbs: 3, fat: 6 },

  // --- Región Insular (San Andrés y Providencia) ---
  { name: 'Rondón', kcal: 160, protein: 8, carbs: 12, fat: 10 },
  { name: 'Pan de fruta (San Andrés)', kcal: 320, protein: 5, carbs: 55, fat: 9 },
  { name: 'Patty (empanada isleña)', kcal: 320, protein: 9, carbs: 30, fat: 18 },
  { name: 'Crab back (muela de cangrejo rellena)', kcal: 180, protein: 14, carbs: 12, fat: 9 },

  // --- Frutas colombianas adicionales ---
  { name: 'Zapote', kcal: 124, protein: 1.5, carbs: 32, fat: 0.5 },
  { name: 'Níspero', kcal: 83, protein: 0.4, carbs: 20, fat: 1.1 },
  { name: 'Guama', kcal: 50, protein: 1, carbs: 14, fat: 0.1 },
  { name: 'Borojó', kcal: 93, protein: 1.1, carbs: 25, fat: 0.2 },
  { name: 'Uva caimarona', kcal: 60, protein: 0.6, carbs: 15, fat: 0.2 },
  { name: 'Marañón (fruta de cajú)', kcal: 46, protein: 0.2, carbs: 11, fat: 0.3 },
  { name: 'Badea', kcal: 68, protein: 1.5, carbs: 15, fat: 0.5 },
  { name: 'Granadilla', kcal: 80, protein: 1.5, carbs: 18, fat: 0.4 },
  { name: 'Tomate de árbol', kcal: 31, protein: 1.5, carbs: 7.7, fat: 0.4 },
  { name: 'Uchuva', kcal: 53, protein: 1.5, carbs: 12, fat: 0.5 },
  { name: 'Pitahaya amarilla', kcal: 57, protein: 1.2, carbs: 15, fat: 0.1 },

  // --- Desayunos y snacks colombianos comunes ---
  { name: 'Huevos pericos', kcal: 140, protein: 10, carbs: 4, fat: 9 },
  { name: 'Caldo de costilla', kcal: 70, protein: 6, carbs: 6, fat: 3 },
  { name: 'Mazorca asada', kcal: 110, protein: 3.5, carbs: 21, fat: 1.5 },
  { name: 'Mazorca cocinada', kcal: 96, protein: 3.3, carbs: 21, fat: 1.2 },
  { name: 'Obleas con arequipe', kcal: 330, protein: 4, carbs: 60, fat: 8 },
  { name: 'Salpicón de frutas', kcal: 70, protein: 1, carbs: 16, fat: 0.3 },
  { name: 'Raspao/raspado', kcal: 60, protein: 0, carbs: 15, fat: 0 },

  // --- Más proteínas ---
  { name: 'Lomo de cerdo (cocido)', kcal: 211, protein: 25.7, carbs: 0, fat: 11.4 },
  { name: 'Chuleta de cerdo (cocida)', kcal: 231, protein: 23.7, carbs: 0, fat: 15 },
  { name: 'Cordero (cocido)', kcal: 292, protein: 24.3, carbs: 0, fat: 20.8 },
  { name: 'Conejo (cocido)', kcal: 197, protein: 29.1, carbs: 0, fat: 8.1 },
  { name: 'Pavo molido (cocido)', kcal: 203, protein: 27.4, carbs: 0, fat: 10.3 },
  { name: 'Camarones (cocidos)', kcal: 99, protein: 24, carbs: 0.2, fat: 0.3 },
  { name: 'Langostinos (cocidos)', kcal: 106, protein: 20.3, carbs: 0.9, fat: 1.7 },
  { name: 'Pulpo (cocido)', kcal: 164, protein: 29.8, carbs: 4.4, fat: 2.1 },
  { name: 'Calamar (cocido)', kcal: 92, protein: 15.6, carbs: 3.1, fat: 1.4 },
  { name: 'Mejillones (cocidos)', kcal: 172, protein: 23.8, carbs: 7.4, fat: 4.5 },
  { name: 'Ostras (crudas)', kcal: 68, protein: 7.1, carbs: 3.9, fat: 2.5 },
  { name: 'Hígado de res (cocido)', kcal: 175, protein: 26.5, carbs: 4.9, fat: 4.9 },
  { name: 'Jamón de pavo', kcal: 120, protein: 17, carbs: 3, fat: 4 },
  { name: 'Jamón de cerdo (cocido)', kcal: 145, protein: 18, carbs: 2, fat: 6 },
  { name: 'Tocino/bacon (cocido)', kcal: 541, protein: 37, carbs: 1.4, fat: 42 },
  { name: 'Salchicha tipo viena', kcal: 230, protein: 10.5, carbs: 2.6, fat: 19.4 },
  { name: 'Salmón ahumado', kcal: 117, protein: 18.3, carbs: 0, fat: 4.3 },
  { name: 'Caballa/macarela (cocida)', kcal: 222, protein: 22.6, carbs: 0.4, fat: 13.8 },
  { name: 'Sardinas en lata (en aceite)', kcal: 208, protein: 24.6, carbs: 0, fat: 11.5 },
  { name: 'Bacalao (cocido)', kcal: 105, protein: 22.8, carbs: 0, fat: 0.9 },
  { name: 'Trucha (cocida)', kcal: 168, protein: 25, carbs: 0, fat: 7.4 },

  // --- Más lácteos ---
  { name: 'Queso mozzarella', kcal: 300, protein: 22, carbs: 2.2, fat: 22 },
  { name: 'Queso parmesano', kcal: 392, protein: 35.8, carbs: 3.2, fat: 25.8 },
  { name: 'Queso cheddar', kcal: 403, protein: 23, carbs: 1.3, fat: 33.1 },
  { name: 'Queso crema', kcal: 350, protein: 6, carbs: 4, fat: 35 },
  { name: 'Requesón/cottage cheese', kcal: 98, protein: 11.1, carbs: 3.4, fat: 4.3 },
  { name: 'Yogur natural (no griego)', kcal: 61, protein: 3.5, carbs: 4.7, fat: 3.3 },
  { name: 'Kéfir', kcal: 52, protein: 3.6, carbs: 7.5, fat: 1 },
  { name: 'Leche de almendras (sin azúcar)', kcal: 17, protein: 0.6, carbs: 0.6, fat: 1.5 },
  { name: 'Leche de coco (para cocinar)', kcal: 230, protein: 2.3, carbs: 5.5, fat: 24 },
  { name: 'Leche de avena (sin azúcar)', kcal: 47, protein: 1, carbs: 6.7, fat: 1.5 },
  { name: 'Mantequilla', kcal: 717, protein: 0.9, carbs: 0.1, fat: 81.1 },
  { name: 'Crema de leche/nata', kcal: 340, protein: 2.8, carbs: 2.7, fat: 36.1 },

  // --- Más granos y cereales ---
  { name: 'Cebada perlada (cocida)', kcal: 123, protein: 2.3, carbs: 28.1, fat: 0.4 },
  { name: 'Trigo sarraceno (cocido)', kcal: 92, protein: 3.4, carbs: 19.9, fat: 0.6 },
  { name: 'Mijo (cocido)', kcal: 119, protein: 3.5, carbs: 23.7, fat: 1 },
  { name: 'Centeno (grano, seco)', kcal: 338, protein: 10.3, carbs: 75.9, fat: 1.6 },
  { name: 'Cuscús (cocido)', kcal: 112, protein: 3.8, carbs: 23.2, fat: 0.2 },
  { name: 'Arroz jazmín (cocido)', kcal: 130, protein: 2.7, carbs: 28.2, fat: 0.2 },
  { name: 'Arroz basmati (cocido)', kcal: 130, protein: 2.7, carbs: 25.2, fat: 0.3 },
  { name: 'Harina de trigo (todo uso)', kcal: 364, protein: 10.3, carbs: 76.3, fat: 1 },
  { name: 'Harina de maíz precocida (masarepa)', kcal: 355, protein: 7, carbs: 76, fat: 2.5 },
  { name: 'Maicena (almidón de maíz)', kcal: 381, protein: 0.3, carbs: 91.3, fat: 0.1 },
  { name: 'Cereal de caja (corn flakes)', kcal: 357, protein: 7, carbs: 84, fat: 1 },
  { name: 'Granola', kcal: 489, protein: 14.9, carbs: 53, fat: 24.4 },

  // --- Más legumbres ---
  { name: 'Habas (cocidas)', kcal: 110, protein: 7.6, carbs: 19.6, fat: 0.4 },
  { name: 'Arvejas/guisantes (cocidos)', kcal: 79, protein: 5.2, carbs: 14.3, fat: 0.3 },
  { name: 'Edamame (cocido)', kcal: 121, protein: 11.9, carbs: 8.9, fat: 5.2 },

  // --- Más frutas comunes ---
  { name: 'Pera', kcal: 57, protein: 0.4, carbs: 15.2, fat: 0.1 },
  { name: 'Uvas', kcal: 69, protein: 0.7, carbs: 18.1, fat: 0.2 },
  { name: 'Sandía', kcal: 30, protein: 0.6, carbs: 7.6, fat: 0.2 },
  { name: 'Melón', kcal: 34, protein: 0.8, carbs: 8.2, fat: 0.2 },
  { name: 'Piña', kcal: 50, protein: 0.5, carbs: 13.1, fat: 0.1 },
  { name: 'Kiwi', kcal: 61, protein: 1.1, carbs: 14.7, fat: 0.5 },
  { name: 'Durazno/melocotón', kcal: 39, protein: 0.9, carbs: 9.5, fat: 0.3 },
  { name: 'Ciruela', kcal: 46, protein: 0.7, carbs: 11.4, fat: 0.3 },
  { name: 'Fresa', kcal: 32, protein: 0.7, carbs: 7.7, fat: 0.3 },
  { name: 'Arándanos', kcal: 57, protein: 0.7, carbs: 14.5, fat: 0.3 },
  { name: 'Frambuesa', kcal: 52, protein: 1.2, carbs: 11.9, fat: 0.7 },
  { name: 'Cereza', kcal: 63, protein: 1.1, carbs: 16, fat: 0.2 },
  { name: 'Coco (pulpa fresca)', kcal: 354, protein: 3.3, carbs: 15.2, fat: 33.5 },
  { name: 'Dátil', kcal: 282, protein: 2.5, carbs: 75, fat: 0.4 },
  { name: 'Higo (fresco)', kcal: 74, protein: 0.8, carbs: 19.2, fat: 0.3 },
  { name: 'Granada', kcal: 83, protein: 1.7, carbs: 18.7, fat: 1.2 },
  { name: 'Mandarina', kcal: 53, protein: 0.8, carbs: 13.3, fat: 0.3 },
  { name: 'Toronja/pomelo', kcal: 42, protein: 0.8, carbs: 10.7, fat: 0.1 },
  { name: 'Limón', kcal: 29, protein: 1.1, carbs: 9.3, fat: 0.3 },

  // --- Más verduras/vegetales ---
  { name: 'Pepino', kcal: 15, protein: 0.7, carbs: 3.6, fat: 0.1 },
  { name: 'Pimentón/pimiento', kcal: 31, protein: 1, carbs: 6, fat: 0.3 },
  { name: 'Cebolla', kcal: 40, protein: 1.1, carbs: 9.3, fat: 0.1 },
  { name: 'Ajo', kcal: 149, protein: 6.4, carbs: 33, fat: 0.5 },
  { name: 'Coliflor (cocida)', kcal: 23, protein: 1.8, carbs: 4.1, fat: 0.5 },
  { name: 'Repollo/col', kcal: 25, protein: 1.3, carbs: 5.8, fat: 0.1 },
  { name: 'Apio', kcal: 16, protein: 0.7, carbs: 3, fat: 0.2 },
  { name: 'Rábano', kcal: 16, protein: 0.7, carbs: 3.4, fat: 0.1 },
  { name: 'Remolacha/betabel (cocida)', kcal: 44, protein: 1.7, carbs: 10, fat: 0.2 },
  { name: 'Berenjena (cocida)', kcal: 35, protein: 0.8, carbs: 8.6, fat: 0.2 },
  { name: 'Calabacín/zucchini (cocido)', kcal: 17, protein: 1.2, carbs: 3.1, fat: 0.3 },
  { name: 'Champiñones/hongos (cocidos)', kcal: 28, protein: 3.4, carbs: 5.3, fat: 0.5 },
  { name: 'Lechuga', kcal: 15, protein: 1.4, carbs: 2.9, fat: 0.2 },
  { name: 'Kale/col rizada (cocida)', kcal: 28, protein: 1.9, carbs: 5.6, fat: 0.4 },
  { name: 'Espárragos (cocidos)', kcal: 22, protein: 2.4, carbs: 4.1, fat: 0.2 },
  { name: 'Alcachofa (cocida)', kcal: 51, protein: 2.9, carbs: 11.4, fat: 0.3 },
  { name: 'Maíz dulce/choclo (cocido)', kcal: 96, protein: 3.4, carbs: 21, fat: 1.5 },

  // --- Frutos secos y semillas ---
  { name: 'Nueces', kcal: 654, protein: 15.2, carbs: 13.7, fat: 65.2 },
  { name: 'Pistachos', kcal: 560, protein: 20.2, carbs: 27.2, fat: 45.3 },
  { name: 'Anacardos/marañón', kcal: 553, protein: 18.2, carbs: 30.2, fat: 43.9 },
  { name: 'Avellanas', kcal: 628, protein: 15, carbs: 16.7, fat: 60.8 },
  { name: 'Semillas de chía', kcal: 486, protein: 16.5, carbs: 42.1, fat: 30.7 },
  { name: 'Semillas de girasol', kcal: 584, protein: 20.8, carbs: 20, fat: 51.5 },
  { name: 'Semillas de calabaza', kcal: 559, protein: 30.2, carbs: 10.7, fat: 49 },
  { name: 'Linaza (semillas de lino)', kcal: 534, protein: 18.3, carbs: 28.9, fat: 42.2 },

  // --- Aceites y grasas ---
  { name: 'Aceite de coco', kcal: 862, protein: 0, carbs: 0, fat: 100 },
  { name: 'Aceite de canola', kcal: 884, protein: 0, carbs: 0, fat: 100 },
  { name: 'Aceite de girasol', kcal: 884, protein: 0, carbs: 0, fat: 100 },
  { name: 'Mantequilla de almendra', kcal: 614, protein: 21, carbs: 19, fat: 56 },

  // --- Condimentos y salsas comunes ---
  { name: 'Mayonesa', kcal: 680, protein: 1, carbs: 0.6, fat: 74.8 },
  { name: 'Kétchup', kcal: 97, protein: 1.7, carbs: 25.8, fat: 0.4 },
  { name: 'Mostaza', kcal: 66, protein: 3.7, carbs: 5.8, fat: 3.3 },
  { name: 'Salsa de tomate (para pasta)', kcal: 29, protein: 1.6, carbs: 5.4, fat: 0.4 },
  { name: 'Salsa de soya', kcal: 60, protein: 8, carbs: 6, fat: 0.1 },
  { name: 'Vinagre balsámico', kcal: 88, protein: 0.5, carbs: 17, fat: 0 },
  { name: 'Miel', kcal: 304, protein: 0.3, carbs: 82.4, fat: 0 },
  { name: 'Mermelada', kcal: 250, protein: 0.3, carbs: 65, fat: 0.1 },
  { name: 'Azúcar blanca', kcal: 387, protein: 0, carbs: 100, fat: 0 },

  // --- Snacks comunes ---
  { name: 'Papas fritas de bolsa (chips)', kcal: 536, protein: 6.6, carbs: 53, fat: 34.6 },
  { name: 'Palomitas de maíz (sin mantequilla)', kcal: 387, protein: 12.9, carbs: 77.5, fat: 4.5 },
  { name: 'Galletas tipo soda', kcal: 418, protein: 9.5, carbs: 74, fat: 8.6 },
  { name: 'Galletas dulces (tipo chips ahoy)', kcal: 471, protein: 5.4, carbs: 64, fat: 22 },
  { name: 'Barra de granola', kcal: 471, protein: 10.1, carbs: 64.4, fat: 19.8 },
  { name: 'Chocolate con leche (tableta)', kcal: 535, protein: 7.6, carbs: 59, fat: 29.7 },
  { name: 'Chocolate oscuro/amargo (70%)', kcal: 598, protein: 7.8, carbs: 45.9, fat: 42.6 },
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

