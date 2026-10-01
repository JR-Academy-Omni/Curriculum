import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {chromium} from '/Users/shijie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=path.resolve(import.meta.dirname,'..');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({offline:true,viewport:{width:1600,height:900}});
const page=await context.newPage();
const errors=[];const network=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url());});
const base=pathToFileURL(path.join(root,'output/melbourne-resume-career-2026-10-02.html')).href;
const reports=[];
for(const n of [1,3,6,7,8,9,18]){
 await page.goto(base+'?page='+n);await page.waitForTimeout(550);
 reports.push(await page.evaluate(()=>({id:document.querySelector('[data-slide-id]')?.getAttribute('data-slide-id'),badImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).length,overflow:[...document.querySelectorAll('[data-text]')].filter(e=>e.offsetHeight>0&&e.scrollHeight>e.clientHeight+3).map(e=>e.textContent)})));
}
await page.goto(base+'?page=1');await page.waitForTimeout(550);await page.keyboard.press('ArrowRight');await page.waitForTimeout(650);
const navigation=await page.evaluate(()=>new URL(location.href).searchParams.get('page'));
if(errors.length||network.length||navigation!=='2'||reports.some(r=>!r.id||r.badImages||r.overflow.length))throw new Error(JSON.stringify({errors,network,navigation,reports}));
await fs.writeFile(path.join(root,'.build/web/offline-review.json'),JSON.stringify({errors,network,navigation,reports},null,2));
await browser.close();console.log('Offline HTML: no network requests, all checked images/text present, keyboard navigation passed.');
