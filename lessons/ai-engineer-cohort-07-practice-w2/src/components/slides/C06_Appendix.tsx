import { Slide, Inner, Title, Tag, colors } from '../courseUi';
import { motion } from 'framer-motion';
export default function C06_Appendix(){return <Slide><Inner center><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}><Tag bg={colors.dark}>W2 · 第2部分</Tag><Title size="80px" style={{marginTop:32,textAlign:'center'}}>W2 进阶练习</Title><p style={{fontSize:30,marginTop:28,color:'#514c48'}}>Context · Skills · 产品验证 · 项目管理 / Deploy</p></motion.div></Inner></Slide>;}
