import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BOOTCAMP = path.resolve(HERE, '..');
const ROOT = path.resolve(BOOTCAMP, '..', '..');
const HTML = path.join(BOOTCAMP, 'public', 'posters', 'cohort-07-linkedin-english.html');
const PDF = path.join(ROOT, 'output', 'pdf', 'JR-Academy-AI-Engineer-Cohort-07-LinkedIn-English.pdf');
const DOWNLOAD = path.join(process.env.HOME, 'Downloads', 'JR Academy - AI Engineer Bootcamp Cohort 7 - LinkedIn.pdf');
const CHROME = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome','/Applications/Chromium.app/Contents/MacOS/Chromium'];

async function loadPlaywright(){
  try{return await import('playwright')}catch(error){
    if(!process.env.PLAYWRIGHT_MODULE_PATH) throw error;
    return import(pathToFileURL(process.env.PLAYWRIGHT_MODULE_PATH).href);
  }
}

await fs.access(HTML);
const { chromium } = await loadPlaywright();
let executablePath;
for(const candidate of CHROME){try{await fs.access(candidate);executablePath=candidate;break}catch{}}
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});
try{
  await page.goto(pathToFileURL(HTML).href,{waitUntil:'load'});
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(img=>img.complete?Promise.resolve():new Promise((resolve,reject)=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',reject,{once:true})}))) });
  const audit = await page.evaluate(()=>{
    const pages=[...document.querySelectorAll('.page')];
    return {count:pages.length,overflow:pages.map((el,index)=>({page:index+1,x:el.scrollWidth-el.clientWidth,y:el.scrollHeight-el.clientHeight})).filter(v=>v.x>1.5||v.y>1.5)};
  });
  if(audit.count!==8||audit.overflow.length) throw new Error(`Layout audit failed: ${JSON.stringify(audit)}`);
  await fs.mkdir(path.dirname(PDF),{recursive:true});
  await page.emulateMedia({media:'print'});
  await page.pdf({path:PDF,printBackground:true,preferCSSPageSize:true,margin:{top:0,right:0,bottom:0,left:0}});
  await fs.copyFile(PDF,DOWNLOAD);
  console.log(`HTML audit: ${audit.count} pages, 0 overflow`);
  console.log(PDF);
  console.log(DOWNLOAD);
}finally{await page.close();await browser.close()}

