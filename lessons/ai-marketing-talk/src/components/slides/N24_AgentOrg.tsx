import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors } from '../deck';

// Proposed organisation: the human founder remains above every AI layer.
const LAYERS=[
 {y:92,x:285,w:810,name:'经营层',agent:'Founder Agent · 经营助手',color:colors.rose,modules:['经营目标','经营汇总','预算草案','资源建议','风险提醒','待拍板事项']},
 {y:210,x:195,w:990,name:'管理层',agent:'Management Agent · 管理助手',color:colors.purple,modules:['员工沟通','汇报整理','任务分配','进度跟进','跨部门协调','异常升级']},
 {y:328,x:105,w:1170,name:'执行层',agent:'Execution Agents · 部门执行助手',color:colors.orange,modules:['营销内容','活动安排','客户跟进','财务核对','行政安排','团队事务']},
 {y:446,x:0,w:1380,name:'软件与资料底座',agent:'连接已有软件 · 共用记录',color:colors.blue,modules:['客户管理','财务软件','日历消息','共用资料','角色权限','工作记录']},
];
export default function N24_AgentOrg(){
 return <ReferenceFrame stage="公司 AI OS · 从老板向下展开 · 方案示意" title="老板定方向，AI 一层层承接工作" takeaway="老板 → 经营 Agent → 管理 Agent → 执行 Agent → 软件与资料。">
  <p style={{position:'absolute',left:0,top:8,fontSize:18,color:'#666',lineHeight:1.6}}>黄色＝真人<br/>深色＝AI Agent<br/>白色＝软件 / 资料</p>
  <section data-os-layer style={{position:'absolute',left:470,top:0,width:440,height:76,borderRadius:22,background:colors.yellow,border:'2px solid '+colors.dark,textAlign:'center',padding:'7px 16px',boxShadow:'4px 4px 0 '+colors.dark}}>
   <h2 style={{fontSize:29,fontWeight:900}}>👤 人 · 老板 / 创始人</h2>
   <p style={{fontSize:20,marginTop:3}}>定目标、批准预算、最终拍板</p>
  </section>
  <svg width="1380" height="554" style={{position:'absolute',inset:0,pointerEvents:'none'}} aria-hidden="true">
   <defs><marker id="hierarchyArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill={colors.rose}/></marker></defs>
   {[76,186,304,422].map(y=><path key={y} d={'M675 '+(y+4)+'V'+(y===76?90:y+22)} stroke={colors.rose} strokeWidth="3" markerEnd="url(#hierarchyArrow)"/>)}
   {[76,186,304,422].map(y=><path key={y} d={'M705 '+(y+22)+'V'+(y+4)} stroke={colors.purple} strokeWidth="2" markerEnd="url(#hierarchyArrow)"/>)}
   <path d="M160 260H192" stroke={colors.rose} strokeWidth="3" markerStart="url(#hierarchyArrow)" markerEnd="url(#hierarchyArrow)"/>
   <path d="M1188 260H1220" stroke={colors.rose} strokeWidth="3" strokeDasharray="5 4" markerStart="url(#hierarchyArrow)" markerEnd="url(#hierarchyArrow)"/>
  </svg>
  <p style={{position:'absolute',right:8,top:3,fontSize:20,fontWeight:800,lineHeight:1.6,color:colors.rose}}>↓ 目标、任务向下<br/>↑ 汇报、结果向上</p>
  {LAYERS.map((l,i)=><motion.section key={l.name} data-os-layer initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:i*.08}} style={{position:'absolute',left:l.x,top:l.y,width:l.w,height:94,borderRadius:22,background:i===3?colors.white:colors.dark,color:i===3?colors.dark:colors.white,border:'2px solid '+colors.dark,padding:'8px 12px',boxShadow:'4px 4px 0 '+l.color}}>
   <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:16,marginBottom:8}}>
    <span style={{fontSize:17,fontWeight:900,background:l.color,color:colors.dark,borderRadius:8,padding:'3px 9px'}}>{i===3?'软件 / 资料':'AI Agent'} · {l.name}</span>
    <h2 style={{fontSize:24,fontWeight:900}}>{l.agent}</h2>
   </div>
   <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:9}}>
    {l.modules.map(m=><div data-layer-module key={m} style={{borderRadius:12,background:i===3?colors.warmBg:colors.white,color:colors.dark,padding:'9px 4px',textAlign:'center',borderTop:'3px solid '+l.color}}>
     <p style={{fontSize:21,fontWeight:900,lineHeight:1.2}}>{m}</p>
    </div>)}
   </div>
  </motion.section>)}
  <section data-os-layer style={{position:'absolute',left:0,top:203,width:160,height:108,borderRadius:18,border:'2px solid '+colors.dark,background:colors.yellow,padding:10,textAlign:'center'}}>
   <h2 style={{fontSize:24,fontWeight:900}}>👤 人 · 员工</h2><p style={{fontSize:19,lineHeight:1.4,marginTop:8}}>直接汇报<br/>提问、接任务</p>
  </section>
  <section data-os-layer style={{position:'absolute',right:0,top:203,width:160,height:108,borderRadius:18,border:'2px solid '+colors.dark,background:colors.yellow,padding:10,textAlign:'center'}}>
   <h2 style={{fontSize:22,fontWeight:900}}>👤 人 · 负责人</h2><p style={{fontSize:19,lineHeight:1.4,marginTop:8}}>审批、异常<br/>专业判断</p>
  </section>
 </ReferenceFrame>;
}
