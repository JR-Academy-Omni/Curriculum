import { Slide, Inner, Title, Tag, colors } from '../courseUi';
import { motion } from 'framer-motion';
export default function C05_Review(){return <Slide><Inner center><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}><Tag bg={colors.dark}>05</Tag><Title size="80px" style={{marginTop:32,textAlign:'center'}}>用证据完成验收与交接</Title><p style={{fontSize:30,marginTop:28,color:'#514c48'}}>Diff · Test · Human Review · W2 Handoff</p></motion.div></Inner></Slide>;}
