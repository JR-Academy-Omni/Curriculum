import { chromium } from 'playwright';
import assert from 'node:assert/strict';
const url=process.env.DECK_URL || 'http://127.0.0.1:5196/';
const browser=await chromium.launch({headless:true});
try {
 const context=await browser.newContext({viewport:{width:1600,height:900},reducedMotion:'reduce'});
 const remote=[];
 await context.route('**/*',route=>{const requestUrl=new URL(route.request().url());if(requestUrl.origin!==new URL(url).origin){remote.push(requestUrl.href);return route.abort();}return route.continue();});
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(url,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 assert.equal(await page.locator('[data-deck-total]').getAttribute('data-deck-total'),'2');
 await page.keyboard.press('n');await page.locator('.deck-notes').waitFor();
 assert.ok((await page.locator('.deck-notes').textContent()).includes('学习目标'));
 await page.keyboard.press('Control+n');assert.equal(await page.locator('.deck-notes').count(),1);
 await page.keyboard.press('n');assert.equal(await page.locator('.deck-notes').count(),0);
 await page.keyboard.press('ArrowRight');await page.waitForURL('**/*page=2');
 await page.reload({waitUntil:'networkidle'});assert.ok(page.url().includes('page=2'));
 await page.keyboard.press('p');await page.locator('.deck-print-page').first().waitFor();
 assert.equal(await page.locator('.deck-print-page').count(),2);
 await page.emulateMedia({media:'print'});
 assert.equal(await page.locator('.deck-toolbar').isVisible(),false);
 assert.equal(await page.locator('.deck-print-page').first().evaluate(e=>e.getBoundingClientRect().width),1600);
 assert.ok(await page.locator('.deck-print-page').first().isVisible());
 await page.emulateMedia({media:'screen'});await page.getByRole('button',{name:'返回课件'}).click();
 assert.equal(await page.locator('[data-slide-canvas]').isVisible(),true);
 assert.ok(await page.evaluate(()=>document.fonts.check('16px "Noto Sans SC Variable"','课程')));
 assert.deepEqual(remote,[]);assert.deepEqual(errors,[]);
 console.log('PASS: notes, shortcuts, navigation/reload, all-page print, local fonts with external network blocked, reduced-motion context');
} finally {await browser.close();}
