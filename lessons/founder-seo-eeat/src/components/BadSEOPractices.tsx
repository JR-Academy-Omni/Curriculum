import { Slide, assetPath } from './ui';
import { colors, fonts, radii } from '../styles/theme';
const ink=colors.dark;
const rows=[
 ['Cloaking','伪装内容','给搜索引擎看旅游指南，给用户看无关广告。','看意图与实际内容差异；正常技术适配不等于伪装。'],
 ['Hidden text & links','隐藏文字与链接','白底白字堆关键词，用户看不到却让爬虫读取。','正常 Tabs、折叠内容和屏幕阅读器文本可以使用。'],
 ['Duplicate / Poor-quality content','重复／低质内容','批量复制文章或只换城市名，几乎没有新增信息。','重复本身不等于违规；批量操纵排名可属 Scaled content abuse。'],
 ['Doorway / Gateway pages','门页','建很多近似城市页，最后都把人送到同一预约页。','有真实本地服务信息的地区页，要看其独立价值。'],
 ['Swapping pages','诱导式换页','先用教程获取搜索曝光，再换成不兑现教程的促销页。','正常更新不是违规；欺骗性跳转对应 Sneaky redirects。'],
 ['Link farming / Link spam','链接农场／链接垃圾','一批网站只为排名而互相链接，或批量买外链。','编辑性引用不同；广告链接应正确标记 sponsored 等关系。'],
 ['Cybersquatting / Domain squatting','恶意域名抢注','注册易与他人品牌混淆的域名，借品牌引流或谋利。','属于域名权益问题；正常域名投资不能一概归入其中。'],
];
const button={fontFamily:fonts.body,fontSize:21,fontWeight:750,padding:'10px 20px',border:`2px solid ${ink}`,borderRadius:radii.card,color:ink,cursor:'pointer'};
export default function BadSEOPractices({mode,onSelect}:{mode:'stuffing'|'practices';onSelect:(mode:'links'|'stuffing'|'practices')=>void}){
 return <Slide bg={colors.warmBg}><section className="bad-seo-slide" style={{width:1600,height:900,position:'relative',fontFamily:fonts.body,color:ink}}>
 <style>{`.bad-seo-slide button:focus-visible,.bad-seo-slide a:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.bad-seo-slide)>button{top:auto!important;bottom:20px;transform:none!important}}`}</style>
 <header style={{position:'absolute',left:100,top:72,width:1400}}><span style={{color:colors.red,fontWeight:750,fontSize:18,letterSpacing:2}}>SEO / GEO · PART 02</span><h1 style={{fontSize:52,lineHeight:1.2,margin:'14px 0 12px'}}>Bad SEO Practices：{mode==='stuffing'?'Keyword Stuffing':'常见做法与具体边界'}</h1><p style={{fontSize:23,lineHeight:1.5,margin:0}}>{mode==='stuffing'?'关键词堆砌：反复塞入同一句关键词，读者却没有得到更多有用信息。':'保留英文名称；看具体行为、欺骗意图与内容价值，不能只凭一个标签判断。'}</p></header>
 <nav style={{position:'absolute',left:100,top:235,display:'flex',gap:15}}><button style={{...button,background:colors.white}} onClick={()=>onSelect('links')}>← 链接属性与 HTML</button><button aria-pressed={mode==='stuffing'} style={{...button,background:mode==='stuffing'?colors.yellow:colors.white}} onClick={()=>onSelect('stuffing')}>01 · Keyword Stuffing</button><button aria-pressed={mode==='practices'} style={{...button,background:mode==='practices'?colors.yellow:colors.white}} onClick={()=>onSelect('practices')}>02 · 其他常见做法</button></nav>
 {mode==='stuffing'?<>
 <figure style={{position:'absolute',left:100,top:325,width:790,margin:0}}><div style={{fontSize:22,fontWeight:750,marginBottom:12}}>反例：cheap flights 到处重复</div><img src={assetPath('materials/keyword-stuffing-cheap-flights.png')} alt="关键词堆砌反例：一段文字里不自然地反复出现 cheap flights，重复词组以红色标记" style={{width:790,height:395,objectFit:'contain',background:colors.white,borderRadius:radii.panel,border:`2px solid ${ink}`}}/></figure>
 <div style={{position:'absolute',left:940,top:325,width:560,display:'grid',gap:22}}><article style={{padding:'22px 25px',borderRadius:radii.panel,background:colors.white,border:`2px solid ${colors.red}`}}><strong style={{fontSize:25}}>问题不在于出现了关键词</strong><p style={{fontSize:23,lineHeight:1.5,margin:'12px 0 0'}}>它一直重复“便宜机票”，却没有说明航线、日期、行李和总价条件。</p></article><article style={{padding:'22px 25px',borderRadius:radii.panel,background:colors.white,border:`2px solid ${colors.green}`}}><strong style={{fontSize:25}}>改写示例：给出选择方法</strong><p style={{fontSize:23,lineHeight:1.5,margin:'12px 0 0'}}>比较悉尼至墨尔本的机票时，先选出发日期，再核对行李额和改签条件，最后比较含税总价。</p></article></div>
 <aside style={{position:'absolute',left:100,top:800,width:1400,fontSize:22,lineHeight:1.5}}>没有通用的“安全关键词密度”。自然写清主题，补充读者真正需要的信息。</aside>
 </>:<div style={{position:'absolute',left:100,top:315,width:1400}}><div style={{display:'grid',gridTemplateColumns:'365px 485px 1fr',gap:24,fontSize:19,fontWeight:750,padding:'0 12px 10px'}}><span>English term / 中文</span><span>具体反例（教学示例）</span><span>需要分清</span></div>{rows.map(([term,cn,example,boundary],i)=><article key={term} style={{display:'grid',gridTemplateColumns:'365px 485px 1fr',gap:24,alignItems:'center',boxSizing:'border-box',minHeight:72,padding:'8px 12px',borderTop:`1px solid ${ink}`,background:i%2===0?colors.white:'transparent',borderRadius:radii.label}}><div><strong style={{fontSize:20,lineHeight:1.3}}>{term}</strong><div style={{fontSize:18,marginTop:3}}>{cn}</div></div><p style={{fontSize:20,lineHeight:1.4,margin:0}}>{example}</p><p style={{fontSize:19,lineHeight:1.4,margin:0}}>{boundary}</p></article>)}</div>}
 <footer style={{position:'absolute',left:100,right:100,bottom:16,display:'flex',justifyContent:'space-between',fontSize:17}}><a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noreferrer" style={{color:ink}}>Google Search · Spam Policies ↗</a>{mode==='practices'&&<a href="https://www.icann.org/resources/pages/cybersquatting-2013-05-03-en" target="_blank" rel="noreferrer" style={{color:ink}}>ICANN · Cybersquatting ↗</a>}</footer>
 </section></Slide>;
}
