import {useState, type ReactNode} from 'react';
import {motion, useReducedMotion} from 'framer-motion';
import {Slide, assetPath} from './ui';
import {colors, fonts} from '../styles/theme';
import {courseSources} from '../data/course-sources';
import course from '../data/course-v2.json';
import CourseTerms from './CourseTerms';
export interface CoursePage {id:number;part:number;kind:string;title:string;sub:string;items:string[];details?:string[];rows?:string[][];images?:string[];credit?:string;code?:string;source:string;link?:string;linkLabel?:string;answer?:string;example?:string;exampleLabel?:string;domainNote?:string;notes:string;}
const pages=course as CoursePage[];
const local=(s:string)=>s.startsWith('http')?s:assetPath(s);
function Link({href,children}:{href:string;children:ReactNode}){return <a className="course-link" href={local(href)} target="_blank" rel="noreferrer">{children} ↗</a>}
function Bullets({items}:{items:string[]}){return <ol className="course-points">{items.map((s,i)=><li key={s}><span>{String(i+1).padStart(2,'0')}</span><div>{s}</div></li>)}</ol>}
function Code({text}:{text:string}){return <pre className="course-code"><code>{text}</code></pre>}
function ImageObject({id}:{id:string}){const src=id.startsWith('cases/')?id:`figures/${id}.png`;return <a className="course-picture" data-case-image={id} href={assetPath(src)} target="_blank" rel="noreferrer" aria-label="打开案例原图"><img src={assetPath(src)} alt={id.split('/').pop()?.replace(/[-.]/g,' ')||'案例局部'}/><span>查看原图 ↗</span></a>}
function Flow({s}:{s:CoursePage}){const reduce=useReducedMotion();return <div className={`course-flow count-${s.items.length}`}>{s.items.map((x,i)=><motion.div className="course-node" key={x} initial={reduce?false:{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:i*.13,duration:.25}}><b>{String(i+1).padStart(2,'0')}</b><h3>{x}</h3>{s.details?.[i]&&<p>{s.details[i]}</p>}{i<s.items.length-1&&<span className="course-arrow">→</span>}</motion.div>)}</div>}
function Exercise({s}:{s:CoursePage}){const [show,setShow]=useState(false);return <div className="course-workshop"><section><span className="course-kicker">YOUR TASK</span><p>{s.items[0]}</p><button aria-expanded={show} onClick={()=>setShow(!show)}>{show?'Reset exercise':'Show worked decision'}</button></section><section className="course-decision"><span className="course-kicker">WORKED DECISION</span><p className={show?'':'course-screen-hidden'}>{s.answer}</p>{!show&&<p className="course-screen-only">State your decision and evidence before opening the reference.</p>}<p className="course-print-only">{s.answer}</p></section></div>}
function Canonical(){
 const [different,setDifferent]=useState(false);
 const canonical='https://example.com/products/coffee-a';
 return <div className="canonical-demo">
  <div className="course-tabs"><button aria-pressed={!different} onClick={()=>setDifferent(false)}>正确：同一商品，不同参数</button><button aria-pressed={different} onClick={()=>setDifferent(true)}>错误：指向另一件商品</button></div>
  <div className="course-canonical">
   <article><span>用户访问的地址 · 教学示例</span><h3>A 款咖啡机</h3><code>/products/coffee-a?utm_source=email</code><p className="canonical-detail">utm_source 只记录广告来源，商品内容不变</p></article>
   <div><small>rel="canonical"</small><b>{different?'✕':'→'}</b><strong>{different?'不是重复内容':'指定代表 URL'}</strong></div>
   <article className={different?'bad':'good'}><span>{different?'错误的目标页面':'声明的首选地址'}</span><h3>{different?'B 款咖啡机':'同一台 A 款咖啡机'}</h3><code>{different?'/products/coffee-b':'/products/coffee-a'}</code><p className="canonical-detail">{different?'另一件商品，不能当作 A 的代表':'去掉跟踪参数，仍是相同商品内容'}</p></article>
  </div>
  {different?<div className="canonical-message">A 与 B 是不同商品：各自保留对应的 Canonical，不把它们合并到一页。</div>:<pre className="course-code canonical-code"><code>{'<link rel="canonical"\n      href="'+canonical+'" />'}</code></pre>}
  <p className="course-caption">{different?'先比较内容是否相同；不能因为属于同一网站，就都指向首页或另一个商品。':'把这段代码放在 HTML 的 <head> 中，告诉搜索引擎：这些重复地址以此 URL 为代表。'}</p>
  <div className="course-print-only">正确：同一商品的跟踪参数版本可指向同一首选URL。错误：不同商品不能随意互指Canonical。Canonical不让浏览器跳转；Google可能选择不同版本。</div>
 </div>;
}
function Render(){const [mode,setMode]=useState(1);const labels=['CSR','SSR','SSG'];const stages=[['请求页面','HTML空壳','取得JS与数据','浏览器生成正文'],['请求页面','服务端生成正文','带正文HTML到达','补充交互'],['构建时生成正文','用户请求','静态HTML到达','补充交互']];return <div><div className="course-tabs">{labels.map((v,i)=><button key={v} aria-pressed={mode===i} onClick={()=>setMode(i)}>{v}</button>)}<button onClick={()=>setMode(1)}>恢复SSR</button></div><div className="course-render">{stages[mode].map((x,i)=><div key={`${mode}-${i}`}><div className="course-device"><span>{i===0&&mode===2?'BUILD':i===1?'SERVER':'BROWSER'}</span>{i>1||mode===2||mode===1&&i===1?<><i/><i/><i/></>:<b>…</b>}</div><h3>{x}</h3>{i<3&&<strong>→</strong>}</div>)}</div><div className="course-print-only">CSR：浏览器运行JavaScript生成正文；SSR：服务器收到请求后生成HTML；SSG：构建时生成静态HTML。</div></div>}
function Vitals(){const metrics=[
 {name:'LCP',value:'≤ 2.5s',full:'Largest Contentful Paint',meaning:'加载：最大内容多久出现',example:'例如：文章主图或大段文字何时显示。',color:colors.blue},
 {name:'INP',value:'≤ 200ms',full:'Interaction to Next Paint',meaning:'响应：操作后多久更新画面',example:'例如：点击菜单后，多久看到展开。',color:colors.yellow},
 {name:'CLS',value:'≤ 0.1',full:'Cumulative Layout Shift',meaning:'稳定：页面意外移动多少',example:'例如：图片加载，把正在读的文字挤走。',color:colors.green},
];return <div className="course-vitals">{metrics.map(m=><article key={m.name} style={{borderTop:`12px solid ${m.color}`}}><span>{m.name}</span><strong>{m.value}</strong><h3>{m.full}</h3><p>{m.meaning}</p><p style={{fontSize:21,lineHeight:1.5}}>{m.example}</p></article>)}<p className="course-caption">良好阈值按 p75（第75百分位）评估：至少75%的访问达到对应标准；手机与桌面分别统计。CLS 是无单位分数。</p></div>}
function Shift({s}:{s:CoursePage}){const [moved,setMoved]=useState(false);return <div className="course-shift"><div className="course-old-pair">{s.images?.map(id=><ImageObject id={id} key={id}/>)}</div><section><div className="course-tabs"><button onClick={()=>setMoved(!moved)}>{moved?'重置位置':'插入未预留内容'}</button></div><div className="course-shift-demo"><div className={'course-ad '+(moved?'shown':'')}>新内容插入 · 示意</div><div className="course-reading-target">读者正在阅读的内容<br/><strong>{moved?'位置向下移动':'当前位置'}</strong></div></div><p className="course-caption">布局位移示例</p><div className="course-print-only">未预留的内容插入，会使阅读目标下移。</div></section></div>}
function Personal({s}:{s:CoursePage}){return <div className="course-personal"><div className="course-personal-core"><span>真实身份</span><strong>可打开的成果</strong><span>与持续的主题内容</span></div><div className="course-personal-pages">{s.items.map((x,i)=><div key={x}><b>0{i+1}</b><h3>{x.split('：')[0]}</h3><p>{x.split('：')[1]}</p></div>)}</div>{s.domainNote&&<aside className="course-domain-note">{s.domainNote}</aside>}</div>}
function Eeat({s}:{s:CoursePage}){return <div className="course-eeat"><div className="course-trust"><span>E-E-A-T</span><strong>TRUST</strong><p>真实 · 准确<br/>责任可追查</p></div><div className="course-eeat-list">{s.items.map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x.split(' · ')[0]}</h3><p>{x.split(' · ')[1]}</p></article>)}</div></div>}
function Architecture(){return <div className="course-architecture"><div className="course-architecture-line">{['DNS','CDN','Load balancer','App server 应用','Database 数据库'].map((x,i)=><div key={x}><svg viewBox="0 0 120 90" aria-hidden="true"><rect x="14" y="10" width="92" height="65" rx="12" fill={i===1?colors.blue:colors.dark}/><path d="M30 30H90M30 46H90M30 62H70" stroke="white" strokeWidth="5"/></svg><h3>{x}</h3>{i<4&&<b>→</b>}</div>)}</div><div className="course-architecture-notes"><p>找不到地址 → DNS</p><p>拿到旧内容 → 缓存与版本</p><p>服务不稳定 → 源站与依赖</p></div></div>}
function Handbag({s}:{s:CoursePage}){return <div className="course-handbag"><div className="course-handbag-route"><article><span>01 · 顾客困惑</span><ImageObject id="handbag-customers"/><h3>怎样护理这只手袋</h3></article><b>→</b><article><span>02 · 完整方法</span><ImageObject id="handbag-care-products"/><h3>材料 → 步骤 → 限制</h3></article><b>→</b><article><span>03 · 被相关读者发现</span><div className="course-search-object"><strong>手袋养护问题</strong><p>进入对应方法，<br/>完成当前任务。</p></div></article></div></div>}
function ChartCase({s}:{s:CoursePage}){const [mode,setMode]=useState(0);return <div className="course-case"><section className="course-chart-object"><div className="course-tabs"><button aria-pressed={mode===0} onClick={()=>setMode(0)}>趋势图</button><button aria-pressed={mode===1} onClick={()=>setMode(1)}>问题明细</button></div><ImageObject id={mode===0?'indexing-trend':'indexing-details'}/></section><aside><Bullets items={s.items}/></aside></div>}
function Sources(){return <div className="course-sources">{['starter','helpful','javascript','canonical','schema','profile','vitals','aiGoogle','aiControl','aiReport','bots','mdn','simon','simonArticle','updates'].map(key=><Link href={courseSources[key].url} key={key}>{courseSources[key].label}</Link>)}</div>}
export function CourseSlide({page}:{page:number}){const s=pages.find(s=>s.id===page)!;const dark=['cover','chapter','closing'].includes(s.kind);let body:ReactNode;
if(dark)body=<div className="course-hero"><span className="course-kicker">{s.kind==='chapter'?`PART ${String(s.part).padStart(2,'0')}`:'LIGHTMAN / SEO × GEO'}</span><h1>{s.title}</h1>{s.sub&&<p>{s.sub}</p>}<div className="course-hero-items">{s.items.map((x,i)=><div key={x}><b>{String(i+1).padStart(2,'0')}</b>{x}</div>)}</div>{s.link&&<Link href={s.link}>{s.linkLabel}</Link>}<div className="course-hero-path">需求 → 内容 → 技术 → 信任 → AI → GEO → 测量</div></div>;
else if(s.kind==='exercise')body=<Exercise s={s}/>;
else if(s.kind==='flow')body=<><Flow s={s}/>{s.code&&<Code text={s.code}/>}</>;
else if(s.kind==='table')body=<><table className="course-table"><thead><tr>{s.rows?.[0].map((c,i)=><th key={i}>{c}</th>)}</tr></thead><tbody>{s.rows?.slice(1).map((row,i)=><tr key={i}>{row.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table>{s.example&&<section className="course-written-example"><b>{s.exampleLabel}</b><p>{s.example}</p></section>}</>;
else if(s.kind==='case'&&s.images?.[0]==='indexing-trend')body=<ChartCase s={s}/>;
else if(s.kind==='case'&&s.images?.[0]==='handbag-customers')body=<Handbag s={s}/>;
else if(s.kind==='case'||s.kind==='photos')body=<div className="course-case"><section className={'course-image-stack '+(s.images?.some(x=>x.includes('mobile'))?'mobile-object':'')}>{s.images?.map(id=><ImageObject key={id} id={id}/>)}</section><aside><Bullets items={s.items}/>{s.code&&<Code text={s.code}/>}{s.link&&<Link href={s.link}>{s.linkLabel}</Link>}</aside></div>;
else if(s.kind==='canonical')body=<Canonical/>;
else if(s.kind==='render')body=<Render/>;
else if(s.kind==='vitals')body=<Vitals/>;
else if(s.kind==='shift')body=<Shift s={s}/>;
else if(s.kind==='personal')body=<Personal s={s}/>;
else if(s.kind==='eeat')body=<Eeat s={s}/>;
else if(s.kind==='architecture')body=<Architecture/>;
else if(s.kind==='sources')body=<Sources/>;
else if(s.kind==='loading')body=<><div className="course-loading">{s.images?.map((id,i)=><figure key={id}><ImageObject id={id}/><figcaption>{['空白','页面框架','主图','正文'][i]}</figcaption></figure>)}</div></>;
else if(s.kind==='map')body=<div className="course-route">{s.items.map((x,i)=><a key={x} href={`?page=${pages.findIndex(x=>x.part===i+1&&x.kind==='chapter')+1}`}><b>{String(i+1).padStart(2,'0')}</b><h3>{x}</h3><span>进入章节 ↗</span></a>)}</div>;
else if(s.kind==='result')body=<div className="course-result"><section><span className="course-kicker">完整成果示例 · 可直接阅读</span><h3>一份真实页面检查记录</h3><div className="course-result-record"><p><b>对象</b> MDN · 404说明文档</p><p><b>观察</b> 本次请求返回200；标题讨论404</p><p><b>判断</b> 标题主题不等于响应状态</p></div><Link href={s.link!}>{s.linkLabel}</Link></section><aside><Bullets items={s.items}/></aside></div>;
else if(['code','url','boundaries'].includes(s.kind))body=<div className="course-code-layout"><Code text={s.code||''}/><Bullets items={s.items}/></div>;
else body=<div className="course-steps">{s.items.map((x,i)=><div key={x}><b>{String(i+1).padStart(2,'0')}</b><h3>{x}</h3></div>)}{s.link&&<Link href={s.link}>{s.linkLabel}</Link>}</div>;
return <Slide bg={dark?colors.dark:s.kind==='map'?colors.warmBg:colors.white}><div className={`course-v2 course-page-${page} kind-${s.kind} ${dark?'is-dark':''}`} style={{fontFamily:fonts.body,color:dark?colors.white:colors.dark}}><div className="course-logo-backing"/><img className="course-print-logo" src={assetPath('logo-zh-full.svg')} alt="JR Academy"/>{!dark&&<header><span className="course-kicker">SEO / GEO · {s.part?`PART ${String(s.part).padStart(2,'0')}`:'COURSE'}</span><h1>{s.title}</h1>{s.sub&&<p>{s.sub}</p>}</header>}<main className={dark?'course-hero-main':''}>{body}</main>{s.link&&!['cover','closing','case','photos','result','steps'].includes(s.kind)&&<div className="course-extra-link"><Link href={s.link}>{s.linkLabel}</Link></div>}<CourseTerms page={page} dark={dark}/></div></Slide>}
