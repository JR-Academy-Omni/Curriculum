import { Slide, Inner, Title, Tag, colors } from '../courseUi';
import { motion } from 'framer-motion';
export default function C01_SoT(){return <Slide><Inner center><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}><Tag bg={colors.dark}>01</Tag><Title size="80px" style={{marginTop:32,textAlign:'center'}}>先确定事实，再让 AI 做事</Title><p style={{fontSize:30,marginTop:28,color:'#514c48'}}>AI Coding · Source of Truth · 案例判断</p></motion.div></Inner></Slide>;}
