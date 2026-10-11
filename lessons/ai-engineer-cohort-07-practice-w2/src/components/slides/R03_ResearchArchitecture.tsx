import SourceFrame from '../SourceFrame';
import { Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseButton, CaseCode, CaseStyles } from '../CaseKit';
export default function R03_ResearchArchitecture(){return <SourceFrame tag="工程案例 · Anthropic Research · 2025" title="Lead 怎样把复杂问题交给多个 Agent" subtitle="原文的研究系统：计划、独立搜索、综合证据，再决定是否补充研究。" ids={['research']} scope="原系统流程简化重绘；右侧UI检查是JR迁移示例，不是原文的编码效果实验。">
<div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:28}}><div>
<Panel bg={colors.yellow} style={{padding:'16px 24px',textAlign:'center'}}><h2 style={{fontSize:27}}>用户问题 → Lead：规划 + 保存计划到 Memory</h2></Panel>
<div style={{display:'flex',justifyContent:'space-around',fontSize:30,margin:'8px 0'}}>↓ 委派　　　　　　　↓ 委派</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}><CaseNode title="Subagent A" body={<>独立上下文<br/>搜索工具 ↔ 发现与核查<br/>返回压缩后的证据</>} style={{height:180}}/><CaseNode title="Subagent B" color={colors.purple} body={<>独立上下文<br/>搜索工具 ↔ 发现与核查<br/>返回压缩后的证据</>} style={{height:180}}/></div>
<div style={{fontSize:25,textAlign:'center',margin:'10px 0'}}>↓ 返回证据 → Lead 综合 → Citation Agent → 答案</div>
<div style={{fontSize:22,textAlign:'center',fontWeight:800}}>↻ 证据不足：Lead追加或调整研究任务</div></div>
<Panel><Label>迁移到 CareKind</Label><p style={{fontSize:25,lineHeight:1.65,marginTop:24}}>先选可独立检查的部分：<br/>组件一致性、导航、状态。<br/>给目标、输出、工具和边界。<br/>集成人合并发现并复查。</p><CaseNote>共享文件多、依赖紧密时，先串行或缩范围。研究架构不是所有编码任务的默认方案。</CaseNote></Panel></div>
</SourceFrame>;}
