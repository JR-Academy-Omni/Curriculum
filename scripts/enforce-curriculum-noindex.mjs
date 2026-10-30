import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const robots = '<meta name="robots" content="noindex, nofollow">\n<meta name="googlebot" content="noindex, nofollow">';

export function enforceNoindex(html) {
  // Restrict changes to the document head; never rewrite lesson examples/body.
  const head = /(<head\b[^>]*>)([\s\S]*?)(<\/head\s*>)/i.exec(html);
  if (!head) throw new Error('Curriculum HTML must contain a complete head element');
  const content = head[2].replace(/<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script\s*>|<meta\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi, tag => {
    if (!/^<meta\b/i.test(tag)) return tag;
    return /\bname\s*=\s*(?:"(?:robots|googlebot)"|'(?:robots|googlebot)'|(?:robots|googlebot)(?=\s|\/?>))/i.test(tag) ? '' : tag;
  }).trim();
  return html.slice(0, head.index) + head[1] + '\n' + robots + '\n' + content + '\n' + head[3] + html.slice(head.index + head[0].length);
}

export async function enforceDirectory(root) {
  let count = 0;
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) await visit(path);
      else if (entry.isFile() && extname(path).toLowerCase() === '.html') {
        const original = await readFile(path, 'utf8');
        const result = enforceNoindex(original);
        if (result !== original) await writeFile(path, result);
        count++;
      }
    }
  }
  await visit(root);
  if (!count) throw new Error('No Curriculum HTML found');
  return count;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(`Curriculum HTML noindex enforced: ${await enforceDirectory(process.argv[2] || '_site')} files`);
}
