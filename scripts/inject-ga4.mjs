import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const root = process.argv[2] || '_site';
const checkOnly = process.argv.includes('--check');
const marker = 'data-jr-ga4="curriculum"';

const analyticsSnippet = `
    <!-- JR Academy analytics: injected into the assembled curriculum site. -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-5YLJJB3LHZ" ${marker}></script>
    <script ${marker}>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5YLJJB3LHZ', { groups: 'jr_sites' });
      if (location.hostname === 'jracademy.ai' || location.hostname.endsWith('.jracademy.ai')) {
        gtag('config', 'G-CKXMYNX5QL', { groups: 'jr_sites' });
      }
    </script>`;

const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (extname(path).toLowerCase() === '.html') htmlFiles.push(path);
  }
}

await walk(root);

const missing = [];
let injected = 0;
let injectedWithoutHead = 0;

for (const path of htmlFiles) {
  const html = await readFile(path, 'utf8');

  if (html.includes(marker)) continue;

  if (checkOnly) {
    missing.push(path);
    continue;
  }

  const closingHead = html.search(/<\/head\s*>/i);
  let updated;
  if (closingHead !== -1) {
    updated = `${html.slice(0, closingHead)}${analyticsSnippet}\n  ${html.slice(closingHead)}`;
  } else {
    const openingHtml = html.match(/<html\b[^>]*>/i);
    const insertionPoint = openingHtml ? openingHtml.index + openingHtml[0].length : 0;
    updated = `${html.slice(0, insertionPoint)}${analyticsSnippet}\n${html.slice(insertionPoint)}`;
    injectedWithoutHead += 1;
  }

  await writeFile(path, updated);
  injected += 1;
}

if (missing.length) {
  console.error(
    'Curriculum HTML files missing GA4:',
    missing,
  );
  process.exit(1);
}

console.log(
  checkOnly
    ? `Curriculum GA4 check passed: ${htmlFiles.length} HTML files`
    : `Curriculum GA4 injected into ${injected} of ${htmlFiles.length} HTML files (${injectedWithoutHead} without </head>)`,
);
