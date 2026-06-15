# Vocab Quest — verified package

קבצים להעלאה ל-GitHub Pages.

חשוב: הקובץ `index.html` חייב להתחיל בשורה:

```html
<!doctype html>
```

אם `index.html` מתחיל ב-`rules_version = '2';`, העלית בטעות את חוקי Firebase במקום קובץ האתר.

## קבצים

- `index.html` — המשחק עצמו
- `firebase-config.js` — רק פרטי Firebase, אם רוצים סנכרון בין מכשירים
- `FIREBASE_RULES_COPY_TO_FIREBASE.txt` — להעתקה ידנית ל-Firebase Console בלבד
- `manifest.webmanifest` — כדי שייראה כמו אפליקציה באייפון
- `sw.js` — מנקה service worker ישן ולא שומר cache
- `icons/` — אייקונים
- `.nojekyll` — מתאים ל-GitHub Pages

## קישור ניקוי cache

אחרי העלאה פתח:

```text
https://ronlevy917.github.io/vocab-quest/?v=verified-2026-06-15-v4
```
