import { useState } from 'react';
import SourceFrame from '../SourceFrame';
import { Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseButton, CaseCode, CaseStyles } from '../CaseKit';
const modes=[
{title:'提问 Asking',color:colors.blue,role:'人提出具体问题，AI给出回应。',case:'问Agent：Draft和Review分别应显示什么操作？',evidence:'检查回答是否符合当前候选契约。'},
{title:'探索 Exploration',color:colors.purple,role:'借助AI展开可能方向，逐步明确问题。',case:'探索两种Documentation布局，找出信息密度和操作步骤的差异。',evidence:'保留方向比较与最终选择理由。'},
{title:'协作 Collaboration',color:colors.green,role:'人持续参与，和AI一起推进、判断与修改。',case:'员工和自己的Agent边看页面边改；接口冲突时找共享组件Owner协调。',evidence:'记录问题、证据、决定和复查。'},
{title:'委派 Delegation',color:colors.orange,role:'交给AI一项有边界的工作，再检查结果。',case:'按六格Brief委派状态检查；提交发现、截图与未检查范围。',evidence:'按任务验收，结果交给人收口。'}];
export default function R01_WorkModes(){const[index,setIndex]=useState(2);const m=modes[index];return <SourceFrame tag="外部框架 · Microsoft WTI 2026" title="同一个团队，会切换四种合作模式" subtitle="按任务选择模式；委派越多，不代表人越不用负责。" ids={['microsoft']} scope="按四种模式概念改编；下方CareKind任务为JR示例。卡片位置不对应原文坐标。">
<div className="w2-case"><CaseStyles/><div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18}}>{modes.map((x,i)=><button key={x.title} aria-pressed={index===i} onClick={()=>setIndex(i)} style={{padding:20,minHeight:150,border:`2px solid ${colors.dark}`,borderRadius:18,background:index===i?x.color:colors.white,color:colors.dark,textAlign:'left',cursor:'pointer'}}><h2 style={{fontSize:25}}>{x.title}</h2><p style={{fontSize:21,lineHeight:1.45,marginTop:16}}>{x.role}</p></button>)}</div><Panel style={{marginTop:24,padding:'24px 28px'}}><Label bg={m.color} color={colors.dark}>CareKind · 课堂迁移</Label><h2 data-mode-case style={{fontSize:29,lineHeight:1.5,marginTop:20}}>{m.case}</h2><p style={{fontSize:24,marginTop:18}}><b>留下什么：</b>{m.evidence}</p></Panel></div>
</SourceFrame>;}
