const WORDS = Object.freeze([
  {
    "id": "compliance",
    "en": "compliance",
    "he": "היענות / ציות / הסכמה",
    "cat": "Vocabulary",
    "accept": [
      "compliance"
    ]
  },
  {
    "id": "induce",
    "en": "induce",
    "he": "לגרום / לשכנע",
    "cat": "Vocabulary",
    "accept": [
      "induce"
    ]
  },
  {
    "id": "subjects",
    "en": "subjects",
    "he": "נבדקים / משתתפים",
    "cat": "Vocabulary",
    "accept": [
      "subjects",
      "participants"
    ]
  },
  {
    "id": "explore",
    "en": "explore",
    "he": "לחקור / לבדוק",
    "cat": "Vocabulary",
    "accept": [
      "explore",
      "research"
    ]
  },
  {
    "id": "substantial",
    "en": "substantial",
    "he": "משמעותי / ניכר / גדול",
    "cat": "Vocabulary",
    "accept": [
      "substantial",
      "large"
    ]
  },
  {
    "id": "pro-social",
    "en": "pro-social",
    "he": "פרו־חברתי / חברתי",
    "cat": "Vocabulary",
    "accept": [
      "pro-social",
      "pro social",
      "prosocial"
    ]
  },
  {
    "id": "unscrupulous",
    "en": "unscrupulous",
    "he": "חסר מצפון / לא מוסרי",
    "cat": "Vocabulary",
    "accept": [
      "unscrupulous"
    ]
  },
  {
    "id": "discourage",
    "en": "discourage",
    "he": "להרתיע / לייאש",
    "cat": "Vocabulary",
    "accept": [
      "discourage"
    ]
  },
  {
    "id": "average-mean",
    "en": "average = mean",
    "he": "ממוצע",
    "cat": "Business English",
    "accept": [
      "average",
      "mean",
      "average mean"
    ]
  },
  {
    "id": "capital-fortune",
    "en": "capital = fortune",
    "he": "הון / רכוש",
    "cat": "Business English",
    "accept": [
      "capital",
      "fortune",
      "capital fortune"
    ]
  },
  {
    "id": "capitalize",
    "en": "capitalize (v.)",
    "he": "להוון / לנצל לתועלת",
    "cat": "Business English",
    "accept": [
      "capitalize"
    ]
  },
  {
    "id": "commodity",
    "en": "commodity",
    "he": "סחורה / מוצר בסיסי",
    "cat": "Business English",
    "accept": [
      "commodity"
    ]
  },
  {
    "id": "devaluation-overvaluation",
    "en": "devaluation ≠ overvaluation",
    "he": "פיחות ≠ הערכת יתר של המטבע",
    "cat": "Business English",
    "accept": [
      "devaluation",
      "overvaluation",
      "devaluation overvaluation"
    ]
  },
  {
    "id": "economic",
    "en": "economic",
    "he": "כלכלי",
    "cat": "Business English",
    "accept": [
      "economic"
    ]
  },
  {
    "id": "economical",
    "en": "economical",
    "he": "חסכוני",
    "cat": "Business English",
    "accept": [
      "economical"
    ]
  },
  {
    "id": "economics",
    "en": "economics",
    "he": "כלכלה — תחום הלימוד",
    "cat": "Business English",
    "accept": [
      "economics"
    ]
  },
  {
    "id": "economist",
    "en": "economist",
    "he": "כלכלן",
    "cat": "Business English",
    "accept": [
      "economist"
    ]
  },
  {
    "id": "economy",
    "en": "economy",
    "he": "כלכלה / משק",
    "cat": "Business English",
    "accept": [
      "economy"
    ]
  },
  {
    "id": "executive-senior-manager",
    "en": "executive = senior manager",
    "he": "מנהל בכיר",
    "cat": "Business English",
    "accept": [
      "executive",
      "senior manager",
      "executive senior manager"
    ]
  },
  {
    "id": "expenditure",
    "en": "expenditure",
    "he": "הוצאה / הוצאות",
    "cat": "Business English",
    "accept": [
      "expenditure"
    ]
  },
  {
    "id": "franchise",
    "en": "franchise",
    "he": "זיכיון",
    "cat": "Business English",
    "accept": [
      "franchise"
    ]
  },
  {
    "id": "labor",
    "en": "labor",
    "he": "עבודה / כוח עבודה",
    "cat": "Business English",
    "accept": [
      "labor",
      "labour"
    ]
  },
  {
    "id": "lend-borrow",
    "en": "lend ≠ borrow",
    "he": "להלוות ≠ ללוות",
    "cat": "Business English",
    "accept": [
      "lend",
      "borrow",
      "lend borrow"
    ]
  },
  {
    "id": "overhead",
    "en": "overhead",
    "he": "תקורות / עלויות כלליות",
    "cat": "Business English",
    "accept": [
      "overhead"
    ]
  },
  {
    "id": "phenomenon-phenomena",
    "en": "phenomenon, phenomena",
    "he": "תופעה; תופעות",
    "cat": "Business English",
    "accept": [
      "phenomenon",
      "phenomena"
    ]
  },
  {
    "id": "propensity-tendency",
    "en": "propensity = tendency",
    "he": "נטייה",
    "cat": "Business English",
    "accept": [
      "propensity",
      "tendency",
      "propensity tendency"
    ]
  },
  {
    "id": "recession",
    "en": "recession",
    "he": "מיתון",
    "cat": "Business English",
    "accept": [
      "recession"
    ]
  },
  {
    "id": "carry-out",
    "en": "carry out",
    "he": "לבצע",
    "cat": "Terms & Expressions",
    "accept": [
      "carry out"
    ]
  },
  {
    "id": "disposable-income",
    "en": "disposable income",
    "he": "הכנסה פנויה",
    "cat": "Terms & Expressions",
    "accept": [
      "disposable income"
    ]
  },
  {
    "id": "economic-growth",
    "en": "economic growth",
    "he": "צמיחה כלכלית",
    "cat": "Terms & Expressions",
    "accept": [
      "economic growth"
    ]
  },
  {
    "id": "economic-prosperity",
    "en": "economic prosperity",
    "he": "שגשוג כלכלי",
    "cat": "Terms & Expressions",
    "accept": [
      "economic prosperity"
    ]
  },
  {
    "id": "economies-of-scale",
    "en": "economies of scale",
    "he": "יתרונות לגודל",
    "cat": "Terms & Expressions",
    "accept": [
      "economies of scale"
    ]
  },
  {
    "id": "fringe-benefits",
    "en": "fringe benefits",
    "he": "הטבות נלוות",
    "cat": "Terms & Expressions",
    "accept": [
      "fringe benefits"
    ]
  },
  {
    "id": "guaranteed-period",
    "en": "guaranteed period",
    "he": "תקופת אחריות / תקופה מובטחת",
    "cat": "Terms & Expressions",
    "accept": [
      "guaranteed period"
    ]
  },
  {
    "id": "industrialized-countries",
    "en": "industrialized countries",
    "he": "מדינות מתועשות",
    "cat": "Terms & Expressions",
    "accept": [
      "industrialized countries",
      "industrialised countries"
    ]
  },
  {
    "id": "market-segment",
    "en": "market segment",
    "he": "פלח שוק",
    "cat": "Terms & Expressions",
    "accept": [
      "market segment"
    ]
  },
  {
    "id": "peak-viewing-times",
    "en": "peak viewing times",
    "he": "שעות צפיית שיא",
    "cat": "Terms & Expressions",
    "accept": [
      "peak viewing times"
    ]
  },
  {
    "id": "propaganda-techniques",
    "en": "propaganda techniques",
    "he": "טכניקות תעמולה",
    "cat": "Terms & Expressions",
    "accept": [
      "propaganda techniques"
    ]
  },
  {
    "id": "raw-materials",
    "en": "raw materials",
    "he": "חומרי גלם",
    "cat": "Terms & Expressions",
    "accept": [
      "raw materials"
    ]
  },
  {
    "id": "senior-junior-employee",
    "en": "senior employee ≠ junior employee",
    "he": "עובד בכיר ≠ עובד זוטר",
    "cat": "Terms & Expressions",
    "accept": [
      "senior employee",
      "junior employee",
      "senior junior employee"
    ]
  },
  {
    "id": "spreadsheet-software",
    "en": "spreadsheet software",
    "he": "תוכנת גיליונות אלקטרוניים",
    "cat": "Terms & Expressions",
    "accept": [
      "spreadsheet software"
    ]
  },
  {
    "id": "tailor-product",
    "en": "to tailor a product to consumer requirements/needs",
    "he": "להתאים מוצר לדרישות / לצורכי הצרכן",
    "cat": "Terms & Expressions",
    "accept": [
      "tailor a product",
      "to tailor a product",
      "to tailor a product to consumer requirements",
      "to tailor a product to consumer needs"
    ]
  },
  {
    "id": "vice-president",
    "en": "vice president",
    "he": "סגן נשיא / סמנכ״ל",
    "cat": "Terms & Expressions",
    "accept": [
      "vice president"
    ]
  },
  {
    "id": "persuade",
    "en": "persuade",
    "he": "לשכנע",
    "cat": "Extra",
    "accept": [
      "persuade"
    ]
  },
  {
    "id": "empirical",
    "en": "empirical",
    "he": "אמפירי / מבוסס על ניסוי או תצפית",
    "cat": "Extra",
    "accept": [
      "empirical"
    ]
  },
  {
    "id": "implicit",
    "en": "implicit",
    "he": "משתמע / מרומז / לא מפורש",
    "cat": "Extra",
    "accept": [
      "implicit"
    ]
  }
]);

const APP_VERSION = window.__VOCAB_QUEST_VERSION__ || 'sync-v1';
const STORAGE_KEY = 'vocabQuest.sync.state.v1';
const UI_KEY = 'vocabQuest.sync.ui.v1';
const DAY = 24 * 60 * 60 * 1000;
const REVIEW_INTERVALS = [0, 1, 2, 4, 7, 14];
const CATEGORY_LABELS = ['Vocabulary', 'Business English', 'Terms & Expressions', 'Extra'];

let appState = ensureState(loadJson(STORAGE_KEY, null));
let ui = Object.assign({ view: 'home', wordSearch: '', wordCat: 'all', examSize: 20 }, loadJson(UI_KEY, {}));
let session = {};
let cloudTimer = null;
let toastTimer = null;

const firebase = {
  configured: false,
  ready: false,
  user: null,
  auth: null,
  db: null,
  mods: null,
  unsub: null,
  busy: false,
  error: '',
  lastSync: 0
};

const appEl = document.getElementById('app');
const toastEl = document.getElementById('toast');

function now() { return Date.now(); }
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[ch]));
}
function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
function pct(n) { return Number.isFinite(n) ? Math.round(n) : 0; }
function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn('Could not load', key, error);
    return fallback;
  }
}
function saveJson(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (error) { console.warn('Could not save', key, error); }
}
function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function sample(array) { return array[Math.floor(Math.random() * array.length)]; }
function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}
function wordById(id) { return WORDS.find(word => word.id === id); }
function freshWordStat(time = now()) {
  return { seen: 0, correct: 0, wrong: 0, streak: 0, bestStreak: 0, box: 0, hard: false, lastReview: 0, nextDue: 0, updatedAt: time };
}
function freshState(time = now()) {
  const words = {};
  WORDS.forEach(word => { words[word.id] = freshWordStat(time); });
  return {
    version: APP_VERSION,
    createdAt: time,
    updatedAt: time,
    resetAt: 0,
    points: 0,
    totalAnswers: 0,
    currentStreak: 0,
    bestStreak: 0,
    bestExamScore: 0,
    lastExamScore: null,
    words
  };
}
function ensureState(state) {
  const base = freshState();
  if (!state || typeof state !== 'object') return base;
  const merged = Object.assign(base, state);
  merged.words = Object.assign({}, base.words, state.words || {});
  WORDS.forEach(word => {
    merged.words[word.id] = Object.assign(freshWordStat(merged.createdAt || now()), merged.words[word.id] || {});
  });
  merged.version = APP_VERSION;
  return merged;
}
function persistState({ cloud = true, renderNow = false } = {}) {
  appState.updatedAt = now();
  saveJson(STORAGE_KEY, appState);
  if (cloud) scheduleCloudSave();
  if (renderNow) render();
}
function persistUi() { saveJson(UI_KEY, ui); }
function getWordStat(id) {
  if (!appState.words[id]) appState.words[id] = freshWordStat();
  return appState.words[id];
}
function isMastered(word) {
  const st = getWordStat(word.id);
  const total = st.correct + st.wrong;
  const accuracy = total ? st.correct / total : 0;
  return st.box >= 4 || (st.correct >= 4 && accuracy >= 0.72 && st.streak >= 2);
}
function isDue(word) {
  const st = getWordStat(word.id);
  return !st.seen || st.hard || !st.nextDue || st.nextDue <= now();
}
function dueWords() {
  return WORDS.filter(isDue).sort((a, b) => {
    const sa = getWordStat(a.id), sb = getWordStat(b.id);
    return Number(sb.hard) - Number(sa.hard) || (sa.nextDue || 0) - (sb.nextDue || 0) || sb.wrong - sa.wrong;
  });
}
function smartPool() {
  const due = dueWords();
  if (due.length >= 4) return due;
  const weak = WORDS.filter(w => !isMastered(w)).sort((a,b) => getWordStat(b.id).wrong - getWordStat(a.id).wrong);
  return [...new Map([...due, ...weak, ...shuffle(WORDS)].map(w => [w.id, w])).values()];
}
function summary() {
  const total = WORDS.length;
  let studied = 0, mastered = 0, hard = 0, due = 0, correct = 0, wrong = 0;
  WORDS.forEach(word => {
    const st = getWordStat(word.id);
    if (st.seen) studied++;
    if (isMastered(word)) mastered++;
    if (st.hard || st.wrong > st.correct) hard++;
    if (isDue(word)) due++;
    correct += st.correct;
    wrong += st.wrong;
  });
  const accuracy = correct + wrong ? (correct / (correct + wrong)) * 100 : 0;
  return { total, studied, mastered, hard, due, correct, wrong, accuracy, progress: total ? mastered / total * 100 : 0 };
}
function recordAnswer(id, correct, mode = 'practice') {
  const st = getWordStat(id);
  const t = now();
  st.seen += 1;
  if (correct) {
    st.correct += 1;
    st.streak += 1;
    st.bestStreak = Math.max(st.bestStreak || 0, st.streak);
    st.box = clamp((st.box || 0) + 1, 1, 5);
    st.hard = st.wrong > st.correct + 1 ? st.hard : false;
    st.nextDue = t + REVIEW_INTERVALS[st.box] * DAY;
    appState.currentStreak += 1;
    appState.bestStreak = Math.max(appState.bestStreak || 0, appState.currentStreak);
    appState.points += mode === 'exam' ? 15 : 10;
  } else {
    st.wrong += 1;
    st.streak = 0;
    st.box = 0;
    st.hard = true;
    st.nextDue = t + 60 * 60 * 1000;
    appState.currentStreak = 0;
    appState.points = Math.max(0, appState.points - 2);
  }
  st.lastReview = t;
  st.updatedAt = t;
  appState.totalAnswers += 1;
  persistState();
}
function toggleHard(id) {
  const st = getWordStat(id);
  st.hard = !st.hard;
  st.updatedAt = now();
  if (st.hard) st.nextDue = 0;
  persistState({ renderNow: true });
  toast(st.hard ? 'סומן כמילה קשה' : 'הוסר מסימון מילים קשות');
}
function resetProgress() {
  const ok = confirm('לאפס את כל ההתקדמות? זה יאפס גם את הענן אם אתה מחובר.');
  if (!ok) return;
  const t = now();
  appState = freshState(t);
  appState.resetAt = t;
  Object.values(appState.words).forEach(st => { st.updatedAt = t; });
  saveJson(STORAGE_KEY, appState);
  scheduleCloudSave(true);
  render();
  toast('ההתקדמות אופסה');
}
function toast(message) {
  clearTimeout(toastTimer);
  toastEl.innerHTML = `<div class="toast-inner">${escapeHtml(message)}</div>`;
  toastTimer = setTimeout(() => { toastEl.innerHTML = ''; }, 2600);
}

function setView(view) {
  ui.view = view;
  persistUi();
  session = {};
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function setExamSize(size) { ui.examSize = Number(size) || 20; persistUi(); }

function render() {
  const s = summary();
  appEl.className = '';
  appEl.innerHTML = `
    <main class="app">
      ${renderTopbar(s)}
      ${renderNav()}
      ${renderCurrentView(s)}
    </main>
  `;
}
function renderTopbar(s) {
  return `
    <header class="topbar">
      <div class="brand">
        <div class="logo">VQ</div>
        <div>
          <h1>Vocab Quest</h1>
          <p>${s.total} מילים לבחינה • ${s.mastered} בשליטה • ${s.due} לחזרה</p>
        </div>
      </div>
      <div class="top-actions">
        ${syncPill()}
        <button class="icon-btn" data-action="view" data-view="settings" title="הגדרות">⚙️</button>
      </div>
    </header>
  `;
}
function syncPill() {
  if (!firebase.configured) return '<span class="pill warn">📱 מקומי</span>';
  if (firebase.error) return `<span class="pill bad">⚠️ ${escapeHtml(firebase.error.slice(0, 26))}</span>`;
  if (firebase.user) return `<span class="pill good">☁️ מסונכרן</span>`;
  return '<span class="pill warn">☁️ לא מחובר</span>';
}
function renderNav() {
  const items = [
    ['home', 'בית'], ['flash', 'כרטיס'], ['quiz', 'בחירה'], ['type', 'הקלדה'],
    ['match', 'התאמה'], ['exam', 'מבחן'], ['words', 'מילים'], ['settings', 'הגדרות']
  ];
  return `<nav class="nav" aria-label="ניווט משחק">${items.map(([view, label]) => `<button class="${ui.view === view ? 'active' : ''}" data-action="view" data-view="${view}">${label}</button>`).join('')}</nav>`;
}
function renderCurrentView(s) {
  switch (ui.view) {
    case 'flash': return renderFlashView();
    case 'quiz': return renderQuizView();
    case 'type': return renderTypeView();
    case 'match': return renderMatchView();
    case 'exam': return renderExamView();
    case 'words': return renderWordsView();
    case 'settings': return renderSettingsView();
    default: return renderHome(s);
  }
}
function renderHome(s) {
  return `
    <section class="hero">
      <div class="actions" style="margin-bottom: 12px;">
        <span class="pill">🎯 מבחן אוצר מילים</span>
        <span class="pill">🔥 רצף: ${appState.currentStreak || 0}</span>
        <span class="pill">⭐ ניקוד: ${appState.points || 0}</span>
      </div>
      <h2>תתכונן למבחן בצורה של משחק</h2>
      <p>המשחק שומר התקדמות, מזהה מילים קשות, עושה חזרה חכמה, ויש לו מבחן מסכם. אחרי חיבור Firebase ההתקדמות תסתנכרן בין המחשב לאייפון.</p>
      <div class="stats-grid">
        <div class="stat"><strong>${s.mastered}</strong><span>מילים בשליטה</span></div>
        <div class="stat"><strong>${s.due}</strong><span>מילים לחזרה</span></div>
        <div class="stat"><strong>${pct(s.accuracy)}%</strong><span>דיוק כללי</span></div>
        <div class="stat"><strong>${appState.bestStreak || 0}</strong><span>רצף שיא</span></div>
      </div>
      <div class="progress-wrap">
        <div class="progress-info"><span>התקדמות לשליטה מלאה</span><span>${s.mastered} / ${s.total}</span></div>
        <div class="progress-bar"><i style="--w:${pct(s.progress)}%"></i></div>
      </div>
    </section>

    <div class="section-title"><h3>מצבי משחק</h3><span>מומלץ להתחיל בכרטיסיות ואז מבחן</span></div>
    <section class="mode-grid">
      ${modeCard('flash', '🃏', 'כרטיסיות חכמה', 'ללמוד מהר ולסמן אם ידעת או לא ידעת.')}
      ${modeCard('quiz', '✅', 'בחירה מרובה', 'שאלות אמריקאיות עם ניקוד מיידי.')}
      ${modeCard('type', '⌨️', 'הקלדה', 'רואים עברית ומקלידים את המילה באנגלית.')}
      ${modeCard('match', '🧩', 'התאמה', 'התאם אנגלית לעברית בצורה נוחה לטאץ׳.')}
      ${modeCard('exam', '🏆', 'מבחן אמיתי', '20 שאלות אקראיות וציון בסוף.')}
      ${modeCard('words', '📚', 'רשימת מילים', 'חיפוש, סטטוס, וסימון מילים קשות.')}
    </section>

    <div class="section-title"><h3>סנכרון</h3><span>${firebase.user ? 'פעיל' : 'לא פעיל עדיין'}</span></div>
    <section class="panel sync-card">
      ${renderSyncSummary()}
    </section>
  `;
}
function modeCard(view, icon, title, text) {
  return `<button class="mode-btn" data-action="view" data-view="${view}"><span class="mode-icon">${icon}</span><b>${title}</b><span>${text}</span></button>`;
}
function renderSyncSummary() {
  if (!firebase.configured) {
    return `<h3>המשחק עובד עכשיו במצב מקומי</h3><p>כדי לסנכרן בין מחשב לאייפון צריך להגדיר Firebase פעם אחת. ההוראות נמצאות בקובץ README המצורף.</p><div class="actions" style="margin-top:12px"><button class="primary-btn" data-action="view" data-view="settings">פתח הגדרות סנכרון</button></div>`;
  }
  if (firebase.user) {
    return `<h3>הסנכרון פעיל</h3><p>מחובר כ־<span class="ltr">${escapeHtml(firebase.user.email || firebase.user.uid)}</span>. ההתקדמות נשמרת גם בדפדפן וגם בענן.</p><div class="actions" style="margin-top:12px"><button class="soft-btn" data-action="cloud-save">סנכרן עכשיו</button><button class="soft-btn" data-action="view" data-view="settings">הגדרות</button></div>`;
  }
  return `<h3>Firebase מוגדר, צריך להתחבר</h3><p>התחבר עם אותו אימייל וסיסמה במחשב ובאייפון כדי לראות את אותה התקדמות.</p><div class="actions" style="margin-top:12px"><button class="primary-btn" data-action="view" data-view="settings">התחברות</button></div>`;
}

function ensureFlashSession() {
  if (session.flash) return;
  const pool = smartPool();
  session.flash = { order: shuffle(pool).map(w => w.id), index: 0, flipped: false };
}
function renderFlashView() {
  ensureFlashSession();
  const ids = session.flash.order.length ? session.flash.order : WORDS.map(w => w.id);
  const index = session.flash.index % ids.length;
  const word = wordById(ids[index]);
  const st = getWordStat(word.id);
  const side = session.flash.flipped ? 'back' : 'front';
  return `
    <section class="panel-head">
      <div><h2>כרטיסיות</h2><p>לחץ על הכרטיס כדי להפוך. סימון נכון/לא נכון יעדכן חזרה חכמה.</p></div>
      <span class="pill">${index + 1} / ${ids.length}</span>
    </section>
    <section class="flash-card" data-action="flash-flip">
      <div>
        <div class="label">${side === 'front' ? 'אנגלית' : 'עברית'}</div>
        <div class="${side === 'front' ? 'term ltr' : 'translation'}">${escapeHtml(side === 'front' ? word.en : word.he)}</div>
        <div class="badge-row" style="justify-content:center;margin-top:18px;">
          <span class="pill">${escapeHtml(word.cat)}</span>
          <span class="pill">קופסה ${st.box || 0}/5</span>
          ${st.hard ? '<span class="pill bad">מילה קשה</span>' : ''}
        </div>
      </div>
    </section>
    <div class="flash-meta"><span>נכון: ${st.correct} • טעויות: ${st.wrong}</span><span>רצף במילה: ${st.streak || 0}</span></div>
    <section class="panel" style="margin-top: 14px;">
      <div class="actions">
        <button class="primary-btn" data-action="flash-mark" data-result="correct">ידעתי ✅</button>
        <button class="danger-btn" data-action="flash-mark" data-result="wrong">לא ידעתי</button>
        <button class="soft-btn" data-action="toggle-hard" data-id="${word.id}">${st.hard ? 'הסר מקשות' : 'סמן כקשה'}</button>
        <button class="soft-btn" data-action="flash-next">דלג</button>
        <button class="soft-btn" data-action="flash-new">ערבב מחדש</button>
      </div>
    </section>
  `;
}
function flashNext() {
  ensureFlashSession();
  session.flash.index = (session.flash.index + 1) % session.flash.order.length;
  session.flash.flipped = false;
  render();
}
function flashMark(correct) {
  ensureFlashSession();
  const id = session.flash.order[session.flash.index % session.flash.order.length];
  recordAnswer(id, correct, 'flash');
  toast(correct ? 'יפה! המילה קודמה בחזרה החכמה' : 'סומן לחזרה חוזרת בקרוב');
  flashNext();
}

function makeQuestion(word = sample(smartPool()), direction = Math.random() < 0.55 ? 'en-he' : 'he-en') {
  const others = shuffle(WORDS.filter(w => w.id !== word.id)).slice(0, 3);
  if (direction === 'en-he') {
    return { wordId: word.id, direction, prompt: word.en, answer: word.he, options: shuffle([word.he, ...others.map(w => w.he)]) };
  }
  return { wordId: word.id, direction, prompt: word.he, answer: word.en, options: shuffle([word.en, ...others.map(w => w.en)]) };
}
function ensureQuizSession() { if (!session.quiz) session.quiz = makeQuestion(); }
function renderQuizView() {
  ensureQuizSession();
  const q = session.quiz;
  const word = wordById(q.wordId);
  return `
    <section class="panel-head"><div><h2>בחירה מרובה</h2><p>בחר את התרגום הנכון. המערכת תעדכן את ההתקדמות.</p></div><span class="pill">${escapeHtml(word.cat)}</span></section>
    <section class="panel">
      <div class="question"><span class="pill">${q.direction === 'en-he' ? 'אנגלית → עברית' : 'עברית → אנגלית'}</span><div class="prompt ${q.direction === 'en-he' ? 'ltr' : ''}">${escapeHtml(q.prompt)}</div></div>
      <div class="choice-grid">
        ${q.options.map(option => renderChoice(option, q.answer, q.selected, 'quiz-choice')).join('')}
      </div>
      ${q.selected ? renderAnswerFeedback(q.selected === q.answer, q.answer) : ''}
      <div class="actions" style="margin-top:14px"><button class="soft-btn" data-action="quiz-next">שאלה הבאה</button><button class="soft-btn" data-action="view" data-view="flash">עבור לכרטיסיות</button></div>
    </section>
  `;
}
function renderChoice(option, answer, selected, action) {
  let klass = '';
  if (selected) klass = option === answer ? 'correct' : (option === selected ? 'wrong' : '');
  return `<button class="choice ${klass}" data-action="${action}" data-value="${escapeHtml(option)}"><span class="${/[a-zA-Z]/.test(option) ? 'ltr' : ''}">${escapeHtml(option)}</span>${selected && option === answer ? '<b>✓</b>' : ''}</button>`;
}
function renderAnswerFeedback(ok, answer) {
  return `<div class="feedback ${ok ? 'good' : 'bad'}"><b>${ok ? 'נכון!' : 'לא נכון'}</b><p>התשובה: <span class="ltr">${escapeHtml(answer)}</span></p></div>`;
}
function quizChoice(value) {
  ensureQuizSession();
  if (session.quiz.selected) return;
  session.quiz.selected = value;
  const ok = value === session.quiz.answer;
  recordAnswer(session.quiz.wordId, ok, 'quiz');
  toast(ok ? 'תשובה נכונה' : 'לא נורא — זה נשמר לחזרה');
  render();
}
function quizNext() { session.quiz = makeQuestion(); render(); }

function ensureTypeSession() { if (!session.type) session.type = { wordId: sample(smartPool()).id, checked: false, typed: '' }; }
function renderTypeView() {
  ensureTypeSession();
  const word = wordById(session.type.wordId);
  const st = getWordStat(word.id);
  const ok = session.type.checked ? isAccepted(word, session.type.typed) : false;
  return `
    <section class="panel-head"><div><h2>הקלדה</h2><p>כתוב באנגלית את המילה או הביטוי שמתאים לתרגום.</p></div><span class="pill">${escapeHtml(word.cat)}</span></section>
    <section class="panel">
      <div class="question"><span class="pill">עברית → אנגלית</span><div class="prompt">${escapeHtml(word.he)}</div></div>
      <form class="form-row" data-action="type-form" style="margin-top:14px;">
        <input class="field ltr" id="typeInput" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Type the English answer..." value="${escapeHtml(session.type.typed || '')}">
        <button class="primary-btn" type="submit">בדוק</button>
      </form>
      ${session.type.checked ? `<div class="feedback ${ok ? 'good' : 'bad'}"><b>${ok ? 'נכון!' : 'כמעט'}</b><p>התשובה: <span class="ltr">${escapeHtml(word.en)}</span></p><small>נכון: ${st.correct} • טעויות: ${st.wrong}</small></div>` : ''}
      <div class="actions" style="margin-top:14px"><button class="soft-btn" data-action="type-next">מילה הבאה</button><button class="soft-btn" data-action="toggle-hard" data-id="${word.id}">${st.hard ? 'הסר מקשות' : 'סמן כקשה'}</button></div>
    </section>
  `;
}
function isAccepted(word, typed) {
  const t = normalize(typed);
  if (!t) return false;
  const variants = new Set([word.en, ...(word.accept || [])].map(normalize));
  return [...variants].some(answer => t === answer || (answer.length > 6 && t.includes(answer)) || (t.length > 6 && answer.includes(t)));
}
function typeCheck() {
  ensureTypeSession();
  const input = document.getElementById('typeInput');
  session.type.typed = input ? input.value : '';
  if (session.type.checked) return;
  const word = wordById(session.type.wordId);
  const ok = isAccepted(word, session.type.typed);
  session.type.checked = true;
  recordAnswer(word.id, ok, 'type');
  toast(ok ? 'מעולה!' : 'נשמור את זה לחזרה');
  render();
}
function typeNext() { session.type = { wordId: sample(smartPool()).id, checked: false, typed: '' }; render(); }

function newMatchRound() {
  const pairs = shuffle(smartPool()).slice(0, 6);
  session.match = {
    pairIds: pairs.map(w => w.id),
    enOrder: shuffle(pairs.map(w => w.id)),
    heOrder: shuffle(pairs.map(w => w.id)),
    selectedEn: null,
    selectedHe: null,
    matched: [],
    message: ''
  };
}
function ensureMatchSession() { if (!session.match) newMatchRound(); }
function renderMatchView() {
  ensureMatchSession();
  const m = session.match;
  const done = m.matched.length === m.pairIds.length;
  return `
    <section class="panel-head"><div><h2>התאמה</h2><p>בחר מילה באנגלית ואז את התרגום שלה בעברית. עובד נוח בטלפון.</p></div><span class="pill">${m.matched.length} / ${m.pairIds.length}</span></section>
    <section class="panel">
      <div class="match-board">
        <div class="match-column">${m.enOrder.map(id => renderMatchCard('en', id)).join('')}</div>
        <div class="match-column">${m.heOrder.map(id => renderMatchCard('he', id)).join('')}</div>
      </div>
      ${m.message ? `<div class="feedback ${m.message.includes('נכון') ? 'good' : 'bad'}">${escapeHtml(m.message)}</div>` : ''}
      <div class="actions" style="margin-top:14px"><button class="${done ? 'primary-btn' : 'soft-btn'}" data-action="match-new">סיבוב חדש</button></div>
    </section>
  `;
}
function renderMatchCard(side, id) {
  const word = wordById(id);
  const m = session.match;
  const matched = m.matched.includes(id);
  const selected = side === 'en' ? m.selectedEn === id : m.selectedHe === id;
  const text = side === 'en' ? word.en : word.he;
  return `<button class="match-card ${matched ? 'matched' : ''} ${selected ? 'selected' : ''} ${side === 'en' ? 'ltr' : ''}" data-action="match-select" data-side="${side}" data-id="${id}">${escapeHtml(text)}</button>`;
}
function matchSelect(side, id) {
  ensureMatchSession();
  const m = session.match;
  if (m.matched.includes(id)) return;
  if (side === 'en') m.selectedEn = id;
  else m.selectedHe = id;
  if (m.selectedEn && m.selectedHe) {
    if (m.selectedEn === m.selectedHe) {
      m.matched.push(id);
      m.message = 'נכון! התאמה מעולה';
      recordAnswer(id, true, 'match');
    } else {
      m.message = 'לא מתאים — נסה שוב';
      recordAnswer(m.selectedEn, false, 'match');
    }
    m.selectedEn = null;
    m.selectedHe = null;
  }
  render();
}

function startExam() {
  const size = clamp(Number(ui.examSize) || 20, 5, WORDS.length);
  const words = shuffle(WORDS).slice(0, size);
  session.exam = {
    started: true,
    finished: false,
    index: 0,
    questions: words.map((word, idx) => makeQuestion(word, idx % 2 ? 'he-en' : 'en-he'))
  };
  render();
}
function renderExamView() {
  if (!session.exam || !session.exam.started) return renderExamSetup();
  if (session.exam.finished) return renderExamResults();
  const ex = session.exam;
  const q = ex.questions[ex.index];
  const word = wordById(q.wordId);
  return `
    <section class="panel-head"><div><h2>מבחן אמיתי</h2><p>ענה בלי לעצור. בסוף תקבל ציון ורשימת טעויות.</p></div><span class="pill">שאלה ${ex.index + 1} / ${ex.questions.length}</span></section>
    <section class="panel">
      <div class="progress-bar" style="margin-bottom:14px"><i style="--w:${pct((ex.index) / ex.questions.length * 100)}%"></i></div>
      <div class="question"><span class="pill">${escapeHtml(word.cat)} • ${q.direction === 'en-he' ? 'אנגלית → עברית' : 'עברית → אנגלית'}</span><div class="prompt ${q.direction === 'en-he' ? 'ltr' : ''}">${escapeHtml(q.prompt)}</div></div>
      <div class="choice-grid">${q.options.map(option => renderChoice(option, q.answer, q.selected, 'exam-choice')).join('')}</div>
      ${q.selected ? renderAnswerFeedback(q.selected === q.answer, q.answer) : ''}
      <div class="actions" style="margin-top:14px"><button class="primary-btn" data-action="exam-next" ${q.selected ? '' : 'disabled'}>המשך</button></div>
    </section>
  `;
}
function renderExamSetup() {
  return `
    <section class="hero">
      <span class="pill">🏆 מצב מבחן</span>
      <h2 style="margin-top:10px">סימולציה קצרה למבחן</h2>
      <p>המשחק יבחר מילים אקראיות, ישאל בכיוונים שונים, ובסוף יציג ציון וטעויות לחזרה.</p>
      <div class="grid-2" style="margin-top:16px">
        <div class="panel" style="box-shadow:none;margin:0"><h3>מספר שאלות</h3><select id="examSize" data-action="exam-size" style="margin-top:10px"><option value="10" ${ui.examSize==10?'selected':''}>10 שאלות</option><option value="20" ${ui.examSize==20?'selected':''}>20 שאלות</option><option value="30" ${ui.examSize==30?'selected':''}>30 שאלות</option><option value="${WORDS.length}" ${ui.examSize==WORDS.length?'selected':''}>כל המילים</option></select></div>
        <div class="panel" style="box-shadow:none;margin:0"><h3>שיא קודם</h3><p style="margin-top:10px"><b>${appState.bestExamScore || 0}%</b> • מבחן אחרון: ${appState.lastExamScore === null ? 'אין עדיין' : appState.lastExamScore + '%'}</p></div>
      </div>
      <div class="actions" style="margin-top:16px"><button class="primary-btn" data-action="exam-start">התחל מבחן</button></div>
    </section>
  `;
}
function examChoice(value) {
  const ex = session.exam;
  if (!ex || ex.finished) return;
  const q = ex.questions[ex.index];
  if (q.selected) return;
  q.selected = value;
  q.correct = value === q.answer;
  recordAnswer(q.wordId, q.correct, 'exam');
  render();
}
function examNext() {
  const ex = session.exam;
  if (!ex) return;
  if (ex.index < ex.questions.length - 1) { ex.index += 1; render(); return; }
  ex.finished = true;
  const correct = ex.questions.filter(q => q.correct).length;
  const score = pct(correct / ex.questions.length * 100);
  appState.lastExamScore = score;
  appState.bestExamScore = Math.max(appState.bestExamScore || 0, score);
  persistState({ renderNow: true });
}
function renderExamResults() {
  const ex = session.exam;
  const correct = ex.questions.filter(q => q.correct).length;
  const score = pct(correct / ex.questions.length * 100);
  const mistakes = ex.questions.filter(q => !q.correct);
  return `
    <section class="result-card">
      <span class="pill">תוצאה</span>
      <div class="score-big">${score}%</div>
      <h2>${score >= 85 ? 'אלוף, אתה ממש מוכן' : score >= 70 ? 'טוב מאוד, עוד קצת חזרה' : 'צריך לחזק את המילים הקשות'}</h2>
      <p style="margin-top:8px">ענית נכון על ${correct} מתוך ${ex.questions.length} שאלות.</p>
      <div class="actions" style="margin-top:16px"><button class="primary-btn" data-action="exam-restart">מבחן חדש</button><button class="soft-btn" data-action="view" data-view="flash">חזרה בכרטיסיות</button><button class="soft-btn" data-action="view" data-view="words">ראה מילים</button></div>
    </section>
    ${mistakes.length ? `<section class="panel" style="margin-top:14px"><h3>טעויות לחזרה</h3><div class="choice-grid">${mistakes.map(q => { const w = wordById(q.wordId); return `<div class="word-row-card"><b class="ltr">${escapeHtml(w.en)}</b><p>${escapeHtml(w.he)}</p><small>בחרת: ${escapeHtml(q.selected || 'לא נבחר')}</small></div>`; }).join('')}</div></section>` : ''}
  `;
}

function renderWordsView() {
  const filtered = WORDS.filter(word => {
    const search = normalize(ui.wordSearch || '');
    const catOk = ui.wordCat === 'all' || word.cat === ui.wordCat || (ui.wordCat === 'hard' && getWordStat(word.id).hard) || (ui.wordCat === 'due' && isDue(word));
    const searchOk = !search || normalize(word.en + ' ' + word.he + ' ' + word.cat).includes(search);
    return catOk && searchOk;
  });
  return `
    <section class="panel-head"><div><h2>רשימת מילים</h2><p>כאן אפשר לחפש, לבדוק התקדמות ולסמן מילים קשות.</p></div><span class="pill">${filtered.length} מילים</span></section>
    <section class="panel">
      <div class="words-toolbar">
        <input class="field" id="wordSearch" data-action="word-search" placeholder="חפש מילה או תרגום..." value="${escapeHtml(ui.wordSearch || '')}">
        <select data-action="word-cat" id="wordCat">
          <option value="all" ${ui.wordCat==='all'?'selected':''}>כל הקטגוריות</option>
          <option value="due" ${ui.wordCat==='due'?'selected':''}>מילים לחזרה</option>
          <option value="hard" ${ui.wordCat==='hard'?'selected':''}>מילים קשות</option>
          ${CATEGORY_LABELS.map(cat => `<option value="${cat}" ${ui.wordCat===cat?'selected':''}>${cat}</option>`).join('')}
        </select>
        <button class="soft-btn" data-action="shuffle-words">ערבב</button>
      </div>
      <table class="words-table">
        <thead><tr><th>אנגלית</th><th>עברית</th><th>קטגוריה</th><th>סטטוס</th><th></th></tr></thead>
        <tbody>${filtered.map(renderWordRow).join('')}</tbody>
      </table>
      <div class="word-card-list">${filtered.map(renderWordCard).join('')}</div>
    </section>
  `;
}
function statusForWord(word) {
  const st = getWordStat(word.id);
  if (isMastered(word)) return '<span class="pill good">בשליטה</span>';
  if (st.hard || st.wrong > st.correct) return '<span class="pill bad">קשה</span>';
  if (st.seen) return '<span class="pill warn">בתהליך</span>';
  return '<span class="pill">חדש</span>';
}
function renderWordRow(word) {
  const st = getWordStat(word.id);
  return `<tr><td class="ltr"><b>${escapeHtml(word.en)}</b></td><td>${escapeHtml(word.he)}</td><td><small>${escapeHtml(word.cat)}</small></td><td>${statusForWord(word)} <small>✓${st.correct} ✕${st.wrong}</small></td><td><button class="soft-btn" data-action="toggle-hard" data-id="${word.id}">${st.hard ? 'הסר' : 'קשה'}</button></td></tr>`;
}
function renderWordCard(word) {
  const st = getWordStat(word.id);
  return `<div class="word-row-card"><div class="top"><b class="ltr">${escapeHtml(word.en)}</b>${statusForWord(word)}</div><p>${escapeHtml(word.he)}</p><div class="badge-row"><span class="pill">${escapeHtml(word.cat)}</span><span class="pill">✓${st.correct} ✕${st.wrong}</span><button class="soft-btn" data-action="toggle-hard" data-id="${word.id}">${st.hard ? 'הסר מקשות' : 'סמן כקשה'}</button></div></div>`;
}

function renderSettingsView() {
  return `
    <section class="panel-head"><div><h2>הגדרות וסנכרון</h2><p>כאן מחברים סנכרון ענן ומאפסים התקדמות.</p></div>${syncPill()}</section>
    <section class="panel sync-card">
      <h3>סנכרון בין מחשב לאייפון</h3>
      ${renderFirebasePanel()}
    </section>
    <section class="panel">
      <h3>איפוס הזיכרון של ההתקדמות</h3>
      <p style="margin-top:8px">הכפתור מאפס ניקוד, מילים קשות, רצפים, תוצאות מבחן וחזרה חכמה. אם אתה מחובר לענן — האיפוס מסתנכרן גם לשם.</p>
      <div class="actions" style="margin-top:14px"><button class="danger-btn" data-action="reset-progress">אפס את כל ההתקדמות</button><button class="soft-btn" data-action="export-progress">ייצוא גיבוי</button></div>
    </section>
    <section class="panel">
      <h3>ייבוא גיבוי ידני</h3>
      <p style="margin-top:8px">למקרה שאתה לא מפעיל Firebase, אפשר להעתיק גיבוי ממכשיר אחד ולהדביק בשני.</p>
      <textarea id="importBox" placeholder="הדבק כאן JSON של גיבוי"></textarea>
      <div class="actions" style="margin-top:10px"><button class="soft-btn" data-action="import-progress">ייבא גיבוי</button></div>
    </section>
  `;
}
function renderFirebasePanel() {
  if (!firebase.configured) {
    return `<p style="margin-top:8px">כדי לקבל סנכרון אמיתי צריך Firebase. המשחק עדיין עובד מצוין בלי זה, אבל רק באותו מכשיר.</p>
      <div class="feedback" style="margin-top:12px"><b>מה צריך לעשות?</b><p>פתח Firebase, צור פרויקט, הפעל Authentication עם Email/Password ו־Cloud Firestore, ואז הדבק את קוד ההגדרה בקובץ <span class="ltr">firebase-config.js</span>.</p></div>
      <pre class="code-box">window.VOCAB_QUEST_FIREBASE_CONFIG = {\n  apiKey: "...",\n  authDomain: "...",\n  projectId: "...",\n  appId: "..."\n};</pre>`;
  }
  if (firebase.user) {
    return `<p style="margin-top:8px">מחובר כ־<span class="ltr">${escapeHtml(firebase.user.email || firebase.user.uid)}</span>. השתמש באותו חשבון גם באייפון וגם במחשב.</p>
      <div class="actions" style="margin-top:14px"><button class="primary-btn" data-action="cloud-save">סנכרן עכשיו</button><button class="soft-btn" data-action="logout">התנתק</button></div>
      <small>סנכרון אחרון: ${firebase.lastSync ? new Date(firebase.lastSync).toLocaleString('he-IL') : 'עדיין לא בוצע'}</small>`;
  }
  return `<p style="margin-top:8px">Firebase מוכן. התחבר או צור חשבון. אותו אימייל וסיסמה יסנכרנו את ההתקדמות בכל מכשיר.</p>
    <form class="grid-2" data-action="auth-form" style="margin-top:14px">
      <input class="field ltr" id="authEmail" type="email" autocomplete="email" placeholder="email@example.com" required>
      <input class="field ltr" id="authPassword" type="password" autocomplete="current-password" placeholder="password" minlength="6" required>
      <button class="primary-btn" type="submit" data-auth-mode="login">התחבר</button>
      <button class="soft-btn" type="button" data-action="register">צור חשבון</button>
    </form>
    ${firebase.error ? `<div class="feedback bad">${escapeHtml(firebase.error)}</div>` : ''}`;
}

function mergeStates(local, remote) {
  const a = ensureState(local);
  const b = ensureState(remote);
  if ((a.resetAt || 0) > (b.updatedAt || 0)) return a;
  if ((b.resetAt || 0) > (a.updatedAt || 0)) return b;
  const newer = (b.updatedAt || 0) > (a.updatedAt || 0) ? b : a;
  const older = newer === b ? a : b;
  const merged = ensureState(Object.assign({}, older, newer));
  merged.points = Math.max(a.points || 0, b.points || 0);
  merged.totalAnswers = Math.max(a.totalAnswers || 0, b.totalAnswers || 0);
  merged.bestStreak = Math.max(a.bestStreak || 0, b.bestStreak || 0);
  merged.bestExamScore = Math.max(a.bestExamScore || 0, b.bestExamScore || 0);
  WORDS.forEach(word => {
    const aw = a.words[word.id] || freshWordStat();
    const bw = b.words[word.id] || freshWordStat();
    if ((a.resetAt || 0) > (bw.updatedAt || 0)) { merged.words[word.id] = aw; return; }
    if ((b.resetAt || 0) > (aw.updatedAt || 0)) { merged.words[word.id] = bw; return; }
    const latest = (bw.updatedAt || 0) > (aw.updatedAt || 0) ? bw : aw;
    const other = latest === bw ? aw : bw;
    merged.words[word.id] = Object.assign({}, other, latest, {
      seen: Math.max(aw.seen || 0, bw.seen || 0),
      correct: Math.max(aw.correct || 0, bw.correct || 0),
      wrong: Math.max(aw.wrong || 0, bw.wrong || 0),
      bestStreak: Math.max(aw.bestStreak || 0, bw.bestStreak || 0),
      box: Math.max(aw.box || 0, bw.box || 0),
      updatedAt: Math.max(aw.updatedAt || 0, bw.updatedAt || 0)
    });
  });
  merged.updatedAt = Math.max(a.updatedAt || 0, b.updatedAt || 0, now());
  return ensureState(merged);
}
function firebaseConfigIsReady() {
  const cfg = window.VOCAB_QUEST_FIREBASE_CONFIG || {};
  return Boolean(cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId && !String(cfg.apiKey).includes('...'));
}
async function initFirebase() {
  firebase.configured = firebaseConfigIsReady();
  if (!firebase.configured) return;
  try {
    const [appMod, authMod, fsMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js')
    ]);
    firebase.mods = Object.assign({}, appMod, authMod, fsMod);
    const app = appMod.initializeApp(window.VOCAB_QUEST_FIREBASE_CONFIG);
    firebase.auth = authMod.getAuth(app);
    firebase.db = fsMod.getFirestore(app);
    firebase.ready = true;
    authMod.onAuthStateChanged(firebase.auth, async user => {
      firebase.user = user;
      firebase.error = '';
      if (firebase.unsub) { firebase.unsub(); firebase.unsub = null; }
      if (user) await connectCloudDoc();
      render();
    });
  } catch (error) {
    firebase.error = error.message || 'Firebase לא נטען';
    console.error(error);
  }
}
function cloudDocRef() {
  if (!firebase.user || !firebase.mods) return null;
  return firebase.mods.doc(firebase.db, 'users', firebase.user.uid, 'vocabQuest', 'progress');
}
async function connectCloudDoc() {
  const ref = cloudDocRef();
  if (!ref) return;
  const { getDoc, setDoc, onSnapshot, serverTimestamp } = firebase.mods;
  try {
    firebase.busy = true;
    const snap = await getDoc(ref);
    if (snap.exists() && snap.data().state) {
      appState = mergeStates(appState, snap.data().state);
      saveJson(STORAGE_KEY, appState);
    }
    await setDoc(ref, { state: appState, clientUpdatedAt: appState.updatedAt, updatedAt: serverTimestamp() }, { merge: true });
    firebase.lastSync = now();
    firebase.unsub = onSnapshot(ref, docSnap => {
      if (!docSnap.exists() || !docSnap.data().state) return;
      const remote = docSnap.data().state;
      if ((remote.updatedAt || 0) <= (appState.updatedAt || 0)) return;
      appState = mergeStates(appState, remote);
      saveJson(STORAGE_KEY, appState);
      firebase.lastSync = now();
      render();
    });
    firebase.busy = false;
    toast('הסנכרון פעיל');
  } catch (error) {
    firebase.busy = false;
    firebase.error = error.message || 'שגיאת סנכרון';
    console.error(error);
    render();
  }
}
function scheduleCloudSave(force = false) {
  if (!firebase.user || !firebase.ready) return;
  clearTimeout(cloudTimer);
  cloudTimer = setTimeout(() => saveCloudNow(), force ? 50 : 850);
}
async function saveCloudNow() {
  const ref = cloudDocRef();
  if (!ref) return;
  try {
    const { setDoc, serverTimestamp } = firebase.mods;
    await setDoc(ref, { state: appState, clientUpdatedAt: appState.updatedAt, updatedAt: serverTimestamp() }, { merge: true });
    firebase.lastSync = now();
    render();
  } catch (error) {
    firebase.error = error.message || 'שגיאת שמירה בענן';
    render();
  }
}
async function authWithEmail(register = false) {
  if (!firebase.ready) { toast('Firebase עדיין לא מוכן'); return; }
  const email = (document.getElementById('authEmail')?.value || '').trim();
  const password = document.getElementById('authPassword')?.value || '';
  if (!email || !password) { toast('צריך אימייל וסיסמה'); return; }
  try {
    firebase.error = '';
    if (register) await firebase.mods.createUserWithEmailAndPassword(firebase.auth, email, password);
    else await firebase.mods.signInWithEmailAndPassword(firebase.auth, email, password);
  } catch (error) {
    firebase.error = error.message || 'שגיאת התחברות';
    render();
  }
}
async function logout() {
  if (!firebase.ready) return;
  await firebase.mods.signOut(firebase.auth);
  firebase.user = null;
  toast('התנתקת');
  render();
}
function exportProgress() {
  const payload = JSON.stringify(appState, null, 2);
  navigator.clipboard?.writeText(payload).then(() => toast('הגיבוי הועתק ללוח')).catch(() => {
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vocab-quest-progress.json';
    a.click();
    URL.revokeObjectURL(url);
  });
}
function importProgress() {
  const raw = document.getElementById('importBox')?.value || '';
  try {
    const imported = JSON.parse(raw);
    appState = mergeStates(appState, imported);
    persistState({ renderNow: true });
    toast('הגיבוי יובא');
  } catch (error) { toast('הגיבוי לא תקין'); }
}

function handleClick(event) {
  const el = event.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;
  if (action === 'view') setView(el.dataset.view);
  else if (action === 'flash-flip') { ensureFlashSession(); session.flash.flipped = !session.flash.flipped; render(); }
  else if (action === 'flash-mark') flashMark(el.dataset.result === 'correct');
  else if (action === 'flash-next') flashNext();
  else if (action === 'flash-new') { session.flash = null; render(); }
  else if (action === 'toggle-hard') toggleHard(el.dataset.id);
  else if (action === 'quiz-choice') quizChoice(el.dataset.value);
  else if (action === 'quiz-next') quizNext();
  else if (action === 'type-next') typeNext();
  else if (action === 'match-select') matchSelect(el.dataset.side, el.dataset.id);
  else if (action === 'match-new') { newMatchRound(); render(); }
  else if (action === 'exam-start') startExam();
  else if (action === 'exam-choice') examChoice(el.dataset.value);
  else if (action === 'exam-next') examNext();
  else if (action === 'exam-restart') { session.exam = null; startExam(); }
  else if (action === 'reset-progress') resetProgress();
  else if (action === 'cloud-save') saveCloudNow().then(() => toast('נשמר בענן'));
  else if (action === 'logout') logout();
  else if (action === 'register') authWithEmail(true);
  else if (action === 'export-progress') exportProgress();
  else if (action === 'import-progress') importProgress();
  else if (action === 'shuffle-words') { ui.wordSearch = ''; ui.wordCat = 'all'; persistUi(); render(); }
}
function handleSubmit(event) {
  const form = event.target.closest('form[data-action]');
  if (!form) return;
  event.preventDefault();
  const action = form.dataset.action;
  if (action === 'type-form') typeCheck();
  if (action === 'auth-form') authWithEmail(false);
}
function handleInput(event) {
  const el = event.target;
  if (el?.dataset?.action === 'word-search') { ui.wordSearch = el.value; persistUi(); render(); }
  if (el?.dataset?.action === 'word-cat') { ui.wordCat = el.value; persistUi(); render(); }
  if (el?.dataset?.action === 'exam-size') { setExamSize(el.value); }
  if (el?.id === 'typeInput' && session.type) session.type.typed = el.value;
}

document.addEventListener('click', handleClick);
document.addEventListener('submit', handleSubmit);
document.addEventListener('input', handleInput);

render();
initFirebase().then(() => render());
