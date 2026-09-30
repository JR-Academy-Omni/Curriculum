import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const dist=path.join(root,'dist');
let html=await fs.readFile(path.join(dist,'index.html'),'utf8');
const script=html.match(/<script[^>]*src="([^"]+)"[^>]*><\/script>/);
if(!script)throw new Error('Built script not found');
const bundle=path.join(dist,'assets',path.basename(script[1]));
let js=await fs.readFile(bundle,'utf8');
const deck=JSON.parse(await fs.readFile(path.join(root,'src/data/deck.json'),'utf8'));
const assets={};
const types={png:'image/png',jpg:'image/jpeg',svg:'image/svg+xml'};
for(const src of new Set(deck.slides.flatMap(s=>s.elements.filter(e=>e.type==='image').map(e=>e.src)))){
 const bytes=await fs.readFile(path.join(root,'public',src));
 assets[src]=`data:${types[src.split('.').pop()]};base64,${bytes.toString('base64')}`;
}
const svg=await fs.readFile(path.join(root,'public/logo-zh-full.svg'));
const logoURI=`data:image/svg+xml;base64,${svg.toString('base64')}`;
const logoPattern=/[a-zA-Z_$][\w$]*\((["'`])logo-zh-full\.svg\1\)/g;
if([...js.matchAll(logoPattern)].length!==1)throw new Error('Unexpected engine logo bundle expression');
js=js.replace(logoPattern,JSON.stringify(logoURI));
html=html.replace(script[0],()=>`<script>window.__DECK_ASSETS__=${JSON.stringify(assets)};</script><script type="module">${js.replaceAll('</script','<\\/script')}</script>`);
html=html.replace(/<link[^>]*rel="modulepreload"[^>]*>/g,'');
for(const match of [...html.matchAll(/url\(["']?([^"')]*fonts\/([^"')]+))["']?\)/g)]){
 const bytes=await fs.readFile(path.join(root,'public/fonts',match[2]));
 const ext=path.extname(match[2]).slice(1);
 html=html.replaceAll(match[0],`url("data:font/${ext};base64,${bytes.toString('base64')}")`);
}
await fs.mkdir(path.join(root,'output'),{recursive:true});
await fs.writeFile(path.join(root,'output','melbourne-resume-career-2026-10-02.html'),html);
console.log('Created self-contained offline HTML with original portraits and logos.');
