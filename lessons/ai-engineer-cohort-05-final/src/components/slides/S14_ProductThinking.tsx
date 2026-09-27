import { DeckFrame, Panel, Label, AnimatedGroup, colors, fonts } from '../deck';
export default function S14_ProductThinking(){return <DeckFrame tag="42–57 MIN · PRODUCT THINKING" title="技术让功能运行，产品判断决定它是否值得存在" accent={colors.yellow} titleSize={53}>
	<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:34,height:'100%'}}>
		<AnimatedGroup delay={.14} style={{display:'flex'}}><Panel style={{flex:1,borderTop:`14px solid ${colors.red}`}}><Label bg={colors.red}>FEATURE THINKING</Label><div style={{fontFamily:fonts.heading,fontSize:40,fontWeight:900,lineHeight:1.25,marginTop:28}}>做一个能回答政策问题的 chatbot</div><div style={{fontSize:23,color:'#5b5750',marginTop:28}}>功能存在，但没有说明谁用、怎样进入工作、答错后发生什么。</div></Panel></AnimatedGroup>
		<AnimatedGroup delay={.26} style={{display:'flex'}}><Panel bg="#fff6cc" style={{flex:1,borderTop:`14px solid ${colors.green}`}}><Label bg={colors.green} color={colors.black}>PRODUCT THINKING</Label><div style={{fontFamily:fonts.heading,fontSize:36,fontWeight:900,lineHeight:1.25,marginTop:28}}>减少一线员工查找、理解和填写政策材料的时间</div><div style={{fontSize:23,color:'#3d3a36',marginTop:24}}>保留人工责任边界和审核记录，让输出真正进入 workflow。</div></Panel></AnimatedGroup>
	</div>
</DeckFrame>}
