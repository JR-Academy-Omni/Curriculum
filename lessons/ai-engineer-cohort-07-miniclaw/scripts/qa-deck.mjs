import { createRequire } from 'node:module';
import fs from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('/Users/lightman/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const baseUrl = process.env.DECK_URL ?? 'http://127.0.0.1:5197/';
const outDir = path.resolve('out/qa');
const viewports = [{name:'1366x768',width:1366,height:768},{name:'1440x900',width:1440,height:900},{name:'1920x1080',width:1920,height:1080}];
const keySlides = new Set([1,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,22,23,24,25,27,28,29,30,31,32,33,34,35,36,37,39,40,42,45,46,47,48]);
await fs.mkdir(outDir,{recursive:true});
const browser=await chromium.launch({headless:true});
const results=[];
for(const viewport of viewports){
	const page=await browser.newPage({viewport});
	for(let slide=1;slide<=48;slide+=1){
		await page.goto(`${baseUrl}?page=${slide}`,{waitUntil:'networkidle'});
		await page.waitForTimeout(550);
		const audit=await page.evaluate(()=>{
			const root=document.documentElement;
			const overflowNodes=[...document.querySelectorAll('h1,h2,h3,p,pre,div,span,a')].filter((node)=>{
				const el=node; const style=getComputedStyle(el);
				if(style.display==='none'||style.visibility==='hidden'||el.getAttribute('aria-hidden')==='true'||el.children.length>0)return false;
				return el.scrollWidth>el.clientWidth+8||el.scrollHeight>el.clientHeight+8;
			}).slice(0,12).map((el)=>({text:el.textContent?.trim().slice(0,80),sw:el.scrollWidth,cw:el.clientWidth,sh:el.scrollHeight,ch:el.clientHeight}));
			return{documentOverflow:root.scrollWidth>root.clientWidth||root.scrollHeight>root.clientHeight,overflowNodes};
		});
		results.push({viewport:viewport.name,slide,...audit});
		if((viewport.name==='1366x768'&&keySlides.has(slide))||(viewport.name==='1920x1080'&&keySlides.has(slide)))await page.screenshot({path:path.join(outDir,`${viewport.name}-slide-${String(slide).padStart(2,'0')}.png`)});
	}
	await page.close();
}
await browser.close();
await fs.writeFile(path.join(outDir,'qa-results.json'),`${JSON.stringify(results,null,2)}\n`);
const failures=results.filter((item)=>item.documentOverflow||item.overflowNodes.length);
console.log(JSON.stringify({checked:results.length,failures:failures.length,details:failures.slice(0,20)},null,2));
if(failures.length)process.exitCode=1;
