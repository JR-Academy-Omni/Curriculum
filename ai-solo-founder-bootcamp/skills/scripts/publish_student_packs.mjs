#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '../../../..');
const courseRoot = resolve(import.meta.dirname, '../..');
const envPath = resolve(root, 'tools/skills-data-manager/.env.local');

for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
  if (!line || line.trimStart().startsWith('#') || !line.includes('=')) continue;
  const [key, ...rest] = line.split('=');
  if (!process.env[key.trim()]) process.env[key.trim()] = rest.join('=').trim();
}

const apiBase = (process.env.PROD_API_BASE || '').replace(/\/$/, '');
const token = process.env.ADMIN_TOKEN || '';
const sourceDir = process.argv[2];
if (!apiBase || !token || !sourceDir) {
  console.error('Usage: publish_student_packs.mjs <verified-download-directory>');
  process.exit(2);
}

const targets = [
  ['W0', '6a671b1b850325ba16ef7375', '[W0·Pre-work] 装机 + AI 订阅（Codex / DeepRouter / 双开）+ LLM Key + ABN 预备 + 创业身份采集 A/B/C'],
  ['W1', '6a671b1b850325ba16ef7380', '[W1] 搭起你的 CEO AI OS · Your CEO AI OS'],
  ['W2', '6a671b1c850325ba16ef739b', '[W2] 你的 AI 员工上岗 · Agents at Work'],
  ['W3', '6a671b1c850325ba16ef73b3', '[W3] 这是不是一门好生意 · Prove the Business'],
  ['W4', '6a671b1d850325ba16ef73c2', '[W4] 做出能卖的东西 · Make It Real'],
  ['W5', '6a671b1f850325ba16ef73fa', '[W5] 立起你的品牌门面 · Brand & Website'],
  ['W6', '6a671b20850325ba16ef7445', '[W6] 别让项目烂尾 · Keep Shipping ⭐嘉宾 Ray（微软）'],
  ['W7', '6a671b20850325ba16ef7495', '[W7] 收到第一笔钱 · First Dollar'],
  ['W8', '6aa3c0cf7f633224e021510b', '中文媒体 AI 自动化：从选题、创作到评论私信'],
  ['W9', '6aa3c7db7f633224e024856d', '海外媒体 AI 自动化：让内容适合海外用户和平台'],
  ['W10', '6aa3c87f7f633224e0248e6c', 'AI 全自动内容工厂：把一份资料变成持续运转的内容流程'],
  ['SEO-GEO', '6a671b23850325ba16ef74cc', '[W10] 让人和 AI 都搜到你 · SEO & GEO'],
  ['W11', '6a671b23850325ba16ef74d6', '[W11] 用户增长 · Growth Hacking'],
  ['W12', '6a671b24850325ba16ef74fa', '[W12] 让生意自己运转 · Autopilot'],
  ['W13', '6a671b24850325ba16ef7509', '[W13] 把钱从税务局拿回来 · Compliance & RDTI ⭐嘉宾 持牌 CPA / Grant consultant'],
  ['W14', '6a671b25850325ba16ef7524', '[W14] 把生意讲成故事 · Pitch & BP ⭐嘉宾 Stan（麦肯锡，书挡回归）'],
  ['W15', '6a671b26850325ba16ef752e', '[W15] 登台 · Demo Day · 入会 Founder Club'],
];

const headers = { Authorization: `Bearer ${token}` };
const sha256 = data => createHash('sha256').update(data).digest('hex');
const bodyData = body => body?.data ?? body;

async function api(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, {
    ...options,
    headers: { ...headers, ...(options.headers || {}) },
  });
  const text = await response.text();
  let body = null;
  try { body = text ? JSON.parse(text) : null; } catch { body = { raw: text.slice(0, 300) }; }
  if (!response.ok) throw new Error(`${options.method || 'GET'} ${path} -> ${response.status}: ${JSON.stringify(body).slice(0, 500)}`);
  return { status: response.status, body };
}

async function getLesson(id) {
  return bodyData((await api(`/admin-cms/lessons/${id}`)).body);
}

async function findMaterial(hash) {
  const result = bodyData((await api(`/admin-cms/materials?search=${encodeURIComponent(hash)}&limit=100`)).body);
  const rows = Array.isArray(result) ? result : result?.data || [];
  return rows.find(row => String(row.description || '').includes(`sha256=${hash}`));
}

async function verifyPrivateObject(key, expectedHash, expectedBytes) {
  const signed = bodyData((await api(`/s3/signedurl?key=${encodeURIComponent(key)}`)).body);
  const url = signed?.signedUrl || signed?.url;
  if (!url) throw new Error(`Signed read URL missing for ${key}`);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Private read-back failed for ${key}: ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const actualHash = sha256(bytes);
  if (bytes.length !== expectedBytes || actualHash !== expectedHash) {
    throw new Error(`Private read-back mismatch for ${key}: bytes=${bytes.length}, sha256=${actualHash}`);
  }
  return { status: response.status, bytes: bytes.length, sha256: actualHash };
}

const source = resolve(sourceDir);
const manifest = JSON.parse(readFileSync(resolve(source, '下载包校验清单.json'), 'utf8'));
const catalog = JSON.parse(readFileSync(resolve(courseRoot, 'OPC_SKILLS_CATALOG.json'), 'utf8'));
const packs = new Map(catalog.packs.map(pack => [pack.key, pack]));
const files = new Map();
for (const item of manifest) {
  for (const [key] of targets) {
    if (item.file.startsWith(`OPC ${key} - `)) files.set(key, { ...item, path: resolve(source, item.file) });
  }
}

for (const [key, lessonId, title] of targets) {
  const file = files.get(key);
  if (!file || !statSync(file.path).size) throw new Error(`Verified ZIP missing for ${key}`);
  const data = readFileSync(file.path);
  if (sha256(data) !== file.sha256) throw new Error(`Local hash mismatch for ${key}`);
  const lesson = await getLesson(lessonId);
  if ((lesson.title || lesson.name) !== title) throw new Error(`Lesson title mismatch for ${key}: ${lesson.title || lesson.name}`);
}

const receipt = {
  schema_version: 1,
  published_at: new Date().toISOString(),
  environment: 'production',
  api_base: apiBase,
  source_directory: source,
  curriculum_sha256: catalog.curriculum.sha256,
  prior_failed_attempt: {
    pack: 'W0',
    stage: 'material_create',
    result: 'S3 object verified but Material creation rejected because the first script used an invalid type enum',
    object_key: 'unavailable',
  },
  results: [],
};
const receiptPath = resolve(courseRoot, '.skill-releases', 'opc-current-curriculum-publish-2026-09-20.json');

for (const [key, lessonId, lessonTitle] of targets) {
  const file = files.get(key);
  const pack = packs.get(key);
  const bytes = readFileSync(file.path);
  const hash = sha256(bytes);
  let material = await findMaterial(hash);
  let upload = null;
  let created = false;

  if (!material) {
    const presignPath = `/s3/presignedurl?filename=${encodeURIComponent(basename(file.path))}&filetype=${encodeURIComponent('application/zip')}&category=materials`;
    const presignResponse = await api(presignPath);
    const presign = bodyData(presignResponse.body);
    if (!presign?.url || !presign?.key) throw new Error(`Presign response incomplete for ${key}`);

    const put = await fetch(presign.url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/zip', 'Content-Length': String(bytes.length) },
      body: bytes,
    });
    if (!put.ok) {
      const recovered = await verifyPrivateObject(presign.key, hash, bytes.length).catch(() => null);
      if (!recovered) throw new Error(`Presigned PUT failed for ${key}: ${put.status}`);
    }
    const readBack = await verifyPrivateObject(presign.key, hash, bytes.length);
    upload = { key: presign.key, presign_status: presignResponse.status, put_status: put.status, read_back: readBack };

    const description = `OPC current curriculum student pack; pack=${key}; lessons=${pack.basis}; skills=${pack.skills.join(',')}; sha256=${hash}`;
    const payload = {
      name: `OPC ${key} · ${pack.title} · Skills 学生包 · ${hash.slice(0, 12)}`,
      description,
      key: presign.key,
      filetype: 'application/zip',
      isLink: false,
      lesson: lessonId,
      type: 'related',
    };
    try {
      material = bodyData((await api('/admin-cms/materials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })).body);
    } catch (error) {
      material = await findMaterial(hash);
      if (!material) throw error;
    }
    created = true;
  } else {
    const materialLessonId = typeof material.lesson === 'object' ? material.lesson?._id : material.lesson;
    if (materialLessonId && materialLessonId !== lessonId) throw new Error(`Existing ${key} material is bound to another lesson`);
    upload = { key: material.key, reused: true, read_back: await verifyPrivateObject(material.key, hash, statSync(file.path).size) };
  }

  const materialId = String(material._id || material.id);
  let lesson = await getLesson(lessonId);
  const existingIds = (lesson.material || lesson.materials || []).map(value => String(typeof value === 'object' ? value._id || value.id : value));
  if (!existingIds.includes(materialId)) {
    const desired = [...existingIds, materialId];
    try {
      await api(`/admin-cms/lessons/${lessonId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ materialIds: desired }),
      });
    } catch (error) {
      lesson = await getLesson(lessonId);
      const recovered = (lesson.material || lesson.materials || []).some(value => String(typeof value === 'object' ? value._id || value.id : value) === materialId);
      if (!recovered) throw error;
    }
  }

  const materialRead = bodyData((await api(`/admin-cms/materials/${materialId}`)).body);
  lesson = await getLesson(lessonId);
  const finalIds = (lesson.material || lesson.materials || []).map(value => String(typeof value === 'object' ? value._id || value.id : value));
  const boundLesson = typeof materialRead.lesson === 'object' ? materialRead.lesson?._id : materialRead.lesson;
  if (boundLesson !== lessonId || !finalIds.includes(materialId) || materialRead.key !== upload.key) {
    throw new Error(`Production relation read-back failed for ${key}`);
  }

  receipt.results.push({
    pack: key,
    title: pack.title,
    local_file: file.file,
    local_bytes: bytes.length,
    sha256: hash,
    lesson_id: lessonId,
    lesson_title: lessonTitle,
    material_id: materialId,
    object_key: materialRead.key,
    created,
    upload,
    material_read_back: 'passed',
    lesson_binding_read_back: 'passed',
  });
  writeFileSync(receiptPath, JSON.stringify(receipt, null, 2) + '\n');
  console.log(JSON.stringify({ pack: key, materialId, lessonId, created, verified: true }));
}

console.log(JSON.stringify({ receipt: receiptPath, published: receipt.results.length, verified: true }));
