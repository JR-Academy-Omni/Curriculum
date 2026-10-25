import { Slide } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
const google='https://developers.google.com/search/docs/fundamentals/creating-helpful-content';
const rows=[
 ['Experience','亲手做过什么？','Simon 的 Datasette：可以打开工具、文档和代码，检查他实际做过的工作。','看成果与过程，不只看“多年经验”字样。','https://datasette.io/','打开 Datasette'],
 ['Expertise','对这个主题懂多少？','围绕数据工具的技术说明：读具体方法、代码和解释，判断是否讲得准确。','项目经历提供背景；这一篇的论证仍要成立。','https://docs.datasette.io/','打开技术文档'],
 ['Authoritativeness','相关领域谁认可？','Django 官方项目历史记录了 Simon 参与早期开发，能对照本人简介。','项目方的记录，比本人自称“行业专家”更可核对。','https://docs.djangoproject.com/en/dev/faq/general/','打开项目历史'],
 ['Trustworthiness','这次说法是否可信？','他的 About 页披露赞助与合作关系；文章还应给来源、适用条件与更正。','有名气仍要核对事实、利益关系和内容时效。','https://simonwillison.net/about/','打开 About 与披露']
];
export default function R49b_PersonEEAT(){return <Slide bg={colors.warmBg}><section style={{width:1600,height:900,position:'relative',color:colors.dark,fontFamily:fonts.body}}>
<header style={{position:'absolute',left:100,top:55,width:1400}}><div style={{fontSize:18,color:colors.red,fontWeight:800,letterSpacing:2}}>E-E-A-T · THE PERSON BEHIND THE CONTENT</div><h1 style={{fontSize:49,lineHeight:1.2,margin:'15px 0'}}>这篇文章是谁写的，为什么值得相信？</h1><p style={{fontSize:25,margin:0}}>用 Simon Willison 串起来：经历、作品、外部认可，最后落实到这篇内容是否可信。</p></header>
<main style={{position:'absolute',left:100,top:230,width:1400,display:'grid',gap:14}}>{rows.map((r,i)=><article key={r[0]} style={{display:'grid',gridTemplateColumns:'265px 1fr 310px',gap:25,padding:'12px 25px',background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:radii.card,height:125,boxSizing:'border-box',alignItems:'center'}}><div><strong style={{fontSize:25}}>{r[0]}</strong><div style={{fontSize:21,marginTop:6}}>{r[1]}</div></div><div style={{fontSize:22,lineHeight:1.4}}>{r[2]}<div style={{fontSize:19,marginTop:6,color:colors.indigo}}>{r[3]}</div></div><a href={r[4]} target="_blank" rel="noreferrer" style={{fontSize:22,color:colors.dark,fontWeight:750}}>{String(i+1).padStart(2,'0')} · {r[5]} ↗</a></article>)}</main>
<aside style={{position:'absolute',left:100,top:790,width:1400,fontSize:22,lineHeight:1.4,fontWeight:700}}>作者背景帮助判断可信度；正文质量与网站责任信息也要看。E-E-A-T 本身不是一个独立排名因子。</aside><a href={google} target="_blank" rel="noreferrer" style={{position:'absolute',right:100,bottom:18,fontSize:17,color:colors.dark}}>Google · E-E-A-T / Who / How ↗</a>
</section></Slide>}
