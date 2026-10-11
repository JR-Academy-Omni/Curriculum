import { useState } from 'react';
import SourceFrame from '../SourceFrame';
import { Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseButton, CaseCode, CaseStyles } from '../CaseKit';
const levels=[{label:'① 元数据',title:'先发现：何时需要这个 Skill',text:'name / description',case:'遇到“拆UI任务、安排Owner与依赖”时，识别carekind-task-plan。'},{label:'② 指令',title:'选中以后：读取完整做法',text:'SKILL.md 正文',case:'读需求 → 列成果 → 排依赖 → 定范围 → 输出任务卡 → 核查。'},{label:'③ 按需资料',title:'遇到具体需要：读取补充材料',text:'references / assets / scripts',case:'缺状态规则时读候选契约；输出时读任务卡模板。只取当前需要的资料。'}];
export default function R05_SkillLayers(){const[n,setN]=useState(0);const x=levels[n];return <SourceFrame tag="机制图解 · Agent Skills" title="从“知道有这个 Skill”到“按步骤完成”" subtitle="按需加载：元数据 → 指令 → 补充资源；图中不表示token数量或调用成本。" ids={['skills','skills-spec']} scope="加载机制概念重绘，CareKind内容由JR编写；具体运行时的发现与触发方式另行核查。">
<div className="w2-case"><CaseStyles/><div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:22}}>{levels.map((l,i)=><button key={l.label} aria-pressed={n===i} onClick={()=>setN(i)} style={{border:`2px solid ${colors.dark}`,borderRadius:18,background:n===i?colors.yellow:colors.white,textAlign:'left',padding:24,cursor:'pointer',color:colors.dark}}><b style={{fontSize:28}}>{l.label}</b><div style={{fontSize:23,marginTop:18}}>{l.text}</div></button>)}</div><Panel bg={colors.dark} style={{color:colors.white,marginTop:26,padding:28}}><h2 data-skill-layer style={{fontSize:32}}>{x.title}</h2><p style={{fontSize:28,lineHeight:1.7,marginTop:24}}>{x.case}</p></Panel></div>
</SourceFrame>;}
