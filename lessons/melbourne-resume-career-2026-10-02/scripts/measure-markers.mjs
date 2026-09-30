import fs from 'node:fs/promises';
import path from 'node:path';
import {chromium} from '/Users/shijie/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=path.resolve(import.meta.dirname,'..');
const p=path.join(root,'src/data/deck.json');
const deck=JSON.parse(await fs.readFile(p,'utf8'));
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
try {
 const page=await browser.newPage();
 await page.goto('http://127.0.0.1:5198/?page=1',{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 const markers=await page.evaluate(slides=>{
  const ctx=document.createElement('canvas').getContext('2d');
  return slides.map(s=>s.elements.map((e,i)=>{
   const t=s.elements[i+1];
   if(e.role!=='marker'||e.w<100||t?.type!=='text'||t.fontSize<40)return null;
   ctx.font=`${t.fontWeight||400} ${t.fontSize}px "Bricolage Grotesque","Noto Sans SC",sans-serif`;
   ctx.letterSpacing=`${t.letterSpacing||0}px`;
   return Math.ceil(Math.min(t.w,ctx.measureText(t.text.split('\n')[0]).width+6));
  }));
 },deck.slides);
 deck.slides.forEach((s,i)=>s.elements.forEach((e,j)=>{if(markers[i][j])e.w=markers[i][j];}));
 await fs.writeFile(p,JSON.stringify(deck,null,2));
 console.log('Title markers measured against local font.');
}finally{await browser.close();}
