import { motion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors, fonts, border, shadow } from '../deck';

// Adapted from Marketing S14_Step4Loop: circular feedback, without invented productivity comparisons.
const NODES=[
 {label:'① 看结果',sub:'可信报表',angle:0,color:colors.orange},
 {label:'② 找原因',sub:'哪一环有问题',angle:72,color:colors.yellow},
 {label:'③ 试着改',sub:'一次只改一处',angle:144,color:colors.green},
 {label:'④ 发布',sub:'检查后批准',angle:216,color:colors.rose},
 {label:'⑤ 观察',sub:'确认实际结果',angle:288,color:colors.purple},
];
const CX=340,CY=270,R=190;
const polar=(a:number)=>({x:CX+R*Math.cos((a-90)*Math.PI/180),y:CY+R*Math.sin((a-90)*Math.PI/180)});
export default function N11_Feedback(){
 return <ReferenceFrame stage="内容循环 · 看结果，再改进" title="让下一轮，知道上一轮发生了什么" takeaway="看上一轮的结果，再试一种改法；不保证每次都更好。">
  <div style={{display:'grid',gridTemplateColumns:'710px 1fr',gap:35,height:540}}>
   <svg viewBox="0 0 700 540" width="700" height="540" role="img" aria-label="取数、假设、实验、发布、观察组成反馈回路">
    <defs><marker id="loopArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill={colors.rose}/></marker></defs>
    {NODES.map((n,i)=>{const a=polar(n.angle+20),b=polar(NODES[(i+1)%5].angle-20);return <motion.path key={n.label} d={'M'+a.x+' '+a.y+'A190 190 0 0 1 '+b.x+' '+b.y} fill="none" stroke={colors.rose} strokeWidth="4" markerEnd="url(#loopArrow)" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:.4,delay:i*.05}}/>;})}
    <circle cx={CX} cy={CY} r="100" fill={colors.dark} stroke={colors.dark} strokeWidth="3"/>
    <text x={CX} y={CY-18} fontFamily={fonts.body} fontSize="23" fontWeight="800" fill={colors.yellow} textAnchor="middle">反馈记录</text>
    <text x={CX} y={CY+25} fontFamily={fonts.body} fontSize="30" fontWeight="900" fill={colors.white} textAnchor="middle">保留新证据</text>
    {NODES.map(n=>{const p=polar(n.angle);return <g key={n.label}><rect x={p.x-95} y={p.y-47} width="190" height="94" rx="16" fill={colors.white} stroke={colors.dark} strokeWidth="2"/><rect x={p.x-82} y={p.y-43} width="164" height="6" rx="3" fill={n.color}/><text x={p.x} y={p.y-4} fontFamily={fonts.body} fontSize="29" fontWeight="900" textAnchor="middle" fill={colors.dark}>{n.label}</text><text x={p.x} y={p.y+27} fontFamily={fonts.body} fontSize="22" textAnchor="middle" fill={colors.dark}>{n.sub}</text></g>;})}
   </svg>
   <div style={{display:'grid',gridTemplateRows:'1fr 1fr',gap:20,padding:'8px 0'}}>
    <section data-reference-panel style={{borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:colors.white,padding:28}}>
     <p style={{fontSize:18,color:colors.rose,fontWeight:800}}>本轮实验 · 模拟</p><h2 style={{fontSize:34,fontWeight:900,marginTop:16}}>只改标题</h2>
     <p style={{fontSize:27,marginTop:20}}>“体验课介绍” → “让工作自动做”</p>
     <p style={{fontSize:24,marginTop:20}}>受众、正文、预算先不变</p>
    </section>
    <section data-reference-panel style={{borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:colors.yellow,padding:28}}>
     <h2 style={{fontSize:32,fontWeight:900}}>观察后，再作决定</h2>
     <p style={{fontSize:25,lineHeight:1.7,marginTop:20}}>没有数据：标不可用<br/>样本不足：继续观察<br/>有依据：批准下一次修改</p>
    </section>
   </div>
  </div>
 </ReferenceFrame>;
}
