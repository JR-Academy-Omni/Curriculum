import { useState, useRef, useEffect } from 'react';
import { CaseButton, CaseStyles, colors, controlStyle } from './CaseKit';
import { fonts } from './deck';
// Synthetic classroom candidate contract. No network, provider, backend or real resident data.
type State = 'Draft' | 'Review' | 'Confirmed' | 'Failed' | 'Escalated';
type Role = '护理人员' | '复核人员' | '负责人';
type View = '对象' | '任务' | '记录' | '审计';
const fields = {...controlStyle, width:'100%', fontWeight:500, background:colors.white, fontSize:19};
export default function CareKindDemo(){
 const [view,setView]=useState<View>('记录'); const [role,setRole]=useState<Role>('护理人员');
 const [state,setState]=useState<State>('Draft'); const [text,setText]=useState('');const [saved,setSaved]=useState('');
 const [busy,setBusy]=useState(false); const [failure,setFailure]=useState(false);const [narrow,setNarrow]=useState(false);
 const [feedback,setFeedback]=useState('请填写合成记录。');const [log,setLog]=useState<string[]>(['v1 · 合成记录创建 · Draft']);
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
 const dirty=text!==saved; const editable=state==='Draft'&&role==='护理人员';
 function record(message:string){setLog(x=>[...x,message]);}
 function reset(){if(timer.current)clearTimeout(timer.current);setBusy(false);setState('Draft');setText('');setSaved('');setFailure(false);setFeedback('请填写合成记录。');setLog(['v1 · 合成记录创建 · Draft']);setRole('护理人员');setView('记录');}
 function save(){if(!text.trim()){setFeedback('记录不能为空；请输入内容再保存。');return;}setBusy(true);setFeedback('正在模拟保存…');timer.current=setTimeout(()=>{setBusy(false);if(failure){setState('Failed');setFeedback('模拟保存失败：内容已保留。重试或升级处理。');record('保存失败 · 输入保留');}else{setSaved(text);setState('Draft');setFeedback('模拟保存成功；当前仍是 Draft。');record('护理人员保存 · Draft');}},650);}
 function change(next:State,message:string){setState(next);setFeedback(message);record(`${role} · ${next} · ${message}`);}
 return <div className="w2-case" data-carekind-demo style={{fontFamily:fonts.body,color:colors.dark}} onKeyDownCapture={e=>{const tag=(e.target as HTMLElement).tagName;if(['INPUT','TEXTAREA','SELECT'].includes(tag))e.stopPropagation();}}>
 <CaseStyles/>
 <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:14}}>
  <label style={{fontSize:19,fontWeight:800}}>演示角色 <select aria-label="演示角色" value={role} onChange={e=>setRole(e.target.value as Role)} style={{...controlStyle,fontSize:18,padding:8}}>{['护理人员','复核人员','负责人'].map(x=><option key={x}>{x}</option>)}</select></label>
  <CaseButton onClick={()=>setNarrow(x=>!x)} active={narrow} style={{fontSize:18}}>{narrow?'恢复宽布局':'查看窄布局'}</CaseButton>
  <CaseButton onClick={reset} style={{fontSize:18}}>重置演示</CaseButton>
  <span style={{marginLeft:'auto',fontSize:18,fontWeight:800}}>合成数据 · 本地状态 · 无后端 / AI 调用</span>
 </div>
 <div style={{display:'flex',gap:24,alignItems:'start'}}>
 <div data-demo-window style={{width:narrow?450:1000,flexShrink:0,border:`2px solid ${colors.dark}`,borderRadius:20,overflow:'hidden',background:colors.white}}>
  <div style={{background:colors.dark,color:colors.white,padding:'12px 18px',fontSize:21,fontWeight:800}}>CareKind · {narrow?'单列工作区':'记录工作区'}</div>
  <nav aria-label="CareKind演示导航" style={{display:'flex',gap:8,padding:'10px 16px',background:colors.warmBg}}>{(['对象','任务','记录','审计'] as View[]).map(x=><CaseButton key={x} active={view===x} onClick={()=>setView(x)} style={{fontSize:18,padding:'7px 14px'}}>{x}</CaseButton>)}</nav>
  <div style={{padding:18,minHeight:325}}>
   {view==='对象'&&<><h2 style={{fontSize:26}}>Resident · CK-DEMO-01</h2><p style={{fontSize:21,lineHeight:1.7,margin:'18px 0'}}>合成对象，无真实个人资料。<br/>本次关联：Evening / SHIFT-DEMO-01。</p><CaseButton onClick={()=>setView('任务')}>查看当前任务</CaseButton></>}
   {view==='任务'&&<><h2 style={{fontSize:26}}>Task · TASK-DEMO-01</h2><p style={{fontSize:21,lineHeight:1.7,margin:'18px 0'}}>完成一条护理记录草稿，并交给复核人员。<br/>候选契约：state / Resident / Shift / 内容。</p><CaseButton onClick={()=>setView('记录')}>打开记录</CaseButton></>}
   {view==='审计'&&<><h2 style={{fontSize:26}}>本次模拟操作记录</h2><div style={{maxHeight:230,overflowY:'auto',marginTop:16}}>{log.map((x,i)=><p key={i} style={{fontSize:19,padding:'8px 0',borderBottom:`1px solid ${colors.warmBg}`}}>{i+1}. {x}</p>)}</div><p style={{fontSize:18,marginTop:12}}>页面内记录；刷新会清空，非持久化审计。</p></>}
   {view==='记录'&&<>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}><h2 style={{fontSize:25}}>Progress Note</h2><span data-business-state style={{fontSize:19,fontWeight:850,borderRadius:8,padding:'5px 12px',background:state==='Confirmed'?colors.green:state==='Failed'?colors.red:colors.yellow}}>{state}</span></div>
    <div style={{fontSize:18,marginBottom:12}}>CK-DEMO-01 · Evening · 候选流程 v1</div>
    <label htmlFor="care-note" style={{fontSize:19,fontWeight:800}}>记录内容 <span style={{fontWeight:500}}>（{dirty?'未保存':'与已保存版本一致'}）</span></label>
    <textarea id="care-note" aria-label="记录内容" placeholder="填写合成记录，例如：本班次已完成用餐记录。" disabled={!editable||busy} value={text} onChange={e=>{setText(e.target.value);setFeedback('有未保存修改；保存后再送审。');}} style={{...fields,height:narrow?95:92,marginTop:8,resize:'none',opacity:editable?1:.7}}/>
    <div role="status" data-demo-feedback style={{fontSize:18,lineHeight:1.4,margin:'10px 0',minHeight:25}}>{feedback}</div>
    <div style={{display:'flex',flexWrap:'wrap',gap:9}}>
     {state==='Draft'&&<><CaseButton onClick={save} disabled={!editable||busy} style={{fontSize:18,padding:'8px 14px',background:colors.yellow}}>{busy?'保存中…':'保存草稿'}</CaseButton><CaseButton disabled={!editable||busy||dirty||!saved.trim()} onClick={()=>change('Review','已模拟送审；请切换复核人员检查。')} style={{fontSize:18,padding:'8px 14px'}}>送审</CaseButton></>}
     {state==='Review'&&<><CaseButton disabled={role!=='复核人员'} onClick={()=>change('Draft','已退回；切换护理人员修改。')} style={{fontSize:18,padding:'8px 14px'}}>退回修改</CaseButton><CaseButton disabled={role!=='复核人员'} onClick={()=>change('Confirmed','复核人员已模拟确认 · v1。')} style={{fontSize:18,padding:'8px 14px',background:colors.green}}>确认记录</CaseButton></>}
     {state==='Failed'&&<><CaseButton disabled={role!=='护理人员'} onClick={()=>{setFailure(false);change('Draft','已返回草稿，请再次保存。');}} style={{fontSize:18,padding:'8px 14px'}}>重试</CaseButton><CaseButton disabled={role!=='护理人员'} onClick={()=>change('Escalated','已升级；切换负责人安排恢复。')} style={{fontSize:18,padding:'8px 14px'}}>升级处理</CaseButton></>}
     {state==='Escalated'&&<CaseButton disabled={role!=='负责人'} onClick={()=>{setFailure(false);change('Draft','负责人已安排恢复；切换护理人员保存。');}} style={{fontSize:18,padding:'8px 14px'}}>恢复到草稿</CaseButton>}
     {state==='Confirmed'&&<span style={{fontSize:20,fontWeight:800}}>已确认 · 确认者：复核人员 · v1 · 只读</span>}
    </div>
    {state==='Draft'&&<label style={{display:'flex',gap:8,alignItems:'center',fontSize:18,marginTop:12}}><input type="checkbox" aria-label="模拟保存失败" checked={failure} disabled={busy} onChange={e=>setFailure(e.target.checked)} style={{width:20,height:20}}/>模拟保存失败</label>}
   </>}
  </div>
 </div>
 <aside style={{flex:1,minWidth:0,fontSize:22,lineHeight:1.6}}>
  <h3 style={{fontSize:25}}>演示检查点</h3><p style={{marginTop:18}}>空输入 → 校验<br/>编辑 → 未保存<br/>保存 → 仍为Draft<br/>送审 → 护理人员只读<br/>复核 → 退回或确认<br/>失败 → 重试或升级</p>
  {narrow&&<div style={{marginTop:22,borderRadius:16,background:colors.yellow,padding:18}}><b>窄布局检查</b><br/>导航、输入、状态与操作保持可见。<br/>此视图示范单列重排；整套PPT在手机仍按画布缩放。</div>}
 </aside>
 </div>
 </div>;
}
