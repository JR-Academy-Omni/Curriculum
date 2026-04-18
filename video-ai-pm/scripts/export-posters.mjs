import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const HTML_FILE = 'file://' + path.resolve(__dirname, '../../business-analyst/public/xhs-posters/index.html');
const OUT_DIR = path.resolve(__dirname, '../src/assets/images');

const POSTERS = [
  { id: 'poster-1', name: 'mp-ai-pm-p1-cover.png' },
  { id: 'poster-2', name: 'mp-ai-pm-p2-trend.png' },
  { id: 'poster-3', name: 'mp-ai-pm-p3-outcomes.png' },
  { id: 'poster-4', name: 'mp-ai-pm-p4-p3-internship.png' },
  { id: 'poster-5', name: 'mp-ai-pm-p5-package.png' },
];

async function exportPosters() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1242, height: 1660, deviceScaleFactor: 2 });
  await page.goto(HTML_FILE, { waitUntil: 'networkidle2' });

  for (const p of POSTERS) {
    console.log(`Capturing ${p.id}...`);
    const element = await page.$(`#${p.id}`);
    if (element) {
      await element.screenshot({
        path: path.join(OUT_DIR, p.name),
        type: 'png',
      });
      console.log(`Saved ${p.name}`);
    } else {
      console.error(`Could not find element #${p.id}`);
    }
  }

  await browser.close();
}

exportPosters().catch(console.error);
