import ReferenceFrame from '../ReferenceFrame';
import { colors, border, shadow } from '../deck';
import { assetPath } from '../ui';

// Original assets and layout: S14b_XhsAudit, online legacy page 22.
const SHOTS=[{img:'3.png',cap:'① 检查敏感表述'},{img:'4.png',cap:'② 工具自评与修改建议'},{img:'1.png',cap:'③ 自检 / 配图 / 话题'},{img:'2.png',cap:'④ 另一版本的检查结果'}];
export default function R03_AuditEvidence(){
 return <ReferenceFrame stage="原Marketing案例 · 历史工具输出截图" title="写完之后，AI 的检查结果长什么样？" takeaway="这些是历史工具输出，不是平台审核保证；发布前仍需负责人确认。">
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'1fr 1fr',gap:18,height:535}}>
   {SHOTS.map(s=><section data-reuse-panel key={s.img} style={{background:colors.white,border,borderRadius:22,boxShadow:shadow,overflow:'hidden',display:'flex',flexDirection:'column',minHeight:0}}><h2 style={{fontSize:22,fontWeight:900,padding:'10px 18px',background:colors.rose,color:colors.white}}>{s.cap}</h2><div style={{flex:1,minHeight:0,padding:8,display:'flex',justifyContent:'center'}}><img src={assetPath('xhs-audit/'+s.img)} alt={s.cap+'，历史检查输出'} style={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain',borderRadius:8}}/></div></section>)}
  </div>
 </ReferenceFrame>;
}
