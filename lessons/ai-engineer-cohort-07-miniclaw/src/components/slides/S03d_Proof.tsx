import { AnimatedGroup, DeckFrame, Label } from '../deck';
import { colors, fonts } from '../ui';

export default function S03dProof(){return <DeckFrame
	tag="JR ACADEMY · 不是第一期试水"
	title="200+ 人学过，30+ 校友 Offer 反过来改课程"
	subtitle="我们不是先写一份大纲再找案例。学员在哪一周卡住、什么项目能进面试、企业继续追问什么，都会回到下一期课程。"
	accent={colors.red}
	titleSize={52}
>
	<div style={{height:'100%',display:'grid',gridTemplateColumns:'.78fr 1.22fr',gap:28}}>
		<AnimatedGroup delay={.12} style={{display:'flex'}}>
			<div style={{flex:1,background:colors.dark,color:colors.white,border:`2px solid ${colors.dark}`,borderRadius:20,padding:'30px 32px',boxShadow:`9px 9px 0 ${colors.red}`,display:'flex',flexDirection:'column',justifyContent:'center'}}>
				<Label bg={colors.red}>真实学习与就业反馈</Label>
				<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,marginTop:28}}>
					<div><div style={{fontFamily:fonts.heading,fontSize:58,fontWeight:900,color:colors.yellow}}>200+</div><div style={{fontSize:18,color:'#dfe1e9'}}>学员学习验证</div></div>
					<div><div style={{fontFamily:fonts.heading,fontSize:58,fontWeight:900,color:colors.green}}>30+</div><div style={{fontSize:18,color:'#dfe1e9'}}>校友真实 Offer</div></div>
				</div>
				<div style={{fontSize:14.5,lineHeight:1.45,color:'#abb1c3',marginTop:28}}>官网公开历史口径；个体结果不构成就业、薪资或入职承诺。</div>
			</div>
		</AnimatedGroup>
		<AnimatedGroup delay={.24} style={{display:'flex'}}>
			<div style={{flex:1,background:colors.white,border:`2px solid ${colors.dark}`,borderRadius:20,padding:'28px 30px',boxShadow:`9px 9px 0 ${colors.yellow}`}}>
				<Label bg={colors.yellow} color={colors.black}>一条完整训练链</Label>
				<div style={{display:'grid',gap:18,marginTop:24}}>
					{[
						['13 周主课','同一个 Production Agent System，从产品底座做到 Evals、Harness 与 Readiness。'],
						['12 周 P3','真实甲方 Brief、4–6 人团队、Sprint、PR Review、公开 Demo 与 Demo Day。'],
						['Career Evidence','把 Repo、架构取舍、运行指标和个人贡献写进简历，并练到面试能讲清。'],
					].map(([title,body],index)=><div key={title} style={{display:'grid',gridTemplateColumns:'155px 1fr',gap:18,alignItems:'start',borderTop:index?`1px solid #ddd7cd`:'none',paddingTop:index?17:0}}>
						<div style={{fontFamily:fonts.heading,fontSize:23,fontWeight:900}}>{title}</div>
						<div style={{fontSize:18,lineHeight:1.46,color:'#4e4945'}}>{body}</div>
					</div>)}
				</div>
				<div style={{fontFamily:fonts.heading,fontSize:24,fontWeight:900,marginTop:24,color:'#b12f2f'}}>不是一堆互不相干的 Demo，而是从学习、交付到求职证据的一套系统。</div>
			</div>
		</AnimatedGroup>
	</div>
</DeckFrame>;}
