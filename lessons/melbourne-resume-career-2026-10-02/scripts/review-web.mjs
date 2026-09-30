import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '/Users/shijie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=path.resolve(import.meta.dirname,'..');
const dir=path.join(root,'.build/web',process.env.REVIEW_LABEL||'');
await fs.mkdir(dir,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage({viewport:{width:1600,height:900},deviceScaleFactor:1});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const reports=[];
const selected=process.argv[2]?process.argv[2].split(',').map(Number):Array.from({length:JSON.parse(await fs.readFile(path.join(root,'src/data/deck.json'),'utf8')).slides.length},(_,i)=>i+1);
for(const n of selected){
 await page.goto(`http://127.0.0.1:5198/?page=${n}`,{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 await page.waitForTimeout(650);
 const report=await page.evaluate(()=>{
  const elements=[...document.querySelectorAll('[data-element]')];
  return {title:document.querySelector('[data-slide-id]')?.getAttribute('data-slide-id'),overflow:elements.filter(e=>e.tagName==='DIV'&&e.textContent&&((e.scrollHeight-e.clientHeight)>3||(e.scrollWidth-e.clientWidth)>3)).map(e=>({text:e.textContent,scroll:[e.scrollWidth,e.scrollHeight],box:[e.clientWidth,e.clientHeight]})),badImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)};
 });reports.push({page:n,...report});
 await page.screenshot({path:path.join(dir,`slide-${String(n).padStart(2,'0')}.png`)});
}
await page.goto('http://127.0.0.1:5198/?page=1',{waitUntil:'networkidle'});
await page.keyboard.press('ArrowRight');await page.waitForTimeout(650);
const keyboard=await page.url();
await page.setViewportSize({width:960,height:700});await page.waitForTimeout(250);
await page.screenshot({path:path.join(dir,'responsive.png')});
await page.setViewportSize({width:1920,height:1080});await page.waitForTimeout(150);await page.keyboard.press('f');await page.waitForTimeout(200);const fullscreen=await page.evaluate(()=>!!document.fullscreenElement);if(fullscreen)await page.keyboard.press('f');
await page.setViewportSize({width:1600,height:900});
await page.goto('http://127.0.0.1:5198/?print=1',{waitUntil:'networkidle'});
await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(700);
await fs.mkdir(path.join(root,'output'),{recursive:true});
await page.pdf({path:path.join(root,'output',process.env.REVIEW_PDF_FILENAME||'melbourne-resume-career-2026-10-02.pdf'),width:'1600px',height:'900px',printBackground:true,preferCSSPageSize:true,margin:{top:0,bottom:0,left:0,right:0}});
await fs.writeFile(path.join(dir,'review.json'),JSON.stringify({reports,errors,keyboard,fullscreen},null,2));
console.log(JSON.stringify({pages:reports.length,issues:reports.filter(r=>r.overflow.length||r.badImages.length),errors,keyboard,fullscreen}));
await browser.close();
