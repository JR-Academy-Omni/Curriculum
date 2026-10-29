import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors, fonts, border, shadow } from '../deck';

// Source: S21c_OfflineEventWorkflow, legacy online page 33; process adaptation, not a live run.
const STEPS=[
 {name:'写策划案',skills:['/offline-event-content-design'],ai:'8个策划框架 + 100分评分量表',out:'策划案 / 评分 / 改进项',color:colors.purple},
 {name:'排执行',skills:['/offline-event-sop'],ai:'执行清单、倒计时与风险预案',out:'任务清单 / 分工 / 风险预案',color:colors.blue},
 {name:'出海报',skills:['/xhs-poster','/poster-user-test'],ai:'制作海报，模拟用户角色反应',out:'海报 / 角色测试 / 修改项',color:colors.rose},
 {name:'写宣发',skills:['/xhs-draft','/blog-longform-writer'],ai:'按渠道生成不同版本',out:'小红书 / 公众号宣传稿',color:colors.orange},
 {name:'检查详情页',skills:['/offline-event-article-quality'],ai:'按活动文章质量标准审稿',out:'审稿评分 / 风险 / 修改项',color:colors.yellow},
 {name:'活动后复盘',skills:['/xhs-draft','/wechat-article-quality'],ai:'整理现场素材与反馈',out:'活动回顾 / 下次改进建议',color:colors.blue},
 {name:'跟进客户',skills:['/eoi-followup'],ai:'24h / 72h / 7d跟进与角色派单',out:'跟进话术 / 派单 / 超时提醒',color:colors.green},
];
export default function R04_OfflineEvent(){
 return <ReferenceFrame stage="从内容到业务 · 真实 Skill 文件已核对 · 7步接力" title="匠人线下活动：具体调用哪些 Skill？" takeaway="真实 Skill 职责映射，非本轮运行结果；这些能力都有了，遇到一次改期，谁协调多项工作？">
  <div style={{display:'grid',gridTemplateColumns:'230px 650px 1fr',gap:22,height:25,padding:'0 18px',fontSize:18,fontWeight:800,color:'#666'}}><p>工作步骤</p><p>调用 Skill</p><p>具体产出</p></div>
  <div style={{display:'grid',gap:6}}>
   {STEPS.map((s,i)=><motion.section data-event-step key={s.name} initial={{opacity:0,x:-15}} animate={{opacity:1,x:0}} transition={{delay:i*.08,duration:.3}} style={{display:'grid',gridTemplateColumns:'230px 650px 1fr',gap:22,alignItems:'center',height:70,padding:'6px 18px',background:colors.white,border,borderRadius:18,boxShadow:shadow}}>
    <div style={{display:'flex',alignItems:'center',gap:16}}><span style={{width:36,height:36,flexShrink:0,borderRadius:10,background:s.color,display:'grid',placeItems:'center',fontSize:24,fontWeight:900}}>{i+1}</span><h2 style={{fontSize:27,fontWeight:900}}>{s.name}</h2></div>
    <div><div style={{display:'flex',gap:8}}>{s.skills.map(skill=><span data-event-skill key={skill} style={{fontFamily:fonts.mono,fontSize:18,lineHeight:1.2,fontWeight:700,whiteSpace:'nowrap',background:colors.dark,color:colors.yellow,borderRadius:8,padding:'2px 8px'}}>{skill}</span>)}</div><p style={{fontSize:18,lineHeight:1.3,marginTop:4,color:'#666'}}>{s.ai}</p></div><p style={{fontSize:22,lineHeight:1.4,fontWeight:800,color:colors.rose}}>{s.out}</p>
   </motion.section>)}
  </div>
 </ReferenceFrame>;
}
