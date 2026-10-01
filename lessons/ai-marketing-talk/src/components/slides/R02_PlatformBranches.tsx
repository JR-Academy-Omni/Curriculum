import ReferenceFrame from '../ReferenceFrame';
import { colors, border, shadow } from '../deck';

// Source: S13b_MasterVariant, online legacy page 19. One source, platform rows, publication.
const PLATFORMS=[
 ['📕 小红书','短文 / 话题 / 痛点','竖版封面 / 图集'],
 ['📰 公众号','长文 / 引用 / 排版','头图 / 内文配图'],
 ['💼 LinkedIn','专业语气 / 行业观点','横版配图'],
 ['🔍 公司网站','产品介绍 / 常见问题','网页图 / 图片说明'],
];
export default function R02_PlatformBranches(){
 return <ReferenceFrame stage="扩大产出 · 一份底稿，多种平台版本" title="小红书跑通了，其他平台怎么一起做？" takeaway="同一主题，各平台分别生成和检查；图文之外，视频也能按步骤制作。">
  <div style={{display:'grid',gridTemplateColumns:'290px 1fr 220px',gap:34,height:455}}>
   <section data-reuse-panel style={{border,borderRadius:24,boxShadow:'6px 6px 0 '+colors.rose,background:colors.dark,color:colors.white,padding:24,display:'flex',flexDirection:'column',gap:22}}>
    <p style={{fontSize:20,color:colors.yellow,fontWeight:800}}>① 共用来源</p><h2 style={{fontSize:36,fontWeight:900}}>📄 内容底稿</h2>
    <p style={{fontSize:24,lineHeight:1.6}}>卖给谁 / 客户问题<br/>已确认事实与案例<br/>品牌语气与禁区<br/>可使用的图片素材</p>
    <p style={{fontSize:21,color:colors.yellow,lineHeight:1.5,marginTop:'auto'}}>有人确认<br/>有日期、有修改记录</p>
   </section>
   <div style={{display:'grid',gridTemplateRows:'repeat(4,1fr)',gap:14}}>{PLATFORMS.map(p=><section data-reuse-panel key={p[0]} style={{border,borderRadius:18,boxShadow:shadow,background:colors.white,padding:'14px 20px',display:'grid',gridTemplateColumns:'190px 1fr',alignItems:'center',gap:18}}><h2 style={{fontSize:27,fontWeight:900}}>→ {p[0]}</h2><div><p style={{fontSize:22,fontWeight:800}}>{p[1]}</p><p style={{fontSize:20,color:'#666',marginTop:8}}>配图：{p[2]}</p></div></section>)}</div>
   <section data-reuse-panel style={{border,borderRadius:24,boxShadow:shadow,background:colors.green,padding:22,display:'flex',flexDirection:'column',justifyContent:'center',gap:25}}><p style={{fontSize:20,fontWeight:800}}>③ 分别确认</p><h2 style={{fontSize:32,fontWeight:900,lineHeight:1.4}}>检查<br/>批准<br/>发布</h2><p style={{fontSize:22,lineHeight:1.5}}>授权渠道执行<br/>其他人工交接<br/>核验发布结果</p></section>
  </div>
  <div style={{marginTop:23,padding:'17px 22px',borderRadius:18,background:colors.dark,color:colors.yellow,fontSize:23,fontWeight:800}}>↶ 各平台的可用反馈 → 记录下来 → 提出下一轮改法</div>
 </ReferenceFrame>;
}
