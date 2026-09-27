import { motion } from 'framer-motion';
import { Slide, Inner } from '../ui';
import { LargeQuote, Label, colors, fonts } from '../deck';
export default function S24_Close(){return <Slide bg={colors.dark} style={{position:'relative'}}><div aria-hidden style={{position:'absolute',top:10,right:12,width:132,height:48,background:'#fff',border:'2px solid #000'}}/><Inner center style={{gap:34}}>
	<motion.div initial={{opacity:0,y:-16}} animate={{opacity:1,y:0}}><Label bg={colors.yellow} color="#000">COHORT 05 · FINAL CHECK</Label></motion.div>
	<motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.12}} style={{fontFamily:fonts.heading,fontSize:62,lineHeight:1.08,color:'#fff',margin:0}}>现在，再回答开场的两个问题</motion.h1>
	<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:28,width:'100%'}}>
		<motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{delay:.25}}><LargeQuote accent={colors.blue}>我适合的岗位方向是什么？</LargeQuote></motion.div>
		<motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{delay:.35}}><LargeQuote accent={colors.red}>我拿什么证据证明自己？</LargeQuote></motion.div>
	</div>
	<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55}} style={{fontSize:25,lineHeight:1.45,color:'#ddd',maxWidth:1160}}>面对一个会变化、会失败、会产生副作用的 AI 系统，你能拆解问题、找到证据、做出工程决策，并知道什么时候不能发布。</motion.p>
</Inner></Slide>}
