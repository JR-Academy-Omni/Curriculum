import { useState } from 'react';
import { ChartFrame, chartSources } from '../GrowthChart';
import { colors, fonts } from '../deck';
export default function V01_Seeds(){
  const [retention,setRetention]=useState(.8);
  const rounds=[{active:20,retained:20,added:0,contributors:0}];
  for(let i=0;i<4;i++){const previous=rounds[i].active;const retained=Math.round(previous*retention);const contributors=Math.floor(previous*.4);const added=Math.min(contributors,200-retained);rounds.push({active:retained+added,retained,added,contributors});}
  const scale=6.8;
  return <ChartFrame tag="种子用户 01 · 队列教学模拟" title="第一批用户，会成为下一轮的推动者" subtitle="每周一轮：留下的人 + 老用户带来的新获值用户 = 下一轮活跃用户" footnote={<>{chartSources} 模拟：期初20人，40%贡献，每人带来2位去重访客、50%获值；本轮新人下一轮才贡献，人数取整；容量上限200。</>}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:66}}><div style={{fontSize:23,display:'flex',gap:28}}><span>● <b style={{color:colors.dark}}>留住的用户</b></span><span><span style={{color:colors.red}}>●</span> <b style={{color:'#d92e42'}}>本轮新获值用户</b></span></div><div style={{display:'flex',gap:12}}>{[[.8,'留存 80%'],[.5,'留存 50%']].map(([value,label])=><button key={value} onClick={()=>setRetention(Number(value))} disabled={retention===value} style={{fontFamily:fonts.body,fontSize:23,fontWeight:800,padding:'10px 22px',border:`2px solid ${colors.dark}`,borderRadius:999,background:retention===value?colors.yellow:colors.white,color:colors.dark,cursor:retention===value?'default':'pointer'}}>{label}</button>)}</div></div>
    <svg viewBox="0 0 1400 450" role="img" aria-label="五个周期的活跃用户人数，分别展示留住的用户和本轮新获值用户" style={{width:1400,height:450,overflow:'visible'}}>
      {[0,20,40,60].map(n=><g key={n}><line x1="52" x2="1300" y1={415-n*scale} y2={415-n*scale} stroke={colors.dark} strokeOpacity=".14"/><text x="35" y={422-n*scale} textAnchor="end" fontSize="18" fill={colors.dark}>{n}</text></g>)}
      {rounds.map((r,i)=>{const x=125+i*247;return <g key={i}><rect x={x} y={415-r.retained*scale} width="130" height={r.retained*scale} rx="14" fill={colors.dark}/>{r.added>0&&<rect x={x} y={415-r.active*scale} width="130" height={r.added*scale} rx="14" fill={colors.red}/>}<text x={x+65} y={396-r.active*scale} textAnchor="middle" fontSize="40" fontWeight="900" fill={colors.dark}>{r.active}</text><text x={x+65} y="446" textAnchor="middle" fontSize="23" fontWeight="800" fill={colors.dark}>{i===0?'20 位种子':`第 ${i} 周`}</text>{i>0&&<text x={x+65} y={415-r.retained*scale+24} textAnchor="middle" fontSize="20" fill={colors.white}>{r.retained} 留下</text>}{i>0&&<text x={x+65} y={415-r.active*scale+27} textAnchor="middle" fontSize="20" fontWeight="800" fill={colors.dark}>+{r.added} 新人</text>}</g>;})}
    </svg><div style={{position:'absolute',left:82,top:66,fontSize:17,color:colors.dark}}>人数（去重）</div>
  </ChartFrame>;
}
