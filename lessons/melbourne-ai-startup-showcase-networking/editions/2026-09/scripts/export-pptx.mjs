#!/usr/bin/env node
/**
 * Create an editable PPTX from the same 1600 × 900 layout used by the talk deck.
 * Run with the bundled Codex Node runtime. All drafts and reports stay private.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUILD = path.join(ROOT, '.build', 'pptx');
const RUNTIME = process.env.CODEX_RUNTIME_ROOT || '/Users/shijie/.cache/codex-runtimes/codex-primary-runtime/dependencies';
const SKILL = process.env.PRESENTATIONS_SKILL_DIR || '/Users/shijie/.codex/plugins/cache/openai-primary-runtime/presentations/26.909.12148/skills/presentations';
process.env.RUNTIME_NODE_MODULES ||= path.join(RUNTIME, 'node', 'node_modules');
process.env.RUNTIME_NODE ||= path.join(RUNTIME, 'node', 'bin', 'node');
process.env.RUNTIME_PYTHON ||= path.join(RUNTIME, 'python', 'bin', 'python3');
const args = process.argv.slice(2);
const valueOf = (key, fallback) => args.includes(key) ? args[args.indexOf(key) + 1] : fallback;
const source = path.resolve(valueOf('--source', path.join(ROOT, 'src', 'data', 'deck.json')));
const publicDir = path.resolve(valueOf('--public', path.join(ROOT, 'public')));
const finalPath = path.resolve(valueOf('--output', path.join(ROOT, 'output', 'melbourne-ai-startup-showcase-2026-09-30.pptx')));
const runLabel = valueOf('--label', 'deck');
const draftOnly = args.includes('--draft-only');
const render = !args.includes('--no-render');
const renderSelection = valueOf('--render-slides', '').split(',').filter(Boolean).map(Number);
const width = 1600, height = 900;

await fs.mkdir(BUILD, { recursive: true });
await fs.mkdir(path.dirname(finalPath), { recursive: true });
const link = path.join(BUILD, 'node_modules');
try { await fs.symlink(path.join(RUNTIME, 'node', 'node_modules'), link, 'dir'); }
catch (error) { if (error.code !== 'EEXIST') throw error; }
const require = createRequire(path.join(BUILD, 'package.json'));
const { Presentation, PresentationFile, FileBlob } = await import(pathToFileURL(require.resolve('@oai/artifact-tool')).href);
const { resolvePresentationFont, finalizePresentation } = await import(pathToFileURL(path.join(SKILL, 'container_tools', 'artifact_tool_utils.mjs')).href);
const fallbackFont = resolvePresentationFont({ fontFamily: 'PingFang SC' });
const data = JSON.parse(await fs.readFile(source, 'utf8'));
if (!Array.isArray(data.slides) || !data.slides.length) throw new Error('deck.json has no slides');
const presentation = Presentation.create({ slideSize: { width, height } });
const fonts = new Set();
const contentTypes = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
const imageCache = new Map();

function position(e) {
  const vals = [e.x, e.y, e.w, e.h];
  if (vals.some(n => !Number.isFinite(n)) || e.w <= 0 || e.h <= 0) {
    throw new Error(`Invalid element geometry: ${JSON.stringify(e)}`);
  }
  if (e.x < -1 || e.y < -1 || e.x + e.w > width + 1 || e.y + e.h > height + 1) {
    throw new Error(`Element exceeds the ${width}×${height} canvas: ${JSON.stringify(e)}`);
  }
  return { left: e.x, top: e.y, width: e.w, height: e.h };
}

function fontFor(element) {
  const requested = element.fontFamily?.split(',')[0].trim().replace(/^['"]|['"]$/g, '');
  const family = requested || fallbackFont;
  fonts.add(family);
  return family;
}

async function embeddedImage(src) {
  const file = path.resolve(publicDir, src.replace(/^\/+/, ''));
  if (!file.startsWith(publicDir + path.sep)) throw new Error(`Image outside public directory: ${src}`);
  if (!imageCache.has(file)) {
    let bytes = new Uint8Array(await fs.readFile(file));
    let contentType = contentTypes[path.extname(file).toLowerCase()];
    if (!contentType) throw new Error(`Unsupported image extension: ${file}`);
    // Office has broad support for PNG; convert WebP only to preserve compatibility.
    if (contentType === 'image/webp') {
      const sharp = require('sharp');
      bytes = new Uint8Array(await sharp(bytes).png().toBuffer());
      contentType = 'image/png';
    }
    imageCache.set(file, { bytes, contentType });
  }
  return imageCache.get(file);
}

for (const [slideIndex, model] of data.slides.entries()) {
  const slide = presentation.slides.add();
  slide.background.fill = model.background || '#FFFDF5';
  if (model.notes) slide.speakerNotes.textFrame.setText(model.notes);
  for (const [elementIndex, e] of model.elements.entries()) {
    const name = `${model.id || `slide-${slideIndex + 1}`}-${e.type}-${elementIndex + 1}`;
    const box = position(e);
    if (e.type === 'rect') {
      slide.shapes.add({
        geometry: 'rect', name, position: box,
        fill: e.fill || 'none',
        line: { style: 'solid', fill: e.stroke || 'none', width: e.stroke ? (e.strokeWidth ?? 1) : 0 },
        ...(typeof e.shadow === 'string' ? { shadow: e.shadow } : {}),
      });
    } else if (e.type === 'text') {
      const shape = slide.shapes.add({
        geometry: 'textbox', name, position: box, fill: 'none',
        line: { fill: 'none', width: 0 },
      });
      shape.text = String(e.text ?? '');
      shape.text.style = {
        typeface: fontFor(e), fontSize: e.fontSize || 32,
        bold: e.fontWeight === 'bold' || Number(e.fontWeight) >= 600,
        color: e.color || '#111111',
        alignment: e.align || 'left', verticalAlignment: 'top',
        autoFit: 'none', wrap: 'square',
        lineSpacing: e.lineHeight || 1.15,
        insets: { top: 0, right: 0, bottom: 0, left: 0 },
      };
      if (e.url && e.text) shape.text.get(String(e.text)).link = { uri: e.url, isExternal: true };
    } else if (e.type === 'image') {
      const { bytes, contentType } = await embeddedImage(e.src);
      slide.images.add({ blob: bytes, contentType, alt: e.alt || path.basename(e.src), fit: e.fit || 'contain', position: box });
    } else throw new Error(`Unsupported type ${e.type} on ${model.id}`);
  }
}

const draftPath = path.join(BUILD, `${runLabel}-candidate.pptx`);
await (await PresentationFile.exportPptx(presentation)).save(draftPath);
await fs.writeFile(path.join(BUILD, `${runLabel}-manifest.json`), JSON.stringify({
  title: data.title, count: data.slides.length,
  slides: data.slides.map((s, i) => ({ number: i + 1, id: s.id, title: s.title })),
  fonts: [...fonts], source, publicDir,
}, null, 2));

let artifactPath = draftPath;
if (!draftOnly) {
  await finalizePresentation({
    workspaceDir: ROOT, candidatePath: draftPath, finalPath,
    pythonExecutable: path.join(RUNTIME, 'python', 'bin', 'python3'),
    integrityValidatorPath: path.join(SKILL, 'container_tools', 'inspect_presentation_package_integrity.py'),
    layoutValidatorPath: path.join(SKILL, 'container_tools', 'inspect_presentation_layout_geometry.py'),
    layoutArgs: ['--expected-slide-size-emu', `${width * 9525},${height * 9525}`, '--expected-slide-count', String(data.slides.length), '--validate-bullet-geometry', '--validate-heading-fit'],
    requiredNativeTableOwnerSlides: [],
    requiredNativeChartOwnerSlides: [],
    fontPolicy: { basis: 'design', families: [...fonts] },
    verifyArtifactToolImport: true,
    receiptPath: path.join(BUILD, `${runLabel}-validation.json`),
  });
  artifactPath = finalPath;
}

if (render) {
  // Review the exported file, so previews include serialization and import effects.
  const exported = await PresentationFile.importPptx(await FileBlob.load(artifactPath));
  const renderDir = path.join(BUILD, `${runLabel}-rendered`);
  await fs.mkdir(renderDir, { recursive: true });
  for (const [index, slide] of exported.slides.items.entries()) {
    if (renderSelection.length && !renderSelection.includes(index + 1)) continue;
    const blob = await exported.export({ slide, format: 'png', scale: 1 });
    const file = `slide-${String(index + 1).padStart(2, '0')}`;
    await fs.writeFile(path.join(renderDir, `${file}.png`), new Uint8Array(await blob.arrayBuffer()));
    const layout = await slide.export({ format: 'layout' });
    await fs.writeFile(path.join(renderDir, `${file}.layout.json`), await layout.text());
    console.log(`Rendered ${index + 1}/${data.slides.length}: ${data.slides[index].title}`);
  }
  if (!renderSelection.length) {
    const montage = await exported.export({ format: 'webp', montage: true, scale: 0.2 });
    await fs.writeFile(path.join(renderDir, 'montage.webp'), new Uint8Array(await montage.arrayBuffer()));
  }
}
console.log(JSON.stringify({ artifact: artifactPath, slides: data.slides.length, rendered: render, fonts: [...fonts] }));
