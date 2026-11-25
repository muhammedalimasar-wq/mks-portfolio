// Fills every [data-i] element in the HTML pages with its English text,
// so the page has real content before JavaScript runs (Google, slow phones).
// Run after changing texts in js/common.js:  node tools/prerender.js
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'js/common.js'), 'utf8');
const start = src.indexOf('const T = ') + 'const T = '.length;
const end = src.indexOf('\n  };\n', start) + 4;
const T = eval('(' + src.slice(start, end) + ')');
const en = T.en;
// cache-busting: every run stamps css/js links with a new version so browsers fetch fresh files
const ver = Date.now().toString(36);
for (const page of ['index.html', 'project.html', 'admin.html']) {
  const file = path.join(root, page);
  let html = fs.readFileSync(file, 'utf8');
  let n = 0;
  html = html.replace(/(<(\w+)\b[^>]*\bdata-i="(\w+)"[^>]*>)([\s\S]*?)(<\/\2>)/g, (m, open, tag, key, inner, close) => {
    if (!(key in en)) return m;
    n++;
    return open + en[key] + close;
  });
  html = html.replace(/((?:href|src)="(?:css|js)\/[\w.-]+\.(?:css|js))(?:\?v=\w+)?"/g, `$1?v=${ver}"`);
  fs.writeFileSync(file, html);
  console.log(page, n, 'elements filled, version', ver);
}
