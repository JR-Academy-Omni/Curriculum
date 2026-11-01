import { labEntry } from './lab-entry';
import { motion, useReducedMotion } from 'framer-motion';
import { Fragment, type ReactNode } from 'react';
import pages from '../data/slides.json';
import course from '../data/course-meta.json';
import { assetPath } from './ui';
import DiagramStage from './DiagramStage';
import MessageQueueStage from './MessageQueueStage';
import { diagrams } from '../data/diagrams';
import { TechnologyLogoStrip, type TechnologyKey } from './TechnologyLogos';
const material=(s:string)=>assetPath('materials/'+s);
const stripChoices:Record<number,readonly TechnologyKey[]>={22:['aws'],23:['ec2','fargate','lambda'],108:['aws'],300:['docker'],301:['react','nodejs','docker'],302:['aws']};
function Reveal({children,i=0}:{children:ReactNode;i?:number}){const reduce=useReducedMotion();return <motion.div className="motion-piece" initial={reduce?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.4,delay:i*.16}} style={{display:'flex',flex:1,minWidth:0}}>{children}</motion.div>}
function Flow({items}:{items:string[]}){const reduce=useReducedMotion();return <div className="flow">{items.map((v,i)=><Fragment key={v}>{i>0&&<span className="arrow">→</span>}<motion.div initial={reduce?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:i*.22,duration:.4}} className="motion-piece node"><div style={{fontSize:19,color:'var(--jc-sky-deep)',marginBottom:14}}>0{i+1}</div>{v}</motion.div></Fragment>)}</div>}
function Links({lab=false}:{lab?:boolean}){return <div className="actions"><a className="action" href={lab?labEntry():material('handbook.html')} target="_blank" rel="noreferrer">{lab?'打开 API 实操':'打开完整讲义'}</a><a className="action" href={material('worksheet.html')} target="_blank" rel="noreferrer">打开工作单</a></div>}
export function LessonPage({index}:{index:number}){const p=pages[index];const diagramPage=p.diagramId;const diagram=Boolean(diagrams[diagramPage]);const night=['cover','code','aws','network'].includes(p.layout);return <section className={'course-slide'+(night?' night':'')}>
{night&&<div className="logo-plate"/>}<div className="kicker">AI ENGINEER · BRIDGE / {String(index+1).padStart(2,'0')}</div><h1 style={p.layout==='cover'?{fontSize:82,maxWidth:1260}:undefined}>{p.title}</h1><p className="lead">{p.subtitle}</p>
<div className="body">
{diagramPage===203?<MessageQueueStage/>:diagram?<DiagramStage page={diagramPage}/>:<>
{['flow'].includes(p.layout)&&<Flow items={p.items}/>}
{['compare','columns'].includes(p.layout)&&<div className="row">{p.items.map((t,i)=><Reveal key={t} i={i}><div className="panel" style={{borderTop:'8px solid var(--jc-'+(i===0?'sky':i===1?'mint':'sunshine')+')'}}>{t}</div></Reveal>)}</div>}
{['contract','response','request','timeline'].includes(p.layout)&&<div style={{display:'grid',gridTemplateColumns:p.layout==='timeline'?'1fr 1fr':'1fr',gap:12}}>{p.items.map((t,i)=><Reveal key={t} i={i}><div className="panel" style={{padding:'12px 28px',fontSize:26}}>{t}</div></Reveal>)}</div>}
{p.layout==='diagnose'&&<><div className="panel" style={{textAlign:'center',background:'var(--jc-wash-sky)'}}>执行一次保存 → 观察请求证据</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>{p.items.map(v=><div className="panel" key={v}>{v}</div>)}</div></>}
{p.layout==='code'&&<pre className="code">{p.items.join('\n')}</pre>}
{p.layout==='cover'&&<><Flow items={p.items}/><div style={{fontSize:28,marginTop:28}}>{course.minutes} 分钟 · 看懂调用链，拿证据排障</div></>}
{p.layout==='result'&&<><div className="panel"><div style={{fontSize:20,color:'var(--jc-slate)',marginBottom:18}}>护理记录 · 晨间关怀</div><strong>对象 R-001 · 2026-11-01 · 09:10</strong><p>观察：住户希望在更安静的区域休息，能够清楚表达偏好。</p><p>处理：记录偏好并告知当班人员；本条未包含诊断或用药判断。</p><p>后续：下一班次询问休息环境是否合适，并继续记录反馈。</p></div><Links lab/></>}
{p.layout==='lab'&&<><div className="panel">{p.items.map((v,i)=><div key={v} style={{margin:'12px 0'}}>{i+1}. {v}</div>)}</div><Links lab/></>}
{p.layout==='aws'&&<><Flow items={['浏览器\nHTTPS','ALB\n入口','ECS / Fargate\n后端','RDS\n业务数据']}/><div className="row"><div className="panel">S3：文件对象分支</div><div className="panel">IAM · Secrets · CloudWatch：支撑关系</div></div><div style={{fontSize:24}}>Route 53 负责 DNS；ACM 提供证书；静态前端可由 S3 + CloudFront 托管。</div></>}
{p.layout==='network'&&<><div style={{border:'2px solid var(--jc-sky)',borderRadius:32,padding:30}}><div style={{fontSize:24,marginBottom:22}}>VPC · 应用网络</div><Flow items={['Public subnet\nALB :443','Private subnet\nTask :8080','Private subnet\nDatabase :5432']}/></div><div className="row"><div className="panel" style={{fontSize:24}}>Security Group：按来源与端口允许流量</div><div className="panel" style={{fontSize:24}}>私网访问外部 AI：还需要合适的网络出口</div></div></>}
{p.layout==='break'&&<><div style={{fontSize:136,fontWeight:700,color:'var(--jc-sky-deep)'}}>10 min</div><div style={{fontSize:30}}>{p.items[1]}</div></>}
{p.layout==='end'&&<><Flow items={p.items}/><Links lab/><a style={{fontSize:26}} href={material('answers.html')} target="_blank" rel="noreferrer">打开参考解答与服务速查</a><a style={{fontSize:26}} href={material('system-design.html')} target="_blank" rel="noreferrer">打开 System Design 完整讲义</a></>}
</>}
</div><TechnologyLogoStrip diagramId={diagramPage} technologies={stripChoices[diagramPage]} style={{position:'absolute',right:100,bottom:38,maxWidth:620,justifyContent:'flex-end'}}/><div className="source">{diagramPage>=400?'参考：AWS Bedrock AgentCore / Docker / Firecracker 官方文档':diagramPage===203?'参考：AWS SQS Visibility Timeout / At-least-once Delivery':diagramPage>=300?'参考：GitHub Actions / Docker / AWS 官方文档':diagramPage>=200?'参考：AWS Builders’ Library / MDN / OpenTelemetry · 完整来源见讲义':diagramPage===109?'参考：AWS VPC Security Groups / NACL / WAF 官方文档':diagramPage===108?'参考：HashiCorp Terraform / AWS CloudFormation 官方文档':diagramPage>=100?'参考：React / Node.js / Nginx / Vite 官方文档':diagramPage>=21&&diagramPage<=33?'参考：AWS 官方文档 / Docker Docs · 完整链接见讲义':diagramPage>=7&&diagramPage<=19?'参考：MDN HTTP / 本课接口约定 · 完整链接见讲义':'JR Academy · AI Engineer 工程衔接'}</div></section>}
