#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const bootcampRoot = resolve(import.meta.dirname, "..");
const outlinePath = resolve(bootcampRoot, "public/outline.json");
const lessonCodes = process.argv.slice(2);

if (lessonCodes.length === 0) {
  throw new Error("Usage: node scripts/embed-learning-materials.mjs L02 [L03 ...]");
}

let outlineText = await readFile(outlinePath, "utf8");

for (const lessonCode of lessonCodes) {
  if (!/^L\d{2}$/.test(lessonCode)) {
    throw new Error(`Invalid lesson code: ${lessonCode}`);
  }

  const materialPath = resolve(bootcampRoot, "learning-materials", `${lessonCode}.html`);
  const material = (await readFile(materialPath, "utf8")).trim();
  const codeMarker = `"code": ${JSON.stringify(lessonCode)}`;
  const lessonStart = outlineText.indexOf(codeMarker);

  if (lessonStart === -1) {
    throw new Error(`Lesson ${lessonCode} was not found in ${outlinePath}`);
  }

  const nextLessonStart = outlineText.indexOf('\n          "code": "L', lessonStart + codeMarker.length);
  const lessonEnd = nextLessonStart === -1 ? outlineText.length : nextLessonStart;
  const lessonBlock = outlineText.slice(lessonStart, lessonEnd);
  const idMatch = lessonBlock.match(/^(\s*)"_id":\s*"[^"]+"/m);

  if (!idMatch || idMatch.index === undefined) {
    throw new Error(`Lesson ${lessonCode} has no _id boundary`);
  }

  const idOffset = lessonStart + idMatch.index;
  const beforeId = outlineText.slice(lessonStart, idOffset);
  const materialLine = `${idMatch[1]}"learningMaterial": ${JSON.stringify(material)},\n`;
  const existingMaterial = /^(\s*)"learningMaterial":\s*"(?:[^"\\]|\\.)*",?\n/m;

  if (existingMaterial.test(beforeId)) {
    const updatedBeforeId = beforeId.replace(existingMaterial, materialLine);
    outlineText = outlineText.slice(0, lessonStart) + updatedBeforeId + outlineText.slice(idOffset);
  } else {
    outlineText = outlineText.slice(0, idOffset) + materialLine + outlineText.slice(idOffset);
  }
}

const parsedOutline = JSON.parse(outlineText);
const allLessons = [];

function collectLessons(value) {
  if (Array.isArray(value)) {
    value.forEach(collectLessons);
    return;
  }

  if (!value || typeof value !== "object") return;
  if (typeof value.code === "string" && /^L\d{2}$/.test(value.code)) allLessons.push(value);
  Object.values(value).forEach(collectLessons);
}

collectLessons(parsedOutline);

for (const lessonCode of lessonCodes) {
  const expected = (await readFile(resolve(bootcampRoot, "learning-materials", `${lessonCode}.html`), "utf8")).trim();
  const lesson = allLessons.find((candidate) => candidate.code === lessonCode);

  if (!lesson || lesson.learningMaterial !== expected) {
    throw new Error(`Post-write verification failed for ${lessonCode}`);
  }
}

await writeFile(outlinePath, outlineText);
console.log(`Embedded learning materials: ${lessonCodes.join(", ")}`);
