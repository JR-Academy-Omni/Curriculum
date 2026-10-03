import { Slide, Inner, Title, Tag, colors } from '../courseUi';
import { motion } from 'framer-motion';
export default function C06_Appendix(){return <Slide><Inner center><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}><Tag bg={colors.dark}>参考</Tag><Title size="80px" style={{marginTop:32,textAlign:'center'}}>延伸材料，课后继续练</Title><p style={{fontSize:30,marginTop:28,color:'#514c48'}}>Context · Skills · 产品验证 · Repo / Deploy</p></motion.div></Inner></Slide>;}
