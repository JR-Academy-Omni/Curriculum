import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { enforceDirectory, enforceNoindex } from './enforce-curriculum-noindex.mjs';

test('overrides conflicting tags, preserves title, scripts and full lesson body; idempotent', () => {
  const body = '<body><pre>&lt;meta name="robots" content="index"&gt;</pre><div id="root">完整课件</div></body>';
  const script = '<script>const sample = \'<meta name="robots" content="index">\';</script>';
  const result = enforceNoindex('<html><HEAD><title>Course</title><meta content="index,follow" name=robots><META NAME=\'GOOGLEBOT\' CONTENT=\'all\'>' + script + '</HEAD>' + body + '</html>');
  assert.ok(result.endsWith(body + '</html>'));
  assert.ok(result.includes(script));
  assert.ok(result.includes('<title>Course</title>'));
  assert.ok(result.includes('<meta name="robots" content="noindex, nofollow">'));
  assert.ok(result.includes('<meta name="googlebot" content="noindex, nofollow">'));
  assert.ok(!result.includes('NAME=\'GOOGLEBOT\''));
  assert.equal(enforceNoindex(result), result);
});

test('processes nested real files, rejects empty output and malformed documents', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'curriculum-noindex-'));
  try {
    await assert.rejects(enforceDirectory(dir), /No Curriculum HTML/);
    await writeFile(join(dir, 'index.html'), '<html><head></head><body>Course</body></html>');
    assert.equal(await enforceDirectory(dir), 1);
    assert.ok((await readFile(join(dir, 'index.html'), 'utf8')).includes('noindex, nofollow'));
    assert.throws(() => enforceNoindex('<body>No head</body>'), /complete head/);
  } finally {
    await rm(dir, { recursive: true });
  }
});
