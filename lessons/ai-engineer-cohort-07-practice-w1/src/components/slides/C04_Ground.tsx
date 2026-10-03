import { Slide, Inner, Title, Tag, colors } from '../courseUi';
import { motion } from 'framer-motion';
export default function C04_Ground(){return <Slide><Inner center><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}><Tag bg={colors.dark}>04</Tag><Title size="80px" style={{marginTop:32,textAlign:'center'}}>给 Agent 一份可执行的上下文</Title><p style={{fontSize:30,marginTop:28,color:'#514c48'}}>Rules · Repo Map · CLAUDE.md · 受控改动</p></motion.div></Inner></Slide>;}
