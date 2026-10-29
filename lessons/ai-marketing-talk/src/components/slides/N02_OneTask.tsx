import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors, fonts, border, shadow } from '../deck';

// Adapted from Marketing S11_Step1Naive: preserve the four-operation teaching composition.
const FLOW = [
  { icon: '👤', label: '你', detail: '提供课程资料' },
  { icon: '💬', label: 'ChatGPT', detail: '写一篇小红书' },
  { icon: '📋', label: '复制与检查', detail: '事实 / 风格 / 配图' },
  { icon: '📱', label: '手动发布', detail: '选话题 / 点发布' },
];
export default function N02_OneTask() {
  return <ReferenceFrame stage="第一层 · 个人提效" title="用 ChatGPT 写一篇内容，谁还在干活？" takeaway="AI 帮你生成了；整条流程，仍由你推动。">
    <div style={{display:'flex',alignItems:'center',height:410,gap:12}}>
      {FLOW.map((n,i)=><div key={n.label} style={{display:'flex',alignItems:'center',flex:1,gap:12}}>
        <motion.section data-reference-panel initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*.09}} style={{flex:1,height:310,borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:i===1?colors.dark:colors.white,color:i===1?colors.white:colors.dark,padding:'30px 18px',textAlign:'center'}}>
          <div style={{fontSize:82,lineHeight:1.2,marginBottom:26}}>{n.icon}</div>
          <h2 style={{fontFamily:fonts.heading,fontSize:32,fontWeight:900}}>{n.label}</h2>
          <p style={{fontSize:24,marginTop:18}}>{n.detail}</p>
        </motion.section>
        {i<3&&<span style={{fontSize:42,fontWeight:900,color:colors.rose}}>→</span>}
      </div>)}
    </div>
    <div style={{display:'flex',justifyContent:'center',gap:30,fontSize:28,fontWeight:800}}>
      <span>✓ 一次生成</span><span>✓ 单个平台</span><span style={{color:colors.rose}}>明天：再走一遍？</span>
    </div>
  </ReferenceFrame>;
}
