import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
const args=process.argv.slice(2).filter(a=>a!=='--');
const value=(name,fallback)=>{const i=args.indexOf(name);return i<0?fallback:args[i+1];};
const url=value('--url',process.env.DECK_URL);
if(!url)throw new Error('Pass --url for a locally served HTML deck');
const out=path.resolve(value('--output-dir','out/qa'));
await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true});
const results=[];
try {
 for(const [width,height] of [[1366,768],[1440,900],[1920,1080]]) {
  const context=await browser.newContext({viewport:{width,height},reducedMotion:'reduce'});
  const page=await context.newPage();
  const problems=[];
  page.on('pageerror',e=>problems.push(e.message));
  page.on('response',r=>{if(r.status()>=400)problems.push(`HTTP ${r.status()} ${r.url()}`);});
  page.on('requestfailed',r=>problems.push(`${r.failure()?.errorText} ${r.url()}`));
  await page.goto(url,{waitUntil:'networkidle'});
  const total=Number(await page.locator('[data-deck-total]').getAttribute('data-deck-total'));
  if(!Number.isInteger(total)||total<1)throw new Error('Deck must expose data-deck-total from the shared runtime');
  for(let slide=1;slide<=total;slide++){
   const dest=new URL(url);dest.searchParams.set('page',String(slide));
   await page.goto(dest.href,{waitUntil:'networkidle'});
   await page.evaluate(()=>document.fonts.ready);
   const audit=await page.locator('[data-slide-content]').evaluate(root=>{
    const canvas=root.closest('[data-slide-canvas]').getBoundingClientRect();
    const nodes=[...root.querySelectorAll('h1,h2,h3,p,span,div')].filter(e=>!e.children.length&&e.textContent.trim()&&!e.closest('[aria-hidden="true"]'));
    return nodes.filter(e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();if(s.display==='none'||s.visibility==='hidden')return false;return r.left<canvas.left-2||r.top<canvas.top-2||r.right>canvas.right+2||r.bottom>canvas.bottom+2||(/hidden|clip|auto|scroll/.test(s.overflowX)&&e.clientWidth>0&&e.scrollWidth>e.clientWidth+2)||(/hidden|clip|auto|scroll/.test(s.overflowY)&&e.clientHeight>0&&e.scrollHeight>e.clientHeight+2);}).map(e=>e.textContent.slice(0,100));
   });
   await page.screenshot({path:path.join(out,`${width}x${height}-page-${slide}.jpg`)});
   results.push({width,height,slide,overflow:audit,errors:[...new Set(problems)]});problems.length=0;
  }
  await context.close();
 }
 await fs.writeFile(path.join(out,'report.json'),JSON.stringify(results,null,2));
 const failed=results.filter(x=>x.overflow.length||x.errors.length);
 console.log(`${results.length} page/viewport checks; ${failed.length} failures. ${out}`);
 if(failed.length){console.log(JSON.stringify(failed,null,2));process.exitCode=1;}
} finally {await browser.close();}
