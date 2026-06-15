
:root {
  color-scheme: dark;
  --bg: #0b1020;
  --bg-2: #121a31;
  --card: rgba(255, 255, 255, 0.09);
  --card-strong: rgba(255, 255, 255, 0.14);
  --line: rgba(255, 255, 255, 0.16);
  --text: #f8fbff;
  --muted: #b8c2d6;
  --accent: #7dd3fc;
  --accent-2: #a7f3d0;
  --danger: #fecaca;
  --danger-bg: rgba(248, 113, 113, 0.17);
  --good: #bbf7d0;
  --good-bg: rgba(74, 222, 128, 0.16);
  --warn: #fde68a;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  --radius: 26px;
  --radius-sm: 18px;
  --tap: 48px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
}

* { box-sizing: border-box; }
html { min-height: 100%; background: var(--bg); }
body {
  min-height: 100%;
  margin: 0;
  color: var(--text);
  background:
    radial-gradient(circle at 80% 0%, rgba(125, 211, 252, 0.25), transparent 30%),
    radial-gradient(circle at 15% 15%, rgba(167, 243, 208, 0.14), transparent 28%),
    linear-gradient(160deg, #08101f 0%, #111827 54%, #0b1020 100%);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overscroll-behavior-y: none;
}

button, input { font: inherit; }
button { -webkit-tap-highlight-color: transparent; }
.app-shell {
  width: min(100%, 860px);
  margin: 0 auto;
  padding: calc(18px + env(safe-area-inset-top)) 16px calc(28px + env(safe-area-inset-bottom));
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}
.logo {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(145deg, #7dd3fc, #a7f3d0);
  color: #061225;
  font-weight: 900;
  letter-spacing: -0.02em;
  box-shadow: 0 16px 40px rgba(125, 211, 252, 0.24);
}
.brand h1 {
  margin: 0;
  font-size: clamp(1.25rem, 5vw, 2rem);
  letter-spacing: -0.04em;
}
.brand p, .mini { margin: 2px 0 0; color: var(--muted); font-size: 0.92rem; }

.pill {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  border-radius: 999px;
  padding: 7px 12px;
  white-space: nowrap;
}

.hero, .panel, .study-card, .result-card {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, var(--card-strong), rgba(255, 255, 255, 0.065));
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}
.hero { padding: 18px; overflow: hidden; position: relative; }
.hero::after {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  left: -70px;
  top: -70px;
  background: radial-gradient(circle, rgba(125, 211, 252, 0.22), transparent 68%);
  pointer-events: none;
}
.hero h2 { margin: 4px 0 6px; font-size: clamp(1.5rem, 7vw, 3rem); letter-spacing: -0.055em; }
.hero p { margin: 0; color: var(--muted); line-height: 1.55; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
}
.stat {
  padding: 13px 10px;
  background: rgba(8, 16, 31, 0.46);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  text-align: center;
}
.stat strong { display: block; font-size: 1.35rem; letter-spacing: -0.04em; }
.stat span { display: block; margin-top: 3px; color: var(--muted); font-size: 0.82rem; }

.section-title {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  margin: 20px 4px 10px;
}
.section-title h2 { margin: 0; font-size: 1.05rem; }
.section-title span { color: var(--muted); font-size: 0.86rem; }

.mode-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.mode-btn {
  min-height: 128px;
  border: 1px solid var(--line);
  color: var(--text);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.055));
  border-radius: 24px;
  padding: 16px;
  text-align: right;
  cursor: pointer;
  box-shadow: 0 12px 36px rgba(0,0,0,0.2);
  transition: transform 0.16s ease, border-color 0.16s ease, background 0.16s ease;
}
.mode-btn:active, .soft-btn:active, .primary:active, .answer-btn:active, .chip:active { transform: scale(0.985); }
.mode-btn:hover { border-color: rgba(125, 211, 252, 0.55); }
.mode-btn .icon { font-size: 1.55rem; display: block; margin-bottom: 10px; }
.mode-btn strong { display: block; font-size: 1.08rem; margin-bottom: 4px; }
.mode-btn span { color: var(--muted); line-height: 1.35; font-size: 0.88rem; }
.mode-btn.full { grid-column: 1 / -1; min-height: 96px; }

.panel { padding: 14px; margin-top: 14px; }
.panel h3 { margin: 0 0 10px; }
.progress-wrap { margin: 14px 0 4px; }
.progress-info { display: flex; justify-content: space-between; color: var(--muted); font-size: 0.84rem; margin-bottom: 7px; }
.progress-bar { height: 10px; background: rgba(255,255,255,0.12); border-radius: 99px; overflow: hidden; }
.progress-bar i { display: block; height: 100%; width: var(--w, 0%); background: linear-gradient(90deg, var(--accent), var(--accent-2)); border-radius: inherit; }

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 14px;
}
.toolbar .title { min-width: 0; }
.toolbar h2 { margin: 0; font-size: 1.2rem; }
.toolbar p { margin: 3px 0 0; color: var(--muted); font-size: 0.88rem; }

.soft-btn, .primary, .danger-btn, .chip, .answer-btn {
  min-height: var(--tap);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 11px 14px;
  cursor: pointer;
  color: var(--text);
  background: rgba(255,255,255,0.09);
  transition: transform 0.16s ease, background 0.16s ease, border-color 0.16s ease;
}
.primary {
  background: linear-gradient(135deg, #38bdf8, #34d399);
  color: #061225;
  border: 0;
  font-weight: 800;
  box-shadow: 0 16px 42px rgba(52, 211, 153, 0.2);
}
.danger-btn { background: var(--danger-bg); color: var(--danger); border-color: rgba(248, 113, 113, 0.25); }
.button-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 14px; }
.button-row.three { grid-template-columns: 1fr 1fr 1fr; }

.study-card {
  min-height: 330px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  position: relative;
  overflow: hidden;
}
.study-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 15% 0%, rgba(167, 243, 208, 0.13), transparent 38%);
  pointer-events: none;
}
.card-meta { display: flex; align-items: center; justify-content: space-between; gap: 10px; position: relative; z-index: 1; }
.category { color: var(--accent-2); font-size: 0.85rem; font-weight: 700; }
.star {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.08);
  color: #fde68a;
  font-size: 1.1rem;
}
.word-main {
  position: relative;
  z-index: 1;
  text-align: center;
  direction: ltr;
  unicode-bidi: plaintext;
}
.word-main .term { font-size: clamp(2rem, 10vw, 4rem); font-weight: 850; letter-spacing: -0.055em; line-height: 1.03; }
.word-main .hint { margin-top: 12px; color: var(--muted); }
.translation {
  position: relative;
  z-index: 1;
  padding: 14px;
  border-radius: 18px;
  background: rgba(8, 16, 31, 0.48);
  border: 1px solid rgba(255,255,255,0.12);
  line-height: 1.55;
  font-size: clamp(1.15rem, 5vw, 1.65rem);
  text-align: center;
}
.hidden-translation { color: var(--muted); font-size: 0.98rem; }
.tap-card { cursor: pointer; }

.answer-grid { display: grid; gap: 10px; margin-top: 14px; }
.answer-btn {
  width: 100%;
  text-align: right;
  line-height: 1.35;
  background: rgba(255,255,255,0.085);
}
.answer-btn.correct { background: var(--good-bg); border-color: rgba(74, 222, 128, 0.36); color: var(--good); }
.answer-btn.wrong { background: var(--danger-bg); border-color: rgba(248, 113, 113, 0.36); color: var(--danger); }
.answer-btn:disabled { opacity: 0.93; cursor: default; }

.input-card input, .search-input {
  width: 100%;
  min-height: 54px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.1);
  color: var(--text);
  border-radius: 18px;
  padding: 14px 16px;
  outline: none;
  direction: ltr;
  text-align: left;
}
.input-card input:focus, .search-input:focus { border-color: rgba(125, 211, 252, 0.75); box-shadow: 0 0 0 4px rgba(125, 211, 252, 0.12); }
.feedback {
  margin-top: 12px;
  border-radius: 18px;
  padding: 12px 14px;
  line-height: 1.5;
  background: rgba(255,255,255,0.08);
  border: 1px solid var(--line);
}
.feedback.good { background: var(--good-bg); color: var(--good); border-color: rgba(74, 222, 128, 0.34); }
.feedback.bad { background: var(--danger-bg); color: var(--danger); border-color: rgba(248, 113, 113, 0.34); }
.feedback b { direction: ltr; unicode-bidi: plaintext; display: inline-block; }

.match-board { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; align-items: start; }
.match-col { display: grid; gap: 10px; }
.match-card {
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.085);
  border-radius: 18px;
  padding: 10px;
  cursor: pointer;
  line-height: 1.25;
  text-align: center;
}
.match-card.term { direction: ltr; unicode-bidi: plaintext; }
.match-card.selected { outline: 3px solid rgba(125, 211, 252, 0.36); border-color: rgba(125, 211, 252, 0.75); }
.match-card.done { opacity: 0.38; text-decoration: line-through; }
.match-card.wrong-shake { animation: shake 0.28s linear; }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(5px); } 75% { transform: translateX(-5px); } }

.list-controls { display: grid; grid-template-columns: 1fr auto; gap: 10px; align-items: center; margin-bottom: 12px; }
.search-input { direction: rtl; text-align: right; }
.chips { display: flex; gap: 8px; overflow-x: auto; padding: 2px 0 8px; scrollbar-width: none; }
.chips::-webkit-scrollbar { display: none; }
.chip { white-space: nowrap; min-height: 40px; padding: 8px 12px; }
.chip.active { background: rgba(125, 211, 252, 0.2); border-color: rgba(125, 211, 252, 0.55); }
.word-list { display: grid; gap: 10px; }
.word-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.075);
  border-radius: 18px;
}
.word-row .num {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  color: var(--muted);
  font-size: 0.85rem;
}
.word-row b { direction: ltr; unicode-bidi: plaintext; display: block; font-size: 1rem; }
.word-row small { color: var(--muted); line-height: 1.4; display: block; margin-top: 2px; }
.word-row .mini-progress { color: var(--accent-2); font-size: 0.82rem; white-space: nowrap; }

.result-card { padding: 22px; text-align: center; }
.result-card h2 { margin: 0 0 8px; font-size: 2rem; letter-spacing: -0.05em; }
.result-card p { color: var(--muted); line-height: 1.55; }
.footer-note { color: var(--muted); text-align: center; font-size: 0.8rem; margin: 16px 0 0; }
.empty { color: var(--muted); padding: 20px; text-align: center; }

@media (max-width: 520px) {
  .app-shell { padding-inline: 12px; }
  .topbar { align-items: flex-start; }
  .pill { font-size: 0.82rem; padding-inline: 10px; }
  .stats-grid { gap: 8px; }
  .stat { padding: 11px 7px; }
  .stat strong { font-size: 1.14rem; }
  .mode-grid { gap: 10px; }
  .mode-btn { min-height: 118px; padding: 14px; border-radius: 21px; }
  .button-row.three { grid-template-columns: 1fr; }
  .match-board { grid-template-columns: 1fr; }
  .study-card { min-height: 310px; padding: 18px; }
  .word-row { grid-template-columns: 1fr auto; }
  .word-row .num { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}
