import { motion, useReducedMotion } from 'framer-motion';
import ReferenceFrame from '../ReferenceFrame';
import { colors } from '../deck';

// Five-layer architecture adapted from S13_Step3Skills; modules are proposed responsibilities.
const LAYERS=[
 {name:'信息来源层',sub:'把可用信息接进来',color:colors.purple,nodes:[['客户问题','咨询 / 常见疑问'],['行业话题','公开可用资料'],['搜索趋势','关注什么问题'],['评论反馈','意见 / 需求'],['产品资料','已确认事实'],['品牌素材','图片 / 案例']]},
 {name:'选题安排层',sub:'决定做什么、先做什么',color:colors.orange,nodes:[['汇总去重','合并重复话题'],['客户相关','是否适合受众'],['优先排序','价值 / 时机'],['候选主题','形成选题池'],['方向确认','负责人把关'],['内容排期','安排本轮工作']]},
 {name:'多平台生成层',sub:'同一主题，分别制作',color:colors.rose,nodes:[['小红书','笔记 / 话题'],['公众号','长文 / 排版'],['LinkedIn','专业表达'],['短视频','脚本 / 分镜'],['公司网站','介绍 / 问答'],['客户邮件','邀约 / 跟进']]},
 {name:'素材制作层',sub:'文字、图片、视频配套',color:colors.blue,nodes:[['封面图片','各平台尺寸'],['内文配图','图文配套'],['活动海报','宣传版本'],['视频素材','镜头 / 分镜'],['字幕说明','字幕 / 图片说明'],['品牌核对','风格 / 权利']]},
 {name:'发布与反馈层',sub:'批准才发，发后核验',color:colors.green,nodes:[['内容审核','事实 / 表述'],['负责人批准','不对就退回'],['渠道执行','授权 / 人工交接'],['发出核验','成功 / 失败'],['结果记录','可用报表 / 反馈'],['下一轮改进','提出修改建议']]},
];
export default function R01_ContentLayers(){
 const reduced=useReducedMotion();
 return <ReferenceFrame stage="把刚才的步骤合起来 · 五层架构 / 30个职责模块 · 方案示意" title="现在展开全貌：一整座内容工厂" takeaway="产出变多了，资料错误也会一起放大；接下来看看那些永远不是最后一版的 final。">
  <svg width="1380" height="554" style={{position:'absolute',inset:0}} aria-hidden>
   <defs><marker id="factory-down" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill={colors.rose}/></marker></defs>
   {[0,1,2,3].map(i=><g key={i}>{[490,750,1010].map(x=><path key={x} d={`M${x+i*26} ${i*110+90}L${x+(i+1)*26} ${(i+1)*110}`} stroke={colors.rose} strokeWidth="3" fill="none" markerEnd="url(#factory-down)"/>)}</g>)}
   <path d="M1284 485H1344V42H1180" fill="none" stroke={colors.rose} strokeWidth="3" strokeDasharray="8 6" markerEnd="url(#factory-down)"/>
  </svg>
  {LAYERS.map((layer,i)=><motion.section data-factory-layer key={layer.name} initial={reduced?false:{opacity:0,y:-12}} animate={{opacity:1,y:0}} transition={{delay:reduced?0:i*.15,duration:.35}} style={{position:'absolute',left:i*26,top:i*110,width:1180,height:90,background:colors.dark,color:colors.white,border:'2px solid '+colors.dark,borderRadius:22,boxShadow:`7px 7px 0 ${layer.color}`,padding:'10px 12px',display:'flex',gap:14}}>
   <div style={{width:240,flexShrink:0,display:'flex',alignItems:'center',gap:14}}>
    <span style={{width:44,height:54,flexShrink:0,borderRadius:12,background:layer.color,color:colors.dark,display:'grid',placeItems:'center',fontSize:28,fontWeight:900}}>0{i+1}</span>
    <div><h2 style={{fontSize:27,fontWeight:900,lineHeight:1.3}}>{layer.name}</h2><p style={{fontSize:17,lineHeight:1.4,color:layer.color,marginTop:6}}>{layer.sub}</p></div>
   </div>
   <div style={{flex:1,display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:10}}>{layer.nodes.map(n=><div data-factory-module key={n[0]} style={{borderRadius:13,background:colors.white,color:colors.dark,padding:'8px 9px',display:'flex',flexDirection:'column',justifyContent:'center',gap:5,borderTop:'4px solid '+layer.color}}><h3 style={{fontSize:21,fontWeight:900,lineHeight:1.3}}>{n[0]}</h3><p style={{fontSize:17,color:'#666',lineHeight:1.4,whiteSpace:'nowrap'}}>{n[1]}</p></div>)}</div>
  </motion.section>)}
  <p style={{position:'absolute',right:0,top:158,writingMode:'vertical-rl',fontSize:22,fontWeight:900,color:colors.rose,letterSpacing:4}}>反馈回到下一轮</p>
 </ReferenceFrame>;
}
