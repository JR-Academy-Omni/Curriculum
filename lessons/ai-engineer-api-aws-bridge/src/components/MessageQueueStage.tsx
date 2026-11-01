import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
type Mode='drain'|'retry'|'direct';
type Frame={waiting:number[];active?:number;done:number[];failed:number[];phase:string;caption:string};
const initial:Frame={waiting:[],done:[],failed:[],phase:'ready',caption:'4 条文档处理任务将陆续到达；先看消息存在哪里。'};
function frames(mode:Mode):Frame[]{
 const list:Frame[]=[initial];let waiting:number[]=[],done:number[]=[];
 for(let id=1;id<=4;id++){waiting=[...waiting,id];list.push({waiting:[...waiting],done:[],failed:[],phase:'enqueue',caption:`M${id} 已${mode==='direct'?'到达服务入口':'入队'}；${mode==='direct'?'直接调用需要当时有可用处理能力。':'消息会留在队列，等待 Worker 领取。'}`})}
 if(mode==='direct')return [...list,{waiting:[],active:1,done:[],failed:[2,3,4],phase:'overload',caption:'这一轮突发超过单个 Worker 的接收能力；M2–M4 被拒绝或调用超时。'},{waiting:[],done:[1],failed:[2,3,4],phase:'end',caption:'M1 完成；失败请求需要调用方按策略恢复。无队列也可以成功，但需设计容量、超时与重试。'}];
 for(let id=1;id<=4;id++){
 waiting=waiting.filter(x=>x!==id);
 const frame=(phase:string,caption:string):Frame=>({waiting:[...waiting],active:id,done:[...done],failed:[],phase,caption});
 list.push(frame('receive',`Worker 领取 M${id}；其余 ${waiting.length} 条继续等待。M${id} 尚未确认，仍是 In flight。`));
 list.push(frame('process',`Worker 正在处理 M${id}；消息不会因为领取就立即删除。`));
 if(mode==='retry'&&id===1){list.push(frame('crash','Worker 处理 M1 时退出，未保存成功、未 ACK；消息仍未删除。'));list.push({waiting:[id,...waiting],done:[],failed:[],phase:'visible',caption:'Visibility timeout 到期，M1 重新可见，可以再次领取。'});list.push(frame('receive','Worker 恢复并再次领取 M1；重复投递需要消费者按 job ID 幂等处理。'));list.push(frame('process','这次完成业务处理，先保存结果，再确认消息。'))}
 done=[...done,id];list.push({waiting:[...waiting],done:[...done],failed:[],phase:'ack',caption:`M${id} 的结果已保存，ACK / delete 后移除消息。${id===4?'队列清空，4 条任务全部完成。':`还有 ${waiting.length} 条等待处理。`}`});
 }
 return list;
}
const valid=(v:string|null):Mode=>v==='retry'||v==='direct'?v:'drain';
export default function MessageQueueStage(){
 const reduced=useReducedMotion();const [mode,setMode]=useState<Mode>(()=>valid(new URLSearchParams(location.search).get('mq')));const sequence=frames(mode),last=sequence.length-1;
 const [step,setStep]=useState(reduced?last:0),[playing,setPlaying]=useState(!reduced);
 useEffect(()=>{const pop=()=>{const m=valid(new URLSearchParams(location.search).get('mq'));setMode(m);setStep(reduced?frames(m).length-1:0);setPlaying(!reduced)};addEventListener('popstate',pop);return()=>removeEventListener('popstate',pop)},[reduced]);
 useEffect(()=>{if(reduced){setStep(last);setPlaying(false)}},[reduced,last]);
 useEffect(()=>{if(!playing)return;if(step>=last){setPlaying(false);return}const timer=setTimeout(()=>setStep(s=>s+1),1500);return()=>clearTimeout(timer)},[playing,step,last]);
 const choose=(m:Mode)=>{setMode(m);setStep(reduced?frames(m).length-1:0);setPlaying(!reduced);const url=new URL(location.href);url.searchParams.set('mq',m);history.pushState({},'',url)};
 const state=sequence[Math.min(step,last)],direct=mode==='direct';
 const replay=()=>{setStep(reduced?last:0);setPlaying(!reduced)};
 return <div className="mq-stage diagram-stage" data-mode={mode} data-stage={step} data-max-stage={last}>
 <div className="mq-mode" onKeyDown={e=>{if([' ','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))e.stopPropagation()}}><label>观察过程 <select aria-label="消息处理过程" value={mode} onChange={e=>choose(e.target.value as Mode)}><option value="drain">逐条消费 → 队列清空</option><option value="retry">Worker 失败 → 重新投递</option><option value="direct">不经过队列 → 突发直调</option></select></label><span>{direct?'拒绝或超时 ≠ 一定未执行':'等待 '+state.waiting.length+' · In flight '+(state.active?1:0)+' · 已完成 '+state.done.length}</span></div>
 <div className="mq-arena" aria-label="消息逐条入队、处理与确认" role="img">
 <div className="mq-producer"><strong>Producer / API</strong><span>文档处理任务</span><b>→</b></div>
 <div className={'mq-lane'+(direct?' direct':'')}><strong>{direct?'直接调用 · 没有持久待办区':'Message Queue'}</strong><span>{direct?'Worker 忙时，入口必须处理压力':'等待区：消息持续保留，直到被领取'}</span><small>{direct?'同步请求受调用方等待期限约束':'队尾 → → → 队首'}</small>{!direct&&state.active&&<div className="mq-flight">M{state.active}<br/>未 ACK</div>}{!direct&&!state.waiting.length&&!state.active&&step>0&&<div className="mq-empty">✓ 队列已清空</div>}</div>
 <div className={'mq-worker'+(state.phase==='crash'?' broken':'')}><strong>Worker</strong><span>{state.phase==='crash'?'离线 · 未确认':state.active?'处理中 · M'+state.active:'等待领取'}</span><div className="mq-progress"><motion.i key={mode+'-'+step} initial={{width:0}} animate={{width:state.phase==='process'?'100%':'0%'}} transition={{duration:reduced?0:1.2}}/></div></div>
 <div className="mq-results"><strong>Result store</strong><span>保存成功后确认</span></div>
 <div className="mq-connector">→</div><div className="mq-connector second">→</div>
 {[1,2,3,4].map(id=>{const w=state.waiting.indexOf(id),d=state.done.indexOf(id),failed=state.failed.includes(id),active=state.active===id,visible=w>=0||d>=0||failed||active;let x=30,y=155;if(w>=0){x=720-(w+(state.active&&!direct?1:0))*135;y=154}if(active){x=1000;y=154}if(d>=0){x=1240;y=100+d*49}if(failed){x=290+(id-2)*180;y=180}return <motion.div key={id} data-message={id} data-status={active?'in-flight':d>=0?'completed':failed?'failed':w>=0?'waiting':'not-arrived'} className={'mq-message '+(d>=0?'done':failed?'failed':active?'active':'')} initial={false} animate={{x,y,opacity:visible?1:0,scale:active?1.06:1}} transition={{duration:reduced?0:.6,ease:'easeInOut'}}><b>{d>=0?'✓ ':failed?'× ':''}M{id}</b><span>{d>=0?'已完成':failed?'请求失败':active?'处理文档':'待处理'}</span></motion.div>})}
 <div className="mq-ack">{direct?'请求必须自己处理失败与恢复':state.phase==='crash'?'未确认 → 超时后重新可见':state.phase==='ack'?'← 结果已保存 · ACK / delete':state.phase==='visible'?'重新投递 → 同一 job ID 幂等处理':'领取 ≠ 删除 · 成功保存结果后再 ACK / delete'}</div>
 </div>
 <p className="mq-fact">{direct?'没有队列不代表必然失败；此处展示突发超出接收能力的一种情况。':'单 Worker 按序处理用于讲清过程；实际可并发，Standard Queue 可能重复或乱序。'}</p>
 <div className="diagram-controls" onKeyDown={e=>{if([' ','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))e.stopPropagation()}}><span className="diagram-caption" aria-live="polite">{state.caption}</span><span className="diagram-step">{step} / {last}</span><button onClick={()=>step===last?replay():setPlaying(v=>!v)} aria-label={playing?'暂停动画':'播放动画'}>{playing?'暂停':'播放'}</button><button disabled={step>=last} onClick={()=>{setPlaying(false);setStep(s=>Math.min(s+1,last))}}>下一步</button><button onClick={replay}>重播</button></div>
 <div className="mq-print">M1 → M2 → M3 → M4：入队并等待 → Worker 领取（In flight）→ 处理并保存结果 → ACK / delete → 全部完成、队列清空。<br/>失败未确认：Visibility timeout 后重新投递；消费者需幂等，多次失败可按策略转 DLQ。无队列直调超出容量时可能被拒绝或超时，队列也需容量、保留期和重试设计。</div>
 </div>
}
