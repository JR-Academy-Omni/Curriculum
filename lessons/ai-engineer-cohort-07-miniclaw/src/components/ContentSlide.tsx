import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, AnimatedGroup } from './deck';
import { colors, fonts, radii } from './ui';
import type { SlideSpec } from '../data/slides';

const textColor = (color?: string) => color === colors.yellow || color === colors.green || color === colors.blue ? colors.black : colors.white;

export default function ContentSlide({ spec }: { spec: SlideSpec }) {
	const bg = spec.dark ? colors.dark : colors.warmBg;
	if (spec.layout === 'cover') return <DeckFrame tag={spec.tag} title={spec.title} subtitle={spec.subtitle} bg={bg} accent={spec.accent} titleSize={76}>
		<div style={{display:'grid',gridTemplateColumns:'1.28fr .72fr',gap:46,height:'100%',alignItems:'center'}}>
			<div><div style={{fontSize:30,lineHeight:1.55,color:spec.dark?'#e6e8f2':'#333',maxWidth:780}}>{spec.lead}</div></div>
			<Panel bg={spec.dark?colors.yellow:colors.white} style={{whiteSpace:'pre-line',fontFamily:fonts.mono,fontSize:24,lineHeight:1.75,fontWeight:800,color:colors.dark,borderRadius:radii.panel}}>{spec.aside}</Panel>
		</div>
	</DeckFrame>;

	if (spec.layout === 'cta') return <DeckFrame tag={spec.tag} title={spec.title} subtitle={spec.subtitle} bg={bg} accent={spec.accent} titleSize={66}>
		<div style={{height:'100%',display:'grid',placeItems:'center'}}><a href="https://jiangren.com.au/program-course/ai-engineer-bootcamp" target="_blank" rel="noreferrer" style={{fontFamily:fonts.mono,fontSize:30,fontWeight:800,color:colors.dark,textDecoration:'none',background:colors.yellow,border:`3px solid ${colors.dark}`,borderRadius:18,boxShadow:`10px 10px 0 ${colors.red}`,padding:'34px 46px'}}>{spec.aside}</a></div>
	</DeckFrame>;

	if (spec.layout === 'code') return <DeckFrame tag={spec.tag} title={spec.title} subtitle={spec.subtitle} bg={bg} accent={spec.accent} titleSize={54}>
		<div style={{display:'grid',gridTemplateColumns:'1.35fr .65fr',gap:30,height:'100%',alignItems:'center'}}>
			<motion.pre initial={{opacity:0,x:-24}} animate={{opacity:1,x:0}} style={{margin:0,whiteSpace:'pre-wrap',background:'#080b1b',color:'#ecf0ff',border:`2px solid ${colors.dark}`,borderRadius:18,boxShadow:`9px 9px 0 ${spec.accent}`,padding:28,fontFamily:fonts.mono,fontSize:20,lineHeight:1.55}}>{spec.code}</motion.pre>
			<Panel style={{whiteSpace:'pre-line',fontSize:23,lineHeight:1.65,fontWeight:750}}>{spec.aside}</Panel>
		</div>
	</DeckFrame>;

	const items = spec.items ?? [];
	if (spec.layout === 'architecture') return <DeckFrame tag={spec.tag} title={spec.title} subtitle={spec.subtitle} bg={bg} accent={spec.accent} titleSize={54}>
		<div style={{height:'100%',display:'grid',gridTemplateColumns:`repeat(${items.length > 4 ? 3 : 4},1fr)`,gap:items.length > 4 ? 18 : 24,alignItems:'center'}}>{items.map((it,i)=><AnimatedGroup key={it.title} delay={.12+i*.07}><div style={{position:'relative',minHeight:items.length > 4 ? 156 : 250,background:spec.dark?'#202846':colors.white,border:`2px solid ${colors.dark}`,borderRadius:22,boxShadow:`8px 8px 0 ${it.color}`,padding:items.length > 4 ? 20 : 24,color:spec.dark?colors.white:colors.dark}}><Label bg={it.color} color={textColor(it.color)}>{it.label}</Label><div style={{fontFamily:fonts.heading,fontSize:items.length > 4 ? 29 : 34,fontWeight:900,marginTop:items.length > 4 ? 16 : 26}}>{it.title}</div><div style={{fontSize:items.length > 4 ? 18 : 21,lineHeight:1.4,marginTop:10}}>{it.body}</div>{items.length <= 4&&i<items.length-1&&<div style={{position:'absolute',right:-28,top:'50%',width:28,height:4,background:colors.dark}}/>}</div></AnimatedGroup>)}</div>
	</DeckFrame>;

	if (spec.layout === 'flow') return <DeckFrame tag={spec.tag} title={spec.title} subtitle={spec.subtitle} bg={bg} accent={spec.accent} titleSize={54}>
		<div style={{height:'100%',display:'flex',alignItems:'center',gap:28}}>{items.map((it,i)=><AnimatedGroup key={it.title} delay={.1+i*.08} style={{flex:1}}><div style={{position:'relative',minHeight:190,display:'flex',flexDirection:'column',justifyContent:'center',background:it.color,border:`2px solid ${colors.dark}`,borderRadius:20,boxShadow:`7px 7px 0 ${colors.dark}`,padding:22,color:textColor(it.color)}}><div style={{fontFamily:fonts.mono,fontSize:16,fontWeight:800}}>{it.label}</div><div style={{fontFamily:fonts.heading,fontSize:27,fontWeight:900,lineHeight:1.2,marginTop:18}}>{it.title}</div>{i<items.length-1&&<div style={{position:'absolute',right:-31,top:'50%',width:30,height:4,background:colors.dark}}/>}</div></AnimatedGroup>)}</div>
	</DeckFrame>;

	const cols = spec.layout === 'stats' ? Math.min(items.length, 4) : spec.layout === 'compare' ? 2 : items.length;
	return <DeckFrame tag={spec.tag} title={spec.title} subtitle={spec.subtitle} bg={bg} accent={spec.accent} titleSize={54}>
		<div style={{height:'100%',display:'grid',gridTemplateColumns:`repeat(${cols},1fr)`,gap:28,alignItems:'center'}}>{items.map((it,i)=><AnimatedGroup key={it.title} delay={.12+i*.08}><Panel bg={spec.dark?'#202846':colors.white} style={{minHeight:spec.layout==='stats'?235:275,color:spec.dark?colors.white:colors.dark,borderTop:`12px solid ${it.color}`}}><Label bg={it.color} color={textColor(it.color)}>{it.label}</Label><div style={{fontFamily:fonts.heading,fontSize:spec.layout==='stats'?50:34,fontWeight:900,lineHeight:1.1,marginTop:24}}>{it.title}</div>{it.body&&<div style={{fontSize:21,lineHeight:1.48,marginTop:18,color:spec.dark?'#e2e4ee':'#45403d'}}>{it.body}</div>}</Panel></AnimatedGroup>)}</div>
	</DeckFrame>;
}
