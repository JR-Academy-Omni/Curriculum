import { useState } from 'react';
import { ChartFrame, ChartDefs, ChartNode, ChartArrow } from '../GrowthChart';
import { colors,fonts } from '../deck';
export default function V04_ExperimentLoop(){const [result,setResult]=useState<'up'|'flat'>('up');return <ChartFrame tag="Growth Hacker · 实验闭环" title="找到一个瓶颈，改动，再用行为验证" subtitle="新生节页面教学模拟：报名多、真正领取实用指南的人少" footnote={<><a href="https://www.penguinrandomhouse.com/books/545936/hacking-growth-by-sean-ellis-founder-of-growthhackerscom-and-morgan-brown/" target="_blank" rel="noreferrer">Hacking Growth · 出版社介绍</a>；演示中的人数与结果均为模拟，不是真实新生节成绩。少量观察只能形成线索。</>}>
    <svg viewBox="0 0 1400 530" role="img" aria-label="数据发现瓶颈，提出原因假设，更改页面一步，观察获值行为，决定保留或换假设，然后回到数据" style={{width:1400,height:530}}>
      <ChartDefs id="experiment-arrow"/>
      <ChartArrow id="experiment-arrow" d="M 310 115 L 516 115"/><ChartArrow id="experiment-arrow" d="M 840 115 L 1036 115"/><ChartArrow id="experiment-arrow" d="M 1180 178 Q 1280 240 1180 305"/><ChartArrow id="experiment-arrow" d="M 1040 380 L 710 380"/><ChartArrow id="experiment-arrow" d="M 400 380 Q 83 366 170 184"/>
      <ChartNode x={30} y={58} w={280} title="看数据" detail="100报名 → 20人获值" fill={colors.blue}/>
      <ChartNode x={540} y={58} w={300} title="找原因" detail="假设：领取步骤太多" fill={colors.yellow}/>
      <ChartNode x={1060} y={58} w={300} title="只改一处" detail="报名后直接显示指南" fill={colors.white}/>
      <ChartNode x={1040} y={320} w={320} title="观察关键行为" detail={result==='up'?'模拟：100人 → 35人获值':'模拟：100人 → 20人获值'} fill={colors.green}/>
      <ChartNode x={400} y={320} w={310} title="做下一步决定" detail={result==='up'?'继续验证，再扩大':'换假设，再实验'} fill={colors.red}/>
      <text x="78" y="315" fontSize="23" fontWeight="800" fill={colors.dark}>下一轮 ↺</text>
      <text x="690" y="246" textAnchor="middle" fontSize="29" fontWeight="800" fill={colors.dark}>目标：更多人真正获得价值</text>
    </svg>
    <div style={{position:'absolute',left:420,bottom:0,display:'flex',gap:16}}>{[['up','观察到改善'],['flat','没有改善']].map(([value,label])=><button key={value} onClick={()=>setResult(value as 'up'|'flat')} disabled={value===result} style={{fontFamily:fonts.body,fontSize:23,fontWeight:800,padding:'12px 28px',border:`2px solid ${colors.dark}`,borderRadius:999,background:value===result?colors.yellow:colors.white,color:colors.dark,cursor:value===result?'default':'pointer'}}>{label}</button>)}</div>
  </ChartFrame>;}
