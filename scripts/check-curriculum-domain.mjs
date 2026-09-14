import { readdir, readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
const root = process.argv[2] || '_site';
const types = new Set(['.html', '.js', '.json', '.css', '.svg', '.txt', '.xml']);
let failures = [];
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, e.name);
    if (e.isDirectory()) await walk(path);
    else if (types.has(extname(path)) && /https?:\/\/(?:www\.)?jiangren\.com\.au\/curriculum(?=[/\s"'<>?#)\]`]|$)/i.test(await readFile(path, 'utf8'))) failures.push(path);
  }
}
await walk(root);
if (failures.length) { console.error('Old curriculum URLs in publish output:', failures); process.exit(1); }
console.log('Curriculum domain check passed:', root);
