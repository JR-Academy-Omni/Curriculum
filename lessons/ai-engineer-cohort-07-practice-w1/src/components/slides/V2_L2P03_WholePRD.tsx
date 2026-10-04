// Adapted from vibe-coding-master-l2/L2P03_WholePRD; corrected scope and execution claims.
import { AnimatedGroup, DeckFrame, Label, Panel, colors, fonts } from '../deck';
export default function L2P03_WholePRD(){return <DeckFrame tag="ADLC · PRD TO EXECUTION" title="完整 PRD 给上下文，任务按范围执行" subtitle="Agent 需要理解完整产品目标；一次执行仍要写清改动范围、权限与验收。" titleSize={54}>
 <div style={{fontFamily:fonts.body,color:colors.dark,display:'grid',gap:26}}>
 <AnimatedGroup delay={.16} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:26}}>
 <Panel style={{padding:28}}><Label bg={colors.yellow} color={colors.dark}>产品上下文 · 长期依据</Label><h2 style={{fontSize:34,margin:'22px 0 18px'}}>完整 PRD 说明为什么做</h2><div style={{fontSize:28,lineHeight:1.6}}>用户与业务问题<br/>范围、主流程与数据<br/>权限、失败路径与验收条件</div></Panel>
 <Panel style={{padding:28}}><Label bg={colors.blue} color={colors.dark}>本次任务 · 执行边界</Label><h2 style={{fontSize:34,margin:'22px 0 18px'}}>Work Plan 说明这次做什么</h2><div style={{fontSize:28,lineHeight:1.6}}>允许修改的模块与数据<br/>拆分任务、指定负责人<br/>检查方法、确认节点与交付证据</div></Panel>
 </AnimatedGroup>
 <Panel bg={colors.dark} style={{padding:28,color:colors.white}}><strong style={{fontSize:31}}>确认任务 → Agent 实施 → 实际检查 → 人工 review → 授权后发布</strong><p style={{fontSize:25,lineHeight:1.5,margin:'18px 0 0'}}>可以由一个或多个 Agent 协作。User story 与任务拆分仍有用；<br/>完整 PRD 不等于整项目自动完成，也不自动授予部署或生产写入权限。</p></Panel>
 </div>
</DeckFrame>;}
