import { AnimatedGroup, DeckFrame, Label, colors, fonts } from '../deck';

const levels = [
	{
		index: '01',
		title: 'Demo Builder',
		responsibility: '证明功能能跑',
		evidence: ['Happy path', '一次正确输出', '现场演示'],
		color: colors.yellow,
		height: 292,
	},
	{
		index: '02',
		title: 'System Builder',
		responsibility: '把 AI 接进产品和数据',
		evidence: ['真实 Workflow', 'RAG / Tools / Agent', '权限与状态'],
		color: colors.blue,
		height: 330,
	},
	{
		index: '03',
		title: 'Production AI Engineer',
		responsibility: '对失败、质量和发布负责',
		evidence: ['Eval + Trace', '预算、审批、回退', 'Release Decision'],
		color: colors.green,
		height: 410,
	},
] as const;

export default function S12d_Maturity() {
	return <DeckFrame
		tag="企业真正买单的能力"
		title="能力升级，不是多学几个工具，是多承担一层责任"
		subtitle="作品集的差距也在这里：别人不只看你做了什么，还会追问为什么这样设计、失败怎么办、凭什么发布。"
		accent={colors.green}
		titleSize={48}
	>
		<div style={{display:'flex',alignItems:'flex-end',justifyContent:'center',gap:28,height:'100%',paddingBottom:6}}>
			{levels.map((level,index)=><AnimatedGroup key={level.index} delay={.12+index*.12}>
				<div style={{width:410,height:level.height,background:index===2?colors.dark:level.color,color:index===2?colors.white:colors.dark,border:`2px solid ${colors.dark}`,borderRadius:22,boxShadow:`10px 10px 0 ${level.color}`,padding:'22px 25px',display:'flex',flexDirection:'column'}}>
					<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><Label bg={level.color} color={level.color===colors.yellow||level.color===colors.green?colors.dark:colors.white}>{level.index}</Label><span style={{fontFamily:fonts.mono,fontSize:13,fontWeight:900}}>RESPONSIBILITY</span></div>
					<div style={{fontFamily:fonts.heading,fontSize:32,fontWeight:900,lineHeight:1.06,marginTop:17}}>{level.title}</div>
					<div style={{fontSize:20,fontWeight:850,lineHeight:1.3,marginTop:12}}>{level.responsibility}</div>
					<div style={{marginTop:'auto',display:'grid',gap:7}}>{level.evidence.map(item=><div key={item} style={{fontSize:16.5,fontWeight:750,padding:'7px 10px',background:index===2?'#252c47':'rgba(255,255,255,.72)',borderRadius:9}}>→ {item}</div>)}</div>
				</div>
			</AnimatedGroup>)}
		</div>
	</DeckFrame>;
}
