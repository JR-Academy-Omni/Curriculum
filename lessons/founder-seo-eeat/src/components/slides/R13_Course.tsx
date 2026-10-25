import { Slide, assetPath } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
const ink=colors.dark;
const checks=[
 {name:'Article heading / H1',cn:'文章主标题',detail:'直接说明主题和读者能得到什么；关键词自然出现。',example:'厨房收纳：先给常用物品找位置',color:colors.red},
 {name:'Subheadings / H2 & H3',cn:'章节与小节',detail:'H2 划分问题，H3 展开细节；读标题就能看懂内容结构。',example:'H2 按使用频率分区 → H3 每天使用的物品',color:colors.blue},
 {name:'Images / Alt text / Caption',cn:'图片与说明',detail:'图片放在相关段落；文件名有含义，alt 描述信息，Caption 补充语境。',example:'white-kitchen-island.png + 图片说明',color:colors.orange},
 {name:'Internal links / Anchor text',cn:'站内链接与锚文本',detail:'在读者需要时链接相关页面；链接文字直接说明目标内容。',example:'厨房图片的 alt text 怎么写',color:colors.green},
];
export default function R13_Course(){return <Slide bg={colors.warmBg}><section className="onpage-example-slide" style={{width:1600,height:900,position:'relative',color:ink,fontFamily:fonts.body}}>
<style>{`@media(max-width:700px){.deck-runtime:has(.onpage-example-slide)>button{top:auto!important;bottom:20px;transform:none!important}}.onpage-example-slide a:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}`}</style>
<header style={{position:'absolute',left:100,top:72,width:1400}}><span style={{fontSize:18,fontWeight:750,color:colors.red,letterSpacing:2}}>SEO / GEO · PART 02</span><h1 style={{fontSize:52,margin:'14px 0 12px',lineHeight:1.2}}>On-page SEO：在网页上看懂四个检查点</h1><p style={{fontSize:24,margin:0}}>左边说检查什么，右边标出它在页面的什么位置。</p></header>
<div style={{position:'absolute',left:100,top:255,width:545,display:'grid',gap:14}}>{checks.map((x,i)=><article key={x.name} style={{height:132,boxSizing:'border-box',background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.card,padding:'13px 18px',borderLeft:`8px solid ${x.color}`}}><div style={{display:'flex',alignItems:'center',gap:12}}><b style={{background:x.color,color:ink,borderRadius:radii.label,padding:'1px 9px',fontSize:22}}>{i+1}</b><strong style={{fontSize:23}}>{x.name}</strong></div><p style={{fontSize:21,lineHeight:1.4,margin:'7px 0 4px'}}><b>{x.cn}：</b>{x.detail}</p></article>)}</div>
<div aria-hidden="true" style={{position:'absolute',left:665,top:490,fontSize:55,color:ink}}>→</div>
<article aria-label="带四处标注的厨房收纳文章示例" style={{position:'absolute',left:750,top:255,width:750,height:570,boxSizing:'border-box',background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.panel,overflow:'hidden',boxShadow:`7px 7px 0 ${colors.yellow}`}}>
<div style={{background:ink,color:colors.white,padding:'10px 22px',fontSize:17}}>示例文章 · Kitchen Notes / 收纳指南</div>
<div style={{padding:'15px 23px'}}>
<div style={{border:`3px solid ${colors.red}`,borderRadius:radii.label,padding:'8px 12px',display:'flex',gap:12,alignItems:'center'}}><b style={{color:colors.red,fontSize:25}}>1</b><strong style={{fontSize:28}}>厨房收纳：先给常用物品找位置</strong><span style={{fontSize:17,marginLeft:'auto'}}>H1</span></div>
<p style={{fontSize:20,lineHeight:1.5,margin:'9px 0'}}>先区分每天用、偶尔用和长期不用的物品，再决定放在哪里。</p>
<div style={{border:`3px solid ${colors.blue}`,borderRadius:radii.label,padding:'7px 12px',display:'flex',gap:13,alignItems:'center'}}><b style={{color:colors.blue,fontSize:25}}>2</b><div><div style={{fontSize:22,fontWeight:750}}>H2 · 按使用频率分区</div><div style={{fontSize:19,marginTop:3}}>H3 · 每天使用的物品</div></div></div>
<figure style={{margin:'11px 0',border:`3px solid ${colors.orange}`,borderRadius:radii.label,padding:9,display:'grid',gridTemplateColumns:'265px 1fr',gap:15}}>
<img src={assetPath('figures/white-kitchen.png')} alt="带中岛的白色厨房，右侧设有嵌入式烤箱" style={{width:265,height:157,objectFit:'cover',borderRadius:radii.label}}/>
<figcaption style={{fontSize:18,lineHeight:1.5}}><strong style={{fontSize:23,color:ink}}>3 · Image</strong><div><b>Alt text：</b>带中岛的白色厨房，右侧设有嵌入式烤箱。</div><div style={{marginTop:7}}><b>Caption：</b>白色厨房布局示例；照片来自原课件。</div></figcaption>
</figure>
<div style={{border:`3px solid ${colors.green}`,borderRadius:radii.label,padding:'9px 12px',fontSize:20,lineHeight:1.5}}><b style={{marginRight:12}}>4</b>想为图片写说明？查看 <a href="?page=19" style={{color:ink,fontWeight:750,textDecorationThickness:2}}>厨房图片的 alt text 怎么写</a>。</div>
</div></article>
</section></Slide>;}
