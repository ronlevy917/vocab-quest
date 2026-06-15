:root {
  color-scheme: dark;
  --bg: #070b18;
  --bg2: #101a35;
  --card: rgba(255, 255, 255, 0.09);
  --card2: rgba(255, 255, 255, 0.14);
  --line: rgba(255, 255, 255, 0.16);
  --line2: rgba(255, 255, 255, 0.25);
  --text: #f8fbff;
  --muted: rgba(248, 251, 255, 0.72);
  --muted2: rgba(248, 251, 255, 0.56);
  --soft: rgba(255, 255, 255, 0.08);
  --good: #45e39a;
  --bad: #ff5d7d;
  --warn: #ffd166;
  --accent: #61e8ff;
  --accent2: #ad7bff;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
  --radius: 26px;
  --safe-top: env(safe-area-inset-top, 0px);
  --safe-bottom: env(safe-area-inset-bottom, 0px);
}

* { box-sizing: border-box; }
html {
  min-height: 100%;
  background:
    radial-gradient(circle at 10% 8%, rgba(97, 232, 255, .24), transparent 34%),
    radial-gradient(circle at 85% 4%, rgba(173, 123, 255, .27), transparent 34%),
    radial-gradient(circle at 50% 100%, rgba(69, 227, 154, .13), transparent 39%),
    linear-gradient(150deg, var(--bg), var(--bg2));
  background-attachment: fixed;
}
body {
  min-height: 100%;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.65), transparent 76%);
}
button, input, select, textarea { font: inherit; }
button { -webkit-tap-highlight-color: transparent; }
h1, h2, h3, p { margin: 0; }
h1 { font-size: clamp(24px, 5vw, 42px); line-height: 1.04; letter-spacing: -0.05em; }
h2 { font-size: clamp(23px, 5vw, 36px); line-height: 1.08; letter-spacing: -0.04em; }
h3 { font-size: 18px; line-height: 1.18; letter-spacing: -0.02em; }
p { color: var(--muted); line-height: 1.55; }
small { color: var(--muted2); }
pre { white-space: pre-wrap; direction: ltr; text-align: left; background: rgba(0,0,0,.25); border: 1px solid var(--line); padding: 12px; border-radius: 14px; overflow: auto; }
.ltr { direction: ltr; unicode-bidi: isolate; text-align: left; }
.hidden { display: none !important; }
.boot { min-height: 100vh; display: grid; place-items: center; padding: 20px; }
.boot-card { width: min(420px, 100%); text-align: center; border: 1px solid var(--line); background: var(--card); border-radius: var(--radius); padding: 30px 20px; box-shadow: var(--shadow); }
.boot-logo, .logo {
  width: 54px; height: 54px; border-radius: 18px; display: grid; place-items: center; font-weight: 950; color: #061120;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  box-shadow: 0 16px 44px rgba(97, 232, 255, .20);
}
.boot-logo { margin: 0 auto 14px; }
.app { width: min(1160px, 100%); margin: 0 auto; padding: calc(14px + var(--safe-top)) 15px calc(98px + var(--safe-bottom)); }
.topbar { position: sticky; top: 0; z-index: 30; margin: -2px -5px 14px; padding: 10px 5px 12px; display: flex; align-items: center; justify-content: space-between; gap: 12px; backdrop-filter: blur(22px); }
.brand { display: flex; align-items: center; gap: 12px; min-width: 0; }
.brand p { max-width: 54vw; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 13px; }
.top-actions { display: flex; align-items: center; gap: 8px; flex: 0 0 auto; }
.panel, .hero, .flash-card, .result-card {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(255,255,255,.135), rgba(255,255,255,.065));
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.hero { position: relative; overflow: hidden; padding: clamp(18px, 4vw, 28px); margin-bottom: 17px; }
.hero::after { content: ""; position: absolute; inset-inline-start: -90px; bottom: -120px; width: 270px; height: 270px; border-radius: 50%; background: rgba(97,232,255,.16); filter: blur(5px); }
.hero > * { position: relative; z-index: 1; }
.hero p { margin-top: 9px; max-width: 780px; }
.pill, .soft-btn, .primary-btn, .danger-btn, .choice, .mode-btn, .icon-btn, .field, select, textarea {
  border: 1px solid var(--line);
  color: var(--text);
  background: var(--soft);
  border-radius: 999px;
}
.soft-btn, .primary-btn, .danger-btn, .icon-btn { min-height: 44px; padding: 10px 14px; display: inline-flex; justify-content: center; align-items: center; gap: 8px; text-decoration: none; cursor: pointer; transition: transform .17s ease, background .17s ease, border-color .17s ease, opacity .17s ease; }
.soft-btn:hover, .primary-btn:hover, .danger-btn:hover, .icon-btn:hover, .choice:hover, .mode-btn:hover, .match-card:hover { transform: translateY(-1px); }
.soft-btn:active, .primary-btn:active, .danger-btn:active, .icon-btn:active, .choice:active, .mode-btn:active, .match-card:active { transform: translateY(1px) scale(.99); }
.primary-btn { background: linear-gradient(135deg, var(--accent), var(--accent2)); color: #061120; border: 0; font-weight: 950; box-shadow: 0 16px 40px rgba(97,232,255,.16); }
.danger-btn { background: rgba(255,93,125,.14); border-color: rgba(255,93,125,.36); color: #ffd6de; }
.icon-btn { width: 44px; padding: 0; border-radius: 15px; }
.pill { min-height: 34px; display: inline-flex; align-items: center; gap: 7px; padding: 7px 12px; font-size: 13px; color: var(--muted); white-space: nowrap; }
.pill.good { color: #c9ffe4; border-color: rgba(69, 227, 154, .34); background: rgba(69, 227, 154, .11); }
.pill.warn { color: #fff0bb; border-color: rgba(255, 209, 102, .34); background: rgba(255, 209, 102, .10); }
.pill.bad { color: #ffd6de; border-color: rgba(255,93,125,.34); background: rgba(255,93,125,.10); }
.nav { position: sticky; top: 76px; z-index: 25; display: flex; gap: 8px; overflow-x: auto; padding: 4px 1px 14px; margin-bottom: 4px; scrollbar-width: none; backdrop-filter: blur(22px); }
.nav::-webkit-scrollbar { display: none; }
.nav button { flex: 0 0 auto; border: 1px solid var(--line); background: rgba(255,255,255,.07); color: var(--muted); border-radius: 999px; min-height: 42px; padding: 9px 14px; cursor: pointer; }
.nav button.active { background: rgba(255,255,255,.18); color: var(--text); border-color: var(--line2); font-weight: 850; }
.stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; margin-top: 18px; }
.stat { border: 1px solid rgba(255,255,255,.13); background: rgba(255,255,255,.09); border-radius: 20px; padding: 14px; min-width: 0; }
.stat strong { display: block; font-size: clamp(22px, 5vw, 34px); line-height: 1; letter-spacing: -0.055em; }
.stat span { display: block; color: var(--muted); font-size: 12px; margin-top: 5px; }
.progress-wrap { margin-top: 18px; }
.progress-info { display: flex; justify-content: space-between; gap: 12px; color: var(--muted); font-size: 13px; margin-bottom: 8px; }
.progress-bar { height: 12px; border-radius: 999px; background: rgba(255,255,255,.10); overflow: hidden; }
.progress-bar i { display: block; height: 100%; width: var(--w, 0%); border-radius: inherit; background: linear-gradient(90deg, var(--good), var(--accent), var(--accent2)); transition: width .35s ease; }
.section-title { display: flex; align-items: flex-end; justify-content: space-between; gap: 10px; margin: 22px 2px 12px; }
.section-title span { color: var(--muted); font-size: 13px; }
.mode-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.mode-btn { min-height: 138px; padding: 16px; border-radius: 24px; background: linear-gradient(180deg, rgba(255,255,255,.13), rgba(255,255,255,.07)); text-align: inherit; cursor: pointer; display: flex; flex-direction: column; align-items: flex-start; justify-content: space-between; gap: 12px; }
.mode-btn b { font-size: 20px; display: block; }
.mode-btn span { color: var(--muted); line-height: 1.45; }
.mode-icon { width: 45px; height: 45px; border-radius: 16px; display: grid; place-items: center; background: rgba(255,255,255,.13); font-size: 23px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.panel { padding: clamp(16px, 4vw, 22px); margin-bottom: 14px; }
.panel-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
.panel-head p { margin-top: 5px; }
.actions { display: flex; flex-wrap: wrap; gap: 9px; align-items: center; }
.flash-card { min-height: min(56vh, 430px); display: grid; place-items: center; text-align: center; padding: clamp(20px, 6vw, 44px); cursor: pointer; user-select: none; }
.flash-card .label { color: var(--muted); font-size: 13px; margin-bottom: 10px; }
.flash-card .term { font-size: clamp(36px, 10vw, 74px); font-weight: 950; letter-spacing: -0.06em; line-height: 1.04; }
.flash-card .translation { font-size: clamp(26px, 7vw, 48px); font-weight: 900; line-height: 1.15; }
.flash-meta { display: flex; justify-content: space-between; gap: 10px; color: var(--muted); margin: 10px 2px 0; font-size: 13px; }
.choice-grid { display: grid; gap: 10px; margin-top: 14px; }
.choice { width: 100%; padding: 16px; border-radius: 20px; cursor: pointer; text-align: inherit; background: rgba(255,255,255,.08); min-height: 60px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.choice.correct { border-color: rgba(69, 227, 154, .55); background: rgba(69, 227, 154, .15); }
.choice.wrong { border-color: rgba(255,93,125,.55); background: rgba(255,93,125,.15); }
.question { padding: 18px; border-radius: 23px; border: 1px solid rgba(255,255,255,.13); background: rgba(255,255,255,.08); }
.question .prompt { margin-top: 10px; font-size: clamp(28px, 8vw, 54px); font-weight: 950; letter-spacing: -0.05em; line-height: 1.08; }
.feedback { margin-top: 12px; padding: 13px 14px; border-radius: 18px; border: 1px solid var(--line); background: rgba(255,255,255,.08); }
.feedback.good { border-color: rgba(69, 227, 154, .45); background: rgba(69, 227, 154, .12); }
.feedback.bad { border-color: rgba(255,93,125,.45); background: rgba(255,93,125,.12); }
.form-row { display: flex; gap: 9px; align-items: center; flex-wrap: wrap; }
.field, select, textarea { min-height: 48px; padding: 12px 14px; outline: none; width: 100%; border-radius: 18px; background: rgba(0,0,0,.16); }
textarea { min-height: 120px; resize: vertical; direction: ltr; text-align: left; }
.field:focus, select:focus, textarea:focus { border-color: rgba(97,232,255,.55); box-shadow: 0 0 0 4px rgba(97,232,255,.10); }
.form-row .field { flex: 1 1 240px; }
.form-row .primary-btn, .form-row .soft-btn, .form-row .danger-btn { flex: 0 0 auto; }
.match-board { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.match-column { display: grid; gap: 9px; }
.match-card { min-height: 62px; padding: 13px; border: 1px solid var(--line); border-radius: 18px; background: rgba(255,255,255,.08); color: var(--text); cursor: pointer; text-align: center; }
.match-card.selected { border-color: rgba(97,232,255,.62); background: rgba(97,232,255,.13); }
.match-card.matched { opacity: .45; text-decoration: line-through; pointer-events: none; }
.result-card { padding: 20px; }
.score-big { font-size: clamp(54px, 15vw, 105px); font-weight: 950; letter-spacing: -0.08em; line-height: .95; }
.words-toolbar { display: grid; grid-template-columns: 1.5fr 1fr auto; gap: 10px; align-items: center; margin-bottom: 12px; }
.words-table { width: 100%; border-collapse: collapse; overflow: hidden; border-radius: 18px; }
.words-table th, .words-table td { padding: 12px 10px; border-bottom: 1px solid rgba(255,255,255,.10); vertical-align: middle; }
.words-table th { color: var(--muted); font-size: 12px; font-weight: 700; text-align: right; }
.words-table tr { background: rgba(255,255,255,.045); }
.words-table tr:hover { background: rgba(255,255,255,.07); }
.word-card-list { display: none; gap: 10px; }
.word-row-card { border: 1px solid rgba(255,255,255,.13); background: rgba(255,255,255,.07); border-radius: 20px; padding: 14px; }
.word-row-card .top { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 8px; }
.badge-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 9px; }
.sync-card { border: 1px solid rgba(97,232,255,.25); background: linear-gradient(180deg, rgba(97,232,255,.10), rgba(255,255,255,.055)); }
.code-box { direction: ltr; text-align: left; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; }
.toast { position: fixed; z-index: 99; inset-inline: 14px; bottom: calc(16px + var(--safe-bottom)); display: grid; place-items: center; pointer-events: none; }
.toast .toast-inner { pointer-events: auto; max-width: min(560px, 100%); border: 1px solid var(--line2); background: rgba(6, 12, 28, .92); color: var(--text); box-shadow: var(--shadow); border-radius: 999px; padding: 12px 16px; backdrop-filter: blur(18px); }
.error-panel { margin-top: 40px; }
@media (max-width: 820px) {
  .app { padding-inline: 12px; }
  .topbar { align-items: flex-start; }
  .top-actions .pill { max-width: 42vw; overflow: hidden; text-overflow: ellipsis; }
  .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mode-grid { grid-template-columns: 1fr; }
  .grid-2 { grid-template-columns: 1fr; }
  .nav { position: fixed; top: auto; bottom: 0; inset-inline: 0; padding: 9px 10px calc(9px + var(--safe-bottom)); margin: 0; background: rgba(7, 11, 24, .82); border-top: 1px solid var(--line); }
  .nav button { min-width: 86px; }
  .brand p { display: none; }
  .words-toolbar { grid-template-columns: 1fr; }
  .words-table { display: none; }
  .word-card-list { display: grid; }
}
@media (max-width: 520px) {
  .top-actions .pill { display: none; }
  .form-row .primary-btn, .form-row .soft-btn, .form-row .danger-btn { width: 100%; }
  .match-board { gap: 8px; }
  .match-card { font-size: 14px; padding: 10px 8px; }
  .panel-head { flex-direction: column; align-items: stretch; }
}
