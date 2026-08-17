// ==================== Helpers de fecha ====================
function startOfWeek(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const day = d.getDay();
  const diff = (day === 0 ? -6 : 1 - day);
  d.setDate(d.getDate() + diff);
  return d.toISOString().slice(0, 10);
}
function addDays(dateStr, n) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}
function fmtShort(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
}
const WEEKDAY_LABELS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

// ==================== Toast ====================
let toastTimer = null;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

// ==================== Navegación ====================
function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  renderView(view);
}
function renderView(view) {
  if (view === 'dashboard') renderDashboard();
  else if (view === 'meals') renderMeals();
  else if (view === 'weight') renderWeight();
  else if (view === 'exercise') renderExercise();
  else if (view === 'bodyfat') renderBodyFat();
  else if (view === 'settings') renderSettings();
}

// ==================== Modales ====================
function openModal(id) {
  document.getElementById('modal-overlay').classList.add('open');
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
  document.getElementById(id).classList.add('open');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
}

// ==================== Cálculo TDEE / meta calórica ====================
function getLatestWeight() {
  const w = Store.data.weights;
  return w.length ? w[w.length - 1].kg : null;
}
function computeGoalCalories() {
  const p = Store.data.profile;
  if (p.goalCalories) return p.goalCalories;
  const weight = getLatestWeight();
  if (!weight || !p.age || !p.heightCm) return null;

  let bmr = p.sex === 'female'
    ? 10 * weight + 6.25 * p.heightCm - 5 * p.age - 161
    : 10 * weight + 6.25 * p.heightCm - 5 * p.age + 5;

  const factors = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, veryActive: 1.9 };
  let tdee = bmr * (factors[p.activityLevel] || 1.375);

  if (p.goalMode === 'lose') tdee -= 500;
  else if (p.goalMode === 'gain') tdee += 300;

  return Math.round(tdee);
}

function computeGoalProtein() {
  const p = Store.data.profile;
  if (p.goalProtein) return p.goalProtein;
  const weight = getLatestWeight();
  if (!weight) return null;
  const gramsPerKg = { lose: 2.2, maintain: 1.6, gain: 1.8 };
  return Math.round(weight * (gramsPerKg[p.goalMode] || 1.6));
}

// ==================== DASHBOARD ====================
function renderDashboard() {
  const today = todayStr();
  document.getElementById('dash-date').textContent = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
  const name = Store.data.profile.name;
  document.getElementById('dash-greeting').textContent = name ? `Hola, ${name} 👋` : 'Hola 👋';

  // Calorías de hoy
  const todayMeals = Store.data.meals.filter(m => m.date === today);
  const consumed = todayMeals.reduce((s, m) => s + m.calories, 0);
  const protein = todayMeals.reduce((s, m) => s + m.protein, 0);
  const carbs = todayMeals.reduce((s, m) => s + m.carbs, 0);
  const fat = todayMeals.reduce((s, m) => s + m.fat, 0);
  const goal = computeGoalCalories();

  document.getElementById('cal-consumed').textContent = consumed;
  document.getElementById('cal-goal').textContent = goal || '--';
  const proteinGoal = computeGoalProtein();
  document.getElementById('dash-protein').textContent = Math.round(protein);
  document.getElementById('dash-protein-goal').textContent = proteinGoal || '--';
  document.getElementById('dash-protein-pill').classList.toggle('met', !!proteinGoal && protein >= proteinGoal);
  document.getElementById('dash-carbs').textContent = Math.round(carbs);
  document.getElementById('dash-fat').textContent = Math.round(fat);

  const ring = document.getElementById('cal-ring-fg');
  const circumference = 326.7;
  const pct = goal ? Math.min(1, consumed / goal) : 0;
  ring.style.strokeDashoffset = String(circumference * (1 - pct));
  ring.style.stroke = goal && consumed > goal ? 'var(--orange)' : 'var(--accent)';

  // Peso
  const weights = Store.data.weights;
  if (weights.length) {
    const last = weights[weights.length - 1];
    document.getElementById('dash-weight').textContent = `${last.kg} kg`;
    if (weights.length > 1) {
      const prev = weights[weights.length - 2];
      const diff = Math.round((last.kg - prev.kg) * 10) / 10;
      const sign = diff > 0 ? '+' : '';
      document.getElementById('dash-weight-change').textContent = `${sign}${diff} kg desde el registro anterior`;
    } else {
      document.getElementById('dash-weight-change').textContent = 'Primer registro';
    }
  } else {
    document.getElementById('dash-weight').textContent = '--';
    document.getElementById('dash-weight-change').textContent = 'Sin registros';
  }

  // Ejercicio semanal
  const weekStart = startOfWeek(today);
  const weekEx = Store.data.exercises.filter(e => startOfWeek(e.date) === weekStart);
  const uniqueDays = new Set(weekEx.map(e => e.date));
  document.getElementById('dash-exercise-count').innerHTML = `${uniqueDays.size}<small>/<span>${Store.data.profile.weeklyExerciseGoal}</span></small>`;
  renderWeekDots('dash-week-dots', uniqueDays, weekStart);

  // Grasa corporal
  const bf = Store.data.bodyfat;
  if (bf.length) {
    const last = bf[bf.length - 1];
    document.getElementById('dash-bodyfat').textContent = `${last.percentage}%`;
    document.getElementById('dash-bodyfat-date').textContent = fmtShort(last.date);
  } else {
    document.getElementById('dash-bodyfat').textContent = '--';
    document.getElementById('dash-bodyfat-date').textContent = 'Sin registros';
  }

  // Chart de peso (últimos 60 días)
  const chartPoints = weights.slice(-20).map(w => ({ label: fmtShort(w.date), y: w.kg }));
  renderLineChart(document.getElementById('dash-weight-chart'), chartPoints, { color: '#4ade80', unit: 'kg' });

  // Comidas de hoy
  renderMealList(document.getElementById('dash-today-meals'), todayMeals, true);
}

function renderWeekDots(containerId, doneDatesSet, weekStart) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const date = addDays(weekStart, i);
    const done = doneDatesSet.has(date);
    const isFuture = date > todayStr();
    const div = document.createElement('div');
    div.className = 'week-dot' + (done ? ' done' : '');
    div.textContent = done ? '✓' : WEEKDAY_LABELS[i];
    div.style.opacity = isFuture && !done ? '0.4' : '1';
    container.appendChild(div);
  }
}

// ==================== COMIDAS ====================
function renderMealList(container, meals, compact) {
  container.innerHTML = '';
  if (!meals.length) {
    container.innerHTML = '<p class="empty-hint">Sin comidas registradas.</p>';
    return;
  }
  const sorted = [...meals].sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));
  sorted.forEach(m => {
    const item = document.createElement('div');
    item.className = 'list-item';
    const dateLabel = compact ? m.time : `${fmtShort(m.date)} · ${m.time}`;
    item.innerHTML = `
      <div class="thumb" style="display:flex;align-items:center;justify-content:center;background:var(--bg-card-hover);font-size:18px;">🍽️</div>
      <div class="li-main">
        <p class="li-title">${escapeHtml(m.description || 'Comida')}</p>
        <p class="li-sub">${dateLabel} · P${m.protein}g C${m.carbs}g G${m.fat}g</p>
      </div>
      <div class="li-value">${m.calories} kcal</div>
      <button class="li-del" data-del-meal="${m.id}">✕</button>
    `;
    container.appendChild(item);
  });
  container.querySelectorAll('[data-del-meal]').forEach(btn => {
    btn.addEventListener('click', () => {
      Store.deleteMeal(btn.dataset.delMeal);
      renderView(currentView());
    });
  });
}

function renderMeals() {
  const today = todayStr();
  const todayMeals = Store.data.meals.filter(m => m.date === today);
  const total = todayMeals.reduce((s, m) => s + m.calories, 0);
  const proteinTotal = todayMeals.reduce((s, m) => s + m.protein, 0);
  const proteinGoal = computeGoalProtein();
  document.getElementById('meals-today-total').textContent = `${total} kcal`;
  document.getElementById('meals-today-protein').textContent = `Proteína: ${Math.round(proteinTotal)}/${proteinGoal || '--'}g`;
  renderMealList(document.getElementById('meals-today-list'), todayMeals, true);

  const history = Store.data.meals.filter(m => m.date !== today);
  renderMealList(document.getElementById('meals-history-list'), history, false);
}

function currentView() {
  const active = document.querySelector('.view.active');
  return active.id.replace('view-', '');
}

// ==================== PESO ====================
function renderWeight() {
  const weights = Store.data.weights;
  const points = weights.map(w => ({ label: fmtShort(w.date), y: w.kg }));
  renderLineChart(document.getElementById('weight-chart'), points, { color: '#4ade80', unit: 'kg' });

  const container = document.getElementById('weight-history-list');
  container.innerHTML = '';
  if (!weights.length) {
    container.innerHTML = '<p class="empty-hint">Sin registros de peso.</p>';
    return;
  }
  [...weights].reverse().forEach(w => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="li-main"><p class="li-title">${fmtShort(w.date)}</p></div>
      <div class="li-value">${w.kg} kg</div>
      <button class="li-del" data-del-weight="${w.id}">✕</button>
    `;
    container.appendChild(item);
  });
  container.querySelectorAll('[data-del-weight]').forEach(btn => {
    btn.addEventListener('click', () => {
      Store.deleteWeight(btn.dataset.delWeight);
      renderWeight(); renderDashboard();
    });
  });
}

// ==================== EJERCICIO ====================
function renderExercise() {
  const today = todayStr();
  const weekStart = startOfWeek(today);
  const weekEx = Store.data.exercises.filter(e => startOfWeek(e.date) === weekStart);
  const uniqueDays = new Set(weekEx.map(e => e.date));

  document.getElementById('ex-week-count').innerHTML = `${uniqueDays.size}<small>/<span>${Store.data.profile.weeklyExerciseGoal}</span> sesiones</small>`;
  renderWeekDots('ex-week-dots', uniqueDays, weekStart);

  // últimas 8 semanas
  const weekPoints = [];
  for (let i = 7; i >= 0; i--) {
    const ws = addDays(weekStart, -7 * i);
    const count = new Set(Store.data.exercises.filter(e => startOfWeek(e.date) === ws).map(e => e.date)).size;
    weekPoints.push({ label: fmtShort(ws), y: count });
  }
  renderBarChart(document.getElementById('exercise-chart'), weekPoints, { color: '#60a5fa' });

  const container = document.getElementById('exercise-history-list');
  container.innerHTML = '';
  if (!Store.data.exercises.length) {
    container.innerHTML = '<p class="empty-hint">Sin ejercicios registrados.</p>';
    return;
  }
  [...Store.data.exercises].sort((a, b) => b.date.localeCompare(a.date)).forEach(e => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="li-main">
        <p class="li-title">${escapeHtml(e.type)}</p>
        <p class="li-sub">${fmtShort(e.date)}${e.notes ? ' · ' + escapeHtml(e.notes) : ''}</p>
      </div>
      <div class="li-value">${e.durationMin} min</div>
      <button class="li-del" data-del-ex="${e.id}">✕</button>
    `;
    container.appendChild(item);
  });
  container.querySelectorAll('[data-del-ex]').forEach(btn => {
    btn.addEventListener('click', () => {
      Store.deleteExercise(btn.dataset.delEx);
      renderExercise(); renderDashboard();
    });
  });
}

// ==================== GRASA CORPORAL ====================
function renderBodyFat() {
  const bf = Store.data.bodyfat;
  const points = bf.map(b => ({ label: fmtShort(b.date), y: b.percentage }));
  renderLineChart(document.getElementById('bodyfat-chart'), points, { color: '#f472b6', unit: '%' });

  const container = document.getElementById('bodyfat-history-list');
  container.innerHTML = '';
  if (!bf.length) {
    container.innerHTML = '<p class="empty-hint">Sin registros.</p>';
    return;
  }
  [...bf].reverse().forEach(b => {
    const item = document.createElement('div');
    item.className = 'list-item';
    const measures = [b.neckCm && `cuello ${b.neckCm}`, b.waistCm && `cintura ${b.waistCm}`, b.hipCm && `cadera ${b.hipCm}`].filter(Boolean).join(' · ');
    item.innerHTML = `
      <div class="li-main">
        <p class="li-title">${fmtShort(b.date)}</p>
        <p class="li-sub">${measures}</p>
      </div>
      <div class="li-value">${b.percentage}%</div>
      <button class="li-del" data-del-bf="${b.id}">✕</button>
    `;
    container.appendChild(item);
  });
  container.querySelectorAll('[data-del-bf]').forEach(btn => {
    btn.addEventListener('click', () => {
      Store.deleteBodyFat(btn.dataset.delBf);
      renderBodyFat(); renderDashboard();
    });
  });
}

// ==================== AJUSTES ====================
function renderSettings() {
  const p = Store.data.profile;
  document.getElementById('p-name').value = p.name || '';
  document.getElementById('p-sex').value = p.sex;
  document.getElementById('p-age').value = p.age || '';
  document.getElementById('p-height').value = p.heightCm || '';
  document.getElementById('p-activity').value = p.activityLevel;
  document.getElementById('p-goal-mode').value = p.goalMode;
  document.getElementById('p-goal-calories').value = p.goalCalories || '';
  document.getElementById('p-goal-protein').value = p.goalProtein || '';
  document.getElementById('p-weekly-goal').value = p.weeklyExerciseGoal;
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ==================== INIT ====================
function init() {
  // datalist de alimentos
  const datalist = document.getElementById('food-datalist');
  FOOD_DB.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.name;
    datalist.appendChild(opt);
  });

  // navegación
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  // cerrar modal
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
  document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', closeModal));

  bindWeightModal();
  bindExerciseModal();
  bindMealManualModal();
  bindBodyFatModal();
  bindSettings();

  switchView('dashboard');
}

// ---- Modal: Peso ----
function bindWeightModal() {
  document.getElementById('btn-open-weight').addEventListener('click', () => {
    document.getElementById('w-date').value = todayStr();
    document.getElementById('w-kg').value = getLatestWeight() || '';
    openModal('modal-weight');
  });
  document.getElementById('form-weight').addEventListener('submit', (e) => {
    e.preventDefault();
    Store.addWeight(document.getElementById('w-kg').value, document.getElementById('w-date').value);
    closeModal();
    toast('Peso registrado ✅');
    renderView(currentView());
  });
}

// ---- Modal: Ejercicio ----
function bindExerciseModal() {
  document.getElementById('btn-open-exercise').addEventListener('click', () => {
    document.getElementById('e-date').value = todayStr();
    document.getElementById('e-notes').value = '';
    openModal('modal-exercise');
  });
  document.getElementById('form-exercise').addEventListener('submit', (e) => {
    e.preventDefault();
    Store.addExercise({
      date: document.getElementById('e-date').value,
      type: document.getElementById('e-type').value,
      durationMin: document.getElementById('e-duration').value,
      notes: document.getElementById('e-notes').value
    });
    closeModal();
    toast('Ejercicio registrado 💪');
    renderView(currentView());
  });
}

// ---- Modal: Comida manual (por peso) ----
function bindMealManualModal() {
  let lastResult = null;

  document.getElementById('btn-open-meal-manual').addEventListener('click', () => {
    document.getElementById('form-meal-manual').reset();
    document.getElementById('m-grams').value = 100;
    document.getElementById('m-manual-result').classList.remove('show');
    document.getElementById('btn-save-manual').disabled = true;
    lastResult = null;
    openModal('modal-meal-manual');
  });

  document.getElementById('btn-estimate-manual').addEventListener('click', () => {
    const name = document.getElementById('m-name').value.trim();
    const grams = document.getElementById('m-grams').value;
    if (!name || !grams) { toast('Completa el alimento y los gramos'); return; }

    const resultBox = document.getElementById('m-manual-result');

    const result = estimateFromLocalDB(name, grams);
    if (!result) {
      resultBox.innerHTML = `<p class="ar-title">No encontrado en la base de datos</p><p class="li-sub">Prueba con un nombre más simple (ej: "pollo", "arroz", "huevo"). Puedes ver las opciones escribiendo en el campo — se sugieren mientras escribes.</p>`;
      resultBox.classList.add('show');
      document.getElementById('btn-save-manual').disabled = true;
      return;
    }

    lastResult = { ...result, name: result.matchedName || name, grams };
    resultBox.innerHTML = `
      <p class="ar-title">${escapeHtml(lastResult.name)} · ${grams} g</p>
      <div class="ar-row"><span>Calorías</span><b>${result.calories} kcal</b></div>
      <div class="ar-row"><span>Proteína</span><span>${result.protein} g</span></div>
      <div class="ar-row"><span>Carbohidratos</span><span>${result.carbs} g</span></div>
      <div class="ar-row"><span>Grasa</span><span>${result.fat} g</span></div>
    `;
    resultBox.classList.add('show');
    document.getElementById('btn-save-manual').disabled = false;
  });

  document.getElementById('form-meal-manual').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!lastResult) return;
    Store.addMeal({
      description: `${lastResult.name} (${lastResult.grams} g)`,
      calories: lastResult.calories,
      protein: lastResult.protein,
      carbs: lastResult.carbs,
      fat: lastResult.fat
    });
    closeModal();
    toast('Comida registrada ✅');
    renderView(currentView() === 'dashboard' || currentView() === 'meals' ? currentView() : 'meals');
    renderDashboard();
  });
}

// ---- Modal: Grasa corporal por medidas (método Marina de EE.UU.) ----
function computeNavyBodyFat({ sex, heightCm, neckCm, waistCm, hipCm }) {
  if (sex === 'female') {
    if (!(waistCm + hipCm > neckCm)) return null;
    const pct = 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hipCm - neckCm) + 0.22100 * Math.log10(heightCm)) - 450;
    return Math.round(pct * 10) / 10;
  }
  if (!(waistCm > neckCm)) return null;
  const pct = 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450;
  return Math.round(pct * 10) / 10;
}

function bindBodyFatModal() {
  let lastResult = null;

  document.getElementById('btn-open-bodyfat').addEventListener('click', () => {
    const p = Store.data.profile;
    document.getElementById('form-bodyfat').reset();
    document.getElementById('bf-date').value = todayStr();
    document.getElementById('bf-height').value = p.heightCm || '';
    document.getElementById('bf-hip-label').style.display = p.sex === 'female' ? 'flex' : 'none';
    document.getElementById('bf-hip').required = p.sex === 'female';
    document.getElementById('bf-result').classList.remove('show');
    document.getElementById('btn-save-bodyfat').disabled = true;
    lastResult = null;
    openModal('modal-bodyfat');
  });

  document.getElementById('btn-calc-bodyfat').addEventListener('click', () => {
    const p = Store.data.profile;
    const heightCm = Number(document.getElementById('bf-height').value);
    const neckCm = Number(document.getElementById('bf-neck').value);
    const waistCm = Number(document.getElementById('bf-waist').value);
    const hipCm = Number(document.getElementById('bf-hip').value) || null;
    const resultBox = document.getElementById('bf-result');

    if (!heightCm || !neckCm || !waistCm || (p.sex === 'female' && !hipCm)) {
      toast('Completa todas las medidas requeridas');
      return;
    }
    const percentage = computeNavyBodyFat({ sex: p.sex, heightCm, neckCm, waistCm, hipCm });
    if (percentage == null || !isFinite(percentage) || percentage <= 0) {
      resultBox.innerHTML = `<p class="ar-title">Medidas fuera de rango</p><p class="li-sub">Revisa que la cintura sea mayor que el cuello (y que la suma cintura+cadera sea mayor que el cuello en mujeres).</p>`;
      resultBox.classList.add('show');
      document.getElementById('btn-save-bodyfat').disabled = true;
      return;
    }
    lastResult = { percentage, heightCm, neckCm, waistCm, hipCm };
    resultBox.innerHTML = `<p class="ar-title">Estimación: ${percentage}%</p><p class="li-sub">Método Marina de EE.UU. — aproximación, no una medición clínica.</p>`;
    resultBox.classList.add('show');
    document.getElementById('btn-save-bodyfat').disabled = false;
  });

  document.getElementById('form-bodyfat').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!lastResult) return;
    Store.addBodyFat({ date: document.getElementById('bf-date').value, ...lastResult });
    closeModal();
    toast('Grasa corporal registrada ✅');
    renderView(currentView() === 'dashboard' || currentView() === 'bodyfat' ? currentView() : 'bodyfat');
    renderDashboard();
  });
}

// ---- Ajustes ----
function bindSettings() {
  document.getElementById('form-profile').addEventListener('submit', (e) => {
    e.preventDefault();
    Store.updateProfile({
      name: document.getElementById('p-name').value.trim(),
      sex: document.getElementById('p-sex').value,
      age: Number(document.getElementById('p-age').value) || null,
      heightCm: Number(document.getElementById('p-height').value) || null,
      activityLevel: document.getElementById('p-activity').value,
      goalMode: document.getElementById('p-goal-mode').value,
      goalCalories: Number(document.getElementById('p-goal-calories').value) || null,
      goalProtein: Number(document.getElementById('p-goal-protein').value) || null,
      weeklyExerciseGoal: Number(document.getElementById('p-weekly-goal').value) || 4
    });
    toast('Perfil guardado ✅');
    renderDashboard();
  });

  document.getElementById('btn-export').addEventListener('click', () => {
    const blob = new Blob([Store.exportJSON()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `physique-tracker-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('btn-import').addEventListener('click', () => {
    document.getElementById('input-import').click();
  });
  document.getElementById('input-import').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      Store.importJSON(text);
      toast('Datos importados ✅');
      renderView('dashboard');
      switchView('dashboard');
    } catch (err) {
      toast('Archivo inválido');
    }
  });

  document.getElementById('btn-clear').addEventListener('click', () => {
    if (confirm('¿Seguro que quieres borrar TODOS los datos de la app? Esta acción no se puede deshacer.')) {
      localStorage.removeItem(STORAGE_KEY);
      Store.data = loadData();
      toast('Datos borrados');
      switchView('dashboard');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
