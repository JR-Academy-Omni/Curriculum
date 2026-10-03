import { Slide, Inner, Title, Tag, colors } from '../courseUi';
import { motion } from 'framer-motion';
export default function C02_Product(){return <Slide><Inner center><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}><Tag bg={colors.dark}>02</Tag><Title size="80px" style={{marginTop:32,textAlign:'center'}}>把想法变成产品契约</Title><p style={{fontSize:30,marginTop:28,color:'#514c48'}}>Pages · CRUD · Components · Flow · Data</p></motion.div></Inner></Slide>;}
