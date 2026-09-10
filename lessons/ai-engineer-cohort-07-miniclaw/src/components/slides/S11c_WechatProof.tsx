import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';

const screenshotUrl = 'https://jiangren.com.au/alumni-offers/ai-engineer-bootcamp/04-ey-vs-macquarie-2offers-chat.jpg';

export default function S11c_WechatProof(){return <DeckFrame tag="真实微信截图 · 隐私已打码" title="第 4 期学员同时拿到两个 AI 岗位 Offer" subtitle="一份是 EY Senior Consultant – AI Engineer，一份是 Macquarie Software Engineer – AI Enablement。截图已在官网公开使用。" accent={colors.yellow} titleSize={48}>
	<div style={{height:'100%',display:'grid',gridTemplateColumns:'.92fr 1.08fr',gap:34,minHeight:0}}>
		<AnimatedGroup delay={.08} style={{display:'flex',minHeight:0}}>
			<div style={{flex:1,background:'#f2f2f2',border:`2px solid ${colors.dark}`,borderRadius:22,boxShadow:`10px 10px 0 ${colors.yellow}`,padding:12,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
				<img src={screenshotUrl} alt="第 4 期学员同期获得 EY 与 Macquarie 两个 AI 岗位 Offer 的脱敏微信截图" style={{width:'100%',height:'100%',objectFit:'contain',borderRadius:14}} />
			</div>
		</AnimatedGroup>
		<AnimatedGroup delay={.2} style={{display:'flex'}}>
			<div style={{flex:1,background:colors.dark,color:colors.white,borderRadius:22,boxShadow:`10px 10px 0 ${colors.red}`,padding:'34px 38px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
				<Label bg={colors.red}>COHORT 04 · ALUMNI OUTCOME</Label>
				<div style={{fontFamily:fonts.heading,fontSize:39,fontWeight:900,lineHeight:1.18,marginTop:26}}>他来问的已经不是<br/>“能不能转 AI”</div>
				<div style={{fontSize:25,lineHeight:1.48,color:'#e8e9ee',marginTop:24}}>而是两个 AI 岗位摆在面前，今后想一直做 AI 技术，应该选哪一个。</div>
				<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginTop:26}}>
					<div style={{background:colors.white,color:colors.dark,borderRadius:16,padding:'16px 18px'}}><div style={{fontFamily:fonts.mono,fontSize:13,fontWeight:900,color:colors.red}}>EY</div><div style={{fontSize:19,fontWeight:900,marginTop:6}}>Senior Consultant<br/>AI Engineer</div><div style={{fontFamily:fonts.mono,fontSize:13,fontWeight:900,marginTop:10,color:'#765b00'}}>悉尼市场参考 ≈ US$69K–75K / 年</div></div>
					<div style={{background:colors.green,color:colors.dark,borderRadius:16,padding:'16px 18px'}}><div style={{fontFamily:fonts.mono,fontSize:13,fontWeight:900}}>MACQUARIE</div><div style={{fontSize:19,fontWeight:900,marginTop:6}}>Software Engineer<br/>AI Enablement</div><div style={{fontFamily:fonts.mono,fontSize:13,fontWeight:900,marginTop:10}}>悉尼市场参考 ≈ US$66K–72K / 年</div></div>
				</div>
				<div style={{fontSize:13,lineHeight:1.42,color:'#bfc3d1',marginTop:17}}>市场参考不是该学员 Offer 金额；按 A$1 = US$0.7232 换算。个人经历不代表所有人的结果，也不构成就业或薪资承诺。</div>
			</div>
		</AnimatedGroup>
	</div>
</DeckFrame>;}
