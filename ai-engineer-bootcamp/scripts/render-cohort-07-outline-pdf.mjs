import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BOOTCAMP = path.resolve(HERE, '..');
const ROOT = path.resolve(BOOTCAMP, '..', '..');
const HTML_PATH = path.join(BOOTCAMP, 'public', 'posters', 'cohort-07-detailed-outline.html');
const PDF_PATH = path.join(ROOT, 'output', 'pdf', 'JR-Academy-AI-Engineer-Cohort-07-Detailed-Outline.pdf');
const DOWNLOAD_PATH = path.join(process.env.HOME, 'Downloads', 'JR Academy - AI Engineer 第七期详细大纲.pdf');
const MAC_DOWNLOAD_PATH = path.join(process.env.HOME, 'Downloads', 'JR Academy - AI Engineer 第七期详细大纲 - Mac兼容版.pdf');
const MAC_RENDERER = path.join(HERE, 'render-mac-compatible-pdf.py');
const PYTHON_EXECUTABLE = process.env.PYTHON_EXECUTABLE || 'python3';
const execFileAsync = promisify(execFile);
const CHROME_CANDIDATES = [
  process.env.CHROME_EXECUTABLE_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
].filter(Boolean);

async function loadPlaywright() {
  try {
    return await import('playwright');
  } catch (error) {
    const explicitPath = process.env.PLAYWRIGHT_MODULE_PATH;
    if (!explicitPath) {
      throw new Error('Playwright 未安装。请设置 PLAYWRIGHT_MODULE_PATH 指向 playwright/index.mjs。', { cause: error });
    }
    return import(pathToFileURL(explicitPath).href);
  }
}

async function main() {
  await fs.access(HTML_PATH);
  const { chromium } = await loadPlaywright();
  let executablePath;
  for (const candidate of CHROME_CANDIDATES) {
    try {
      await fs.access(candidate);
      executablePath = candidate;
      break;
    } catch {}
  }
  const browser = await chromium.launch(executablePath ? { executablePath } : {});
  const page = await browser.newPage({ viewport: { width: 1360, height: 960 }, deviceScaleFactor: 1 });
  try {
    await page.goto(pathToFileURL(HTML_PATH).href, { waitUntil: 'load' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((img) => img.complete ? Promise.resolve() : new Promise((resolve, reject) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', reject, { once: true });
      })));
    });

    const audit = await page.evaluate(() => {
      const tolerance = 1.5;
      const pages = [...document.querySelectorAll('.page')];
      const overflows = [];
      const escaped = [];
      for (const [index, pageEl] of pages.entries()) {
        if (pageEl.scrollHeight - pageEl.clientHeight > tolerance || pageEl.scrollWidth - pageEl.clientWidth > tolerance) {
          overflows.push({ page: index + 1, x: pageEl.scrollWidth - pageEl.clientWidth, y: pageEl.scrollHeight - pageEl.clientHeight });
        }
        const pageRect = pageEl.getBoundingClientRect();
        for (const el of pageEl.querySelectorAll('h1,h2,h3,p,li,strong,.lesson-summary,.week-meta article')) {
          const rect = el.getBoundingClientRect();
          if (rect.left < pageRect.left - tolerance || rect.right > pageRect.right + tolerance || rect.top < pageRect.top - tolerance || rect.bottom > pageRect.bottom + tolerance) {
            escaped.push({ page: index + 1, tag: el.tagName, text: (el.textContent || '').trim().slice(0, 80) });
          }
        }
      }
      return { pageCount: pages.length, overflows, escaped };
    });

    if (audit.pageCount !== 32) throw new Error(`Expected 32 HTML pages, got ${audit.pageCount}`);
    if (audit.overflows.length || audit.escaped.length) {
      throw new Error(`HTML layout audit failed:\n${JSON.stringify(audit, null, 2)}`);
    }

    await fs.mkdir(path.dirname(PDF_PATH), { recursive: true });
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: PDF_PATH,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await fs.copyFile(PDF_PATH, DOWNLOAD_PATH);
    const { stdout: macPdfPath } = await execFileAsync(PYTHON_EXECUTABLE, [MAC_RENDERER, PDF_PATH, MAC_DOWNLOAD_PATH]);
    const stat = await fs.stat(PDF_PATH);
    console.log(`HTML audit: ${audit.pageCount} pages, 0 overflow, 0 escaped elements`);
    console.log(`${PDF_PATH} (${Math.round(stat.size / 1024)} KB)`);
    console.log(DOWNLOAD_PATH);
    console.log(`Mac Preview compatible: ${macPdfPath.trim()}`);
  } finally {
    await page.close();
    await browser.close();
  }
}

main();
