import { useState } from 'react';
import SourceFrame from '../SourceFrame';
import { Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseButton, CaseCode, CaseStyles } from '../CaseKit';
const steps=[
{label:'① Issue',title:'人写清任务和验收',body:'CK-UI-02：保存护理记录草稿。空输入提示；失败保留内容；保存后仍是Draft。',artifact:"Owner：B / Reviewer：C\n范围：记录页面\n依赖：候选状态契约和共享组件"},
{label:'② 委派',title:'Agent读取上下文后执行',body:'给允许与禁止范围、当前设计规范和检查要求；跟踪进展，发现阻塞就补问。',artifact:"读取PRD / DESIGN.md / 契约\n限定本人文件范围\n实现 → 检查 → 提交修改"},
{label:'③ PR',title:'交付变更和检查证据',body:'PR让接手者看见修改范围、实现结果和未验证项。',artifact:"示意PR：CK-UI-02草稿保存\nDiff + 空输入/失败截图\n当前契约版本 + 检查结果"},
{label:'④ Review',title:'人的反馈要指向具体行为',body:'“失败时内容保留了，但没有重试入口。请补恢复动作，再检查失败路径。”',artifact:"反馈 → Agent修改 → 新证据\nReviewer再次走原路径\n未检查部分明确列出"},
{label:'⑤ 集成',title:'复查以后，由有权限的人合并',body:'各分支通过不等于整条UI路径通过。核查对象→记录→送审→复核，保留结论。',artifact:"Review通过 / 集成检查\n合并记录 / 未验证项\n反馈进入下一张任务"}];
export default function R04_IssueToReview(){const[n,setN]=useState(0);const x=steps[n];return <SourceFrame tag="产品流程 · GitHub Copilot" title="任务交给 Agent，交付回到团队评审" subtitle="点五个步骤，查看CK-UI-02怎样从需求变成可评审成果。" ids={['github']} scope="依据官方Issue/PR/反馈流程改编；所有任务、PR和Review文本是本地模拟，没有发送或触发Copilot。">
<div className="w2-case"><CaseStyles/><div style={{display:'flex',gap:15,marginBottom:26}}>{steps.map((x,i)=><CaseButton key={x.label} active={n===i} aria-pressed={n===i} onClick={()=>setN(i)}>{x.label}</CaseButton>)}</div><div style={{display:'grid',gridTemplateColumns:'1.1fr 1fr',gap:28}}><Panel><Label bg={colors.yellow} color={colors.dark}>CareKind · 课堂交付</Label><h2 data-delivery-step style={{fontSize:32,marginTop:24}}>{x.title}</h2><p style={{fontSize:27,lineHeight:1.65,marginTop:24}}>{x.body}</p></Panel><CaseCode style={{fontSize:27,lineHeight:1.9,minHeight:295}}>{x.artifact}</CaseCode></div></div>
</SourceFrame>;}
