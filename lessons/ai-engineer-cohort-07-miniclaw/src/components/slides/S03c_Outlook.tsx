import { AnimatedGroup, DeckFrame, Label } from '../deck';
import { colors, fonts } from '../ui';

const stats = [
	{ value: '41,000', label: '澳洲含 AI 技能的招聘广告', note: '2025 年；2024 年约 20,000', color: colors.yellow },
	{ value: '+81.2%', label: 'AI Developer 岗位增长', note: '澳洲 2025 年同比', color: colors.blue },
	{ value: '+174.4%', label: 'Agentic AI 技能需求', note: 'SEEK 2026 年 6 月同比', color: colors.green },
	{ value: '+123.2%', label: 'AI Ethics & Governance', note: 'SEEK 2026 年 6 月同比', color: colors.red },
];

export default function S03cOutlook(){return <DeckFrame
	tag="就业前景 · AUSTRALIA 2026"
	title="企业缺的不是“会用 AI”，而是能把 AI 交付上线的人"
	subtitle="招聘需求正在往 Agent、治理和 Production 能力集中——正好也是第七期从 W6 一直练到 W13 的内容。"
	accent={colors.green}
	titleSize={52}
>
	<div style={{height:'100%',display:'flex',flexDirection:'column',gap:24}}>
		<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
			{stats.map((stat,index)=><AnimatedGroup key={stat.value} delay={.1+index*.08}>
				<div style={{background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:18,padding:'22px 22px',boxShadow:`8px 8px 0 ${stat.color}`,borderTop:`10px solid ${stat.color}`}}>
					<div style={{fontFamily:fonts.heading,fontSize:43,fontWeight:900,lineHeight:1}}>{stat.value}</div>
					<div style={{fontSize:20,fontWeight:900,lineHeight:1.25,marginTop:16}}>{stat.label}</div>
					<div style={{fontSize:15.5,color:'#6b645e',marginTop:10}}>{stat.note}</div>
				</div>
			</AnimatedGroup>)}
		</div>
		<AnimatedGroup delay={.42} style={{display:'grid',gridTemplateColumns:'.78fr 1.22fr',gap:22,flex:1}}>
			<div style={{background:colors.dark,color:colors.white,border:`2px solid ${colors.dark}`,borderRadius:18,padding:'22px 26px',boxShadow:`8px 8px 0 ${colors.yellow}`}}>
				<Label bg={colors.yellow} color={colors.black}>为什么相对抗 AI</Label>
				<div style={{fontFamily:fonts.heading,fontSize:27,fontWeight:900,lineHeight:1.25,marginTop:15}}>AI 可以生成答案，不能替公司承担上线责任</div>
			</div>
			<div style={{background:'#effbea',border:`2px solid ${colors.dark}`,borderRadius:18,padding:'22px 26px',boxShadow:`8px 8px 0 ${colors.green}`}}>
				<div style={{fontFamily:fonts.heading,fontSize:24,fontWeight:900}}>真正值钱的是：架构、数据、权限、评测、成本、故障和发布判断</div>
				<div style={{fontSize:17.5,lineHeight:1.48,color:'#424c3d',marginTop:12}}>WEF 把 AI / ML Specialist 列为到 2030 年增长最快的岗位之一。不是“永远不会被替代”，而是站在设计、部署和治理 AI 的一侧。</div>
			</div>
		</AnimatedGroup>
	</div>
</DeckFrame>;}
