import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors, border, shadow } from '../deck';

// Fictional company roles, not a client implementation or staffing claim.
const DEPTS=[
 {icon:'📣',title:'市场营销',jobs:['推广计划 / 内容','活动 / 咨询来源'],ask:'推广有没有进展？',color:colors.rose},
 {icon:'🧾',title:'财务会计',jobs:['发票 / 费用','佣金与账目核对'],ask:'预算够不够？',color:colors.orange},
 {icon:'👥',title:'团队管理',jobs:['员工日报 / 分工','任务 / 期限 / 卡点'],ask:'谁做？做到哪了？',color:colors.purple},
 {icon:'💬',title:'客户业务',jobs:['房源 / 客户跟进','看房 / 交易进展'],ask:'客户谁在跟？',color:colors.green},
 {icon:'🗓️',title:'行政支持',jobs:['预约 / 日历','文件 / 入职安排'],ask:'安排有没有落地？',color:colors.blue},
];
export default function N19_PropertyCase(){
 return <ReferenceFrame stage="公司案例 · 中介公司 · 模拟" title="这是一家要每天运转的中介公司" takeaway="要接起来的是整家公司：资料、分工、审批与工作结果。">
  <section data-reference-panel style={{height:130,borderRadius:24,border,background:colors.dark,color:colors.white,padding:'24px 30px',display:'flex',alignItems:'center',gap:32}}>
   <span style={{fontSize:56}}>🏢</span>
   <div><h2 style={{fontSize:34,fontWeight:900}}>老板经营一家公司，不是只卖一套房</h2><p style={{fontSize:25,color:colors.yellow,marginTop:12}}>目标、预算、团队、客户，都要一起看</p></div>
  </section>
  <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:18,marginTop:28}}>
   {DEPTS.map((d,i)=><motion.section data-reference-panel key={d.title} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:i*.06}} style={{height:275,borderRadius:24,border,boxShadow:shadow,background:colors.white,padding:'22px 18px',borderTop:'8px solid '+d.color}}>
    <div style={{fontSize:44}}>{d.icon}</div><h2 style={{fontSize:31,fontWeight:900,marginTop:12}}>{d.title}</h2>
    {d.jobs.map(j=><p key={j} style={{fontSize:23,marginTop:14}}>{j}</p>)}
    <p style={{fontSize:22,fontWeight:800,color:colors.rose,marginTop:20}}>{d.ask}</p>
   </motion.section>)}
  </div>
  <p style={{fontSize:27,fontWeight:800,textAlign:'center',marginTop:30}}>资料散在软件和群聊里，老板只好每天挨个问。</p>
 </ReferenceFrame>;
}
