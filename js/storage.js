// Persistencia local (localStorage). Todo vive en el navegador del usuario.
const STORAGE_KEY = 'physiqueTrackerData_v1';

const DEFAULT_DATA = {
  profile: {
    name: '',
    sex: 'male',
    age: null,
    heightCm: null,
    activityLevel: 'moderate',
    goalCalories: null,       // si es null, se calcula automáticamente (TDEE)
    goalMode: 'maintain',     // 'lose' | 'maintain' | 'gain'
    weeklyExerciseGoal: 4
  },
  weights: [],     // {id, date, kg}
  meals: [],       // {id, date, time, description, calories, protein, carbs, fat}
  exercises: [],   // {id, date, type, durationMin, notes}
  bodyfat: []      // {id, date, percentage, heightCm, neckCm, waistCm, hipCm}
};

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    // merge con defaults por si faltan campos nuevos
    return {
      profile: { ...DEFAULT_DATA.profile, ...(parsed.profile || {}) },
      weights: parsed.weights || [],
      meals: parsed.meals || [],
      exercises: parsed.exercises || [],
      bodyfat: parsed.bodyfat || []
    };
  } catch (e) {
    console.error('Error leyendo datos locales, se reinicia el almacenamiento.', e);
    return structuredClone(DEFAULT_DATA);
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function todayStr() {
  const d = new Date();
  const off = d.getTimezoneOffset();
  const local = new Date(d.getTime() - off * 60000);
  return local.toISOString().slice(0, 10);
}

const Store = {
  data: loadData(),
  save() { saveData(this.data); },

  // --- profile ---
  updateProfile(patch) {
    this.data.profile = { ...this.data.profile, ...patch };
    this.save();
  },

  // --- weights ---
  addWeight(kg, date) {
    const entry = { id: genId(), date: date || todayStr(), kg: Number(kg) };
    this.data.weights.push(entry);
    this.data.weights.sort((a, b) => a.date.localeCompare(b.date));
    this.save();
    return entry;
  },
  deleteWeight(id) {
    this.data.weights = this.data.weights.filter(w => w.id !== id);
    this.save();
  },

  // --- meals ---
  addMeal(meal) {
    const entry = {
      id: genId(),
      date: meal.date || todayStr(),
      time: meal.time || new Date().toTimeString().slice(0, 5),
      description: meal.description || '',
      calories: Math.round(Number(meal.calories) || 0),
      protein: Math.round(Number(meal.protein) || 0),
      carbs: Math.round(Number(meal.carbs) || 0),
      fat: Math.round(Number(meal.fat) || 0)
    };
    this.data.meals.push(entry);
    this.save();
    return entry;
  },
  deleteMeal(id) {
    this.data.meals = this.data.meals.filter(m => m.id !== id);
    this.save();
  },

  // --- exercises ---
  addExercise(ex) {
    const entry = {
      id: genId(),
      date: ex.date || todayStr(),
      type: ex.type || 'Entrenamiento',
      durationMin: Math.round(Number(ex.durationMin) || 0),
      notes: ex.notes || ''
    };
    this.data.exercises.push(entry);
    this.save();
    return entry;
  },
  deleteExercise(id) {
    this.data.exercises = this.data.exercises.filter(e => e.id !== id);
    this.save();
  },

  // --- bodyfat ---
  addBodyFat(bf) {
    const entry = {
      id: genId(),
      date: bf.date || todayStr(),
      percentage: Number(bf.percentage),
      heightCm: bf.heightCm != null ? Number(bf.heightCm) : null,
      neckCm: bf.neckCm != null ? Number(bf.neckCm) : null,
      waistCm: bf.waistCm != null ? Number(bf.waistCm) : null,
      hipCm: bf.hipCm != null ? Number(bf.hipCm) : null
    };
    this.data.bodyfat.push(entry);
    this.data.bodyfat.sort((a, b) => a.date.localeCompare(b.date));
    this.save();
    return entry;
  },
  deleteBodyFat(id) {
    this.data.bodyfat = this.data.bodyfat.filter(b => b.id !== id);
    this.save();
  },

  exportJSON() {
    return JSON.stringify(this.data, null, 2);
  },
  importJSON(json) {
    const parsed = JSON.parse(json);
    this.data = {
      profile: { ...DEFAULT_DATA.profile, ...(parsed.profile || {}) },
      weights: parsed.weights || [],
      meals: parsed.meals || [],
      exercises: parsed.exercises || [],
      bodyfat: parsed.bodyfat || []
    };
    this.save();
  }
};
