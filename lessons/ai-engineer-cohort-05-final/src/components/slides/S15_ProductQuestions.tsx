import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';
const qs=[['USER','谁在什么环境中使用？'],['JOB','用户原来要完成什么工作？'],['PAIN','成本、等待、错误在哪里？'],['AI FIT','规则或搜索是否已经够用？'],['WORKFLOW','输出会触发什么下一步？'],['SUCCESS','什么结果说明产品有用？'],['FAILURE','答错或越权会造成什么？'],['BOUNDARY','什么时候必须交给人？']];
export default function S15_ProductQuestions(){return <DeckFrame tag="PRODUCT CHECK" title="AI Engineer 写代码前的八个产品问题" accent={colors.yellow}>
	<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18,height:'100%',alignContent:'center'}}>{qs.map((q,i)=><AnimatedGroup key={q[0]} delay={.07+i*.05}><div style={{height:170,border:'3px solid #000',boxShadow:'4px 4px 0 #000',background:i===3||i===7?colors.yellow:'#fff',padding:18}}><div style={{fontFamily:fonts.mono,fontSize:16,fontWeight:800,color:'#6b1f86'}}>{String(i+1).padStart(2,'0')} · {q[0]}</div><div style={{fontSize:24,fontWeight:850,lineHeight:1.3,marginTop:18}}>{q[1]}</div></div></AnimatedGroup>)}</div>
</DeckFrame>}
