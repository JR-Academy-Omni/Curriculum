import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

// Inspect executable script tags, not escaped teaching examples or slide prose.
const root = process.argv[2] || '_site';
const failures = [];
let htmlCount = 0;

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (extname(path).toLowerCase() === '.html') {
      htmlCount += 1;
      const html = await readFile(path, 'utf8');
      const scripts = html.match(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi) || [];
      if (scripts.some(script =>
        /\bsrc\s*=\s*["'][^"']*(?:googletagmanager\.com|google-analytics\.com)/i.test(script) ||
        /\bdata-jr-ga4\s*=/i.test(script) ||
        /\bgtag\s*\(\s*["']config["']/i.test(script) ||
        /\bga\s*\(\s*["']create["']/i.test(script) ||
        /googletagmanager\.com\/gtm\.js/i.test(script)
      )) failures.push(path);
    }
  }
}

await walk(root);
if (!htmlCount || failures.length) {
  console.error(!htmlCount ? 'No Curriculum HTML found' : 'Analytics scripts are forbidden in Curriculum:', failures);
  process.exit(1);
}
console.log(`Curriculum analytics exclusion passed: ${htmlCount} HTML files`);
