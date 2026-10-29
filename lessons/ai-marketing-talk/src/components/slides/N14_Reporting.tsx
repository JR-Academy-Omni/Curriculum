import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors, fonts, border, shadow } from '../deck';

// Adapted from Marketing S15_Step5Memory: three input layers, brain, role-aware actions.
const INPUTS=[
 {icon:'👤',title:'员工工作记录',rows:['负责的工作','已确认技能','当前任务量','工作反馈'],color:colors.purple},
 {icon:'🏢',title:'公司知识与规则',rows:['产品与客户资料','已确认的决定','固定工作步骤','品牌与边界'],color:colors.orange},
 {icon:'📊',title:'业务当前状态',rows:['目标与进展','客户跟进状态','团队排期','阻塞与异常'],color:colors.green},
];
const ACTIONS=[
 {icon:'📅',title:'安排工作',detail:'小王任务已满：建议调整分工'},
 {icon:'🔄',title:'调整任务',detail:'客户项目延期：更新任务并通知'},
 {icon:'✍️',title:'生成业务内容',detail:'按公司资料起草客户提案'},
 {icon:'✋',title:'提醒负责人决定',detail:'客户跟进停滞：提醒负责人介入'},
];
export default function N14_Reporting(){
 return <ReferenceFrame stage="中介公司 · 管理 Agent 依据什么安排工作" title="管理 AI 要先知道：谁在做、规则是什么、业务到哪了" takeaway="管理 Agent 按权限读取公司记录；员工从工作台向它提交新进展。">
  <div style={{display:'grid',gridTemplateColumns:'440px 290px 570px',gap:35,height:520,paddingTop:10}}>
   <div style={{display:'grid',gridTemplateRows:'repeat(3,1fr)',gap:20}}>
    {INPUTS.map((n,i)=><motion.section data-reference-panel key={n.title} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*.06}} style={{position:'relative',borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:colors.white,padding:'16px 24px'}}>
     <div style={{position:'absolute',left:0,top:0,bottom:0,width:8,background:n.color}}/>
     <h2 style={{fontSize:28,fontWeight:900}}>{n.icon} {n.title}</h2>
     <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px 12px',fontSize:20,lineHeight:1.4,marginTop:12}}>{n.rows.map(r=><p key={r}>· {r}</p>)}</div>
    </motion.section>)}
   </div>
   <div style={{display:'flex',position:'relative',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <div style={{position:'absolute',left:-28,top:230,fontSize:40,color:colors.rose}}>→</div>
    <div style={{width:255,height:255,borderRadius:'50%',border,background:colors.dark,color:colors.white,boxShadow:'7px 7px 0 '+colors.rose,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:16}}>
     <h2 style={{fontSize:32,fontWeight:900,fontFamily:fonts.heading}}>管理 Agent</h2><p style={{fontSize:24,color:colors.yellow}}>安排 · 协调 · 跟进</p>
    </div>
    <div style={{position:'absolute',right:-28,top:230,fontSize:40,color:colors.rose}}>→</div>
    <p style={{fontSize:22,marginTop:16,fontWeight:800}}>确认后才改共用资料</p>
   </div>
   <div style={{display:'grid',gridTemplateRows:'repeat(4,1fr)',gap:16}}>
    {ACTIONS.map((a,i)=><motion.section data-reference-panel key={a.title} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.15+i*.05}} style={{borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:colors.white,padding:'15px 22px',display:'grid',gridTemplateColumns:'52px 1fr',alignItems:'center',gap:16}}>
     <span style={{fontSize:40}}>{a.icon}</span><div><h2 style={{fontSize:29,fontWeight:900,color:colors.rose}}>{a.title}</h2><p style={{fontSize:20,lineHeight:1.4,marginTop:6}}>{a.detail}</p></div>
    </motion.section>)}
   </div>
  </div>
 </ReferenceFrame>;
}
