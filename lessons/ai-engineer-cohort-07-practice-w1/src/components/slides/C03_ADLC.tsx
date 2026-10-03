import { Slide, Inner, Title, Tag, colors } from '../courseUi';
import { motion } from 'framer-motion';
export default function C03_ADLC(){return <Slide><Inner center><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}><Tag bg={colors.dark}>03</Tag><Title size="80px" style={{marginTop:32,textAlign:'center'}}>用 ADLC 推进完整 PRD</Title><p style={{fontSize:30,marginTop:28,color:'#514c48'}}>七步循环 · PRD 模板 · 验收与任务</p></motion.div></Inner></Slide>;}
