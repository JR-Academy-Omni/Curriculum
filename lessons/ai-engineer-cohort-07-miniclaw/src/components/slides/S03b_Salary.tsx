import { AnimatedGroup, DeckFrame, Label } from '../deck';
import { colors, fonts } from '../ui';

const bands = [
	{ label: 'AI ENGINEER · 全国参考', value: 'A$165K', note: '2026 平均 base 参考', color: colors.blue },
	{ label: '高经验 / 稀缺能力', value: 'A$220K', note: '2026 高位 base 参考', color: colors.green },
	{ label: 'SENIOR · 悉尼', value: 'A$220K–340K', note: 'Senior AI Engineer base 参考', color: colors.red },
];

export default function S03bSalary(){return <DeckFrame
	tag="AUSTRALIA · AI ENGINEER SALARY"
	title="中高级 AI Engineer，市场已经在 A$160K–300K+"
	subtitle="这不是应届生统一起薪。薪资取决于经验、城市、行业、AI 深度，以及你能不能交付 Production 系统。"
	bg={colors.dark}
	accent={colors.yellow}
	titleSize={56}
>
	<div style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',gap:28}}>
		<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
			{bands.map((band,index)=><AnimatedGroup key={band.label} delay={.12+index*.1}>
				<div style={{background:'#202846',color:colors.white,border:`2px solid ${colors.white}`,borderRadius:20,padding:'27px 28px',boxShadow:`9px 9px 0 ${band.color}`}}>
					<Label bg={band.color} color={band.color===colors.red?colors.white:colors.black}>{band.label}</Label>
					<div style={{fontFamily:fonts.heading,fontSize:46,fontWeight:900,lineHeight:1,marginTop:24,letterSpacing:-1}}>{band.value}</div>
					<div style={{fontSize:18,color:'#dfe3ef',marginTop:16}}>{band.note}</div>
				</div>
			</AnimatedGroup>)}
		</div>
		<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:22,borderTop:'1px solid #4d5675',paddingTop:18,color:'#c9cfdf',fontSize:15.5,lineHeight:1.45}}>
			<span>来源：Pearson Carter Data & AI Salary Guide 2026；Re:Sourced Sydney Salary Guide 2026</span>
			<strong style={{color:colors.yellow}}>市场区间 ≠ 学员薪资承诺</strong>
		</div>
	</div>
</DeckFrame>;}
