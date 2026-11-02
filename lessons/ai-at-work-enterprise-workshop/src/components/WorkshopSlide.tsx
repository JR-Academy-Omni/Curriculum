import { motion, useReducedMotion } from 'framer-motion';
import { assetPath } from './ui';
interface WorkshopSlideData { title:string; subtitle:string; kind:string; items:string[]; notes:string; bg:string; body:string; }
const packagePath='../../enterprise-training/ai-at-work/';
function Item({text}:{text:string}){ const [label,...rest]=text.split('｜'); return rest.length?<><strong>{label}</strong><span>{rest.join('｜')}</span></>:<span>{text}</span>; }
export default function WorkshopSlide({slide:s,number}:{slide:WorkshopSlideData;number:number}){
 const reduced=useReducedMotion(); const reveal=(index:number)=>({initial:reduced?false as const:{opacity:0,x:-18},animate:{opacity:1,x:0},transition:{delay:reduced?0:index*.13,duration:.32}});
 return <section className={`workshop-slide background-${s.bg} kind-${s.kind}`} data-slide-content><img className="workshop-logo" src={assetPath(s.bg==='dark'?'logo-zh-white.png':'logo-zh-full.svg')} alt="JR Academy 匠人学院" /><div className="workshop-stage">
 <div className="workshop-kicker">AI AT WORK · {String(number).padStart(2,'0')}</div><header><h1>{s.title}</h1><p>{s.subtitle}</p></header>
 <div className="workshop-content">{s.kind==='cover'?<><div className="cover-line">半天集中实操，完成可交接的工作成果。</div><div className="result-cards">{s.items.map((item,i)=><motion.div className="result-object" key={item} {...reveal(i)}><span className="object-number">0{i+1}</span><h2>{item}</h2><p>完整成果 · 可复用指令 · 核查依据</p></motion.div>)}</div><p className="course-facts">210 分钟（含休息） · 最多 12 人 · 无需编程</p></>:
 s.kind==='flow'?<div className="flow-row">{s.items.map((item,i)=><motion.div className="flow-step" key={item} {...reveal(i)}><span className="object-number">0{i+1}</span><h2>{item}</h2>{i<s.items.length-1&&<span className="flow-arrow" aria-hidden>→</span>}</motion.div>)}</div>:
 s.kind==='table'?<div className="action-table"><div className="table-row table-head">{['Task','Owner','Deadline','Status'].map(t=><strong key={t}>{t}</strong>)}</div>{s.items.map((item,i)=><motion.div className="table-row" key={item} {...reveal(i)}>{item.split(' | ').map((cell,j)=><span key={j}>{cell}</span>)}</motion.div>)}<p className="table-note">缺少的事实保留为待确认事项；不补造日期或执行状态。</p></div>:
 s.kind==='lab'?<div className="lab-layout"><ol className="task-steps">{s.items.map((item,i)=><motion.li key={item} {...reveal(i)}>{item}</motion.li>)}</ol><div className="instruction"><h2>Instruction</h2><p>{s.body}</p><a href={`${packagePath}workbook.html#lab-${number===8?1:number===13?2:number===19?3:4}`}>打开现场工作单 →</a></div></div>:
 s.kind==='document'?<div className="document-layout"><div className="document-body">{s.body}</div><div className="review-list">{s.items.map((item,i)=><motion.div key={item} {...reveal(i)}><Item text={item}/></motion.div>)}<a href={`${packagePath}outputs.html`}>打开完整成果 →</a></div></div>:
 s.kind==='prompt'||s.kind==='timeline'?<div className="structure-list">{s.items.map((item,i)=><motion.div key={item} {...reveal(i)}><span className="object-number">0{i+1}</span><Item text={item}/></motion.div>)}</div>:
 s.kind==='break'?<div className="break-layout"><strong>15</strong><span>分钟</span><p>{s.items[0]}</p></div>:
 <div className={`teaching-cards ${s.items.length===4?'four-cards':''}`}>{s.items.map((item,i)=><motion.div className="teaching-card" key={item} {...reveal(i)}><span className="object-number">0{i+1}</span><Item text={item}/></motion.div>)}</div>}
 </div><footer><span>JR Academy · 企业培训</span><a href={`${packagePath}index.html`}>教学包与完整成果 ↗</a></footer></div></section>;
}
