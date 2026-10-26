import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const checker = fileURLToPath(new URL('./check-no-analytics.mjs', import.meta.url));

test('rejects tracking while allowing escaped analytics teaching examples', async () => {
  const root = await mkdtemp(join(tmpdir(), 'curriculum-analytics-'));
  try {
    const run = () => spawnSync(process.execPath, [checker, root], { encoding: 'utf8' });
    assert.equal(run().status, 1, 'empty output must not pass');
    for (const html of [
      '<html><head></head><body>Lesson</body></html>',
      '<pre>&lt;script src="https://www.googletagmanager.com/gtag/js?id=G-DEMO"&gt;</pre>',
      '<script type="module" src="./assets/lesson.js"></script>'
    ]) {
      await writeFile(join(root, 'lesson.html'), html);
      assert.equal(run().status, 0, html);
    }
    for (const html of [
      '<script async src="https://www.googletagmanager.com/gtag/js?id=G-DEMO"></script>',
      '<script src="//www.google-analytics.com/analytics.js"></script>',
      '<script data-jr-ga4="curriculum">window.dataLayer=[];</script>',
      '<script>gtag("config", "G-DEMO");</script>',
      '<script>ga("create", "UA-DEMO");</script>',
      '<script>var url="https://www.googletagmanager.com/gtm.js?id=GTM-DEMO";</script>'
    ]) {
      await writeFile(join(root, 'lesson.html'), html);
      assert.equal(run().status, 1, html);
    }
  } finally {
    await rm(root, { recursive: true });
  }
});
