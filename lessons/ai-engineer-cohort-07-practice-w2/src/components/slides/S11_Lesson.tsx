import { useState } from 'react';
import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function S11_Lesson(){const[state,setState]=useState('默认');return <DeckFrame tag="CareKind · COMPONENT STATES" title="一个组件，要看见它的状态" subtitle="切换状态检查反馈与可用动作；提交中和错误为本地模拟。">
<div className="w2-case"><CaseStyles/><div style={{display:'flex',gap:16,marginBottom:26}}>{['默认','焦点','禁用','提交中','错误'].map(x=><CaseButton key={x} active={state===x} onClick={()=>setState(x)}>{x}</CaseButton>)}</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:28}}><Panel><Label>保存按钮样例</Label><div style={{margin:'55px 0 38px'}}><CaseButton disabled={['禁用','提交中'].includes(state)} style={{fontSize:28,background:colors.yellow,outline:state==='焦点'?`4px solid ${colors.indigo}`:undefined,outlineOffset:4}}>{state==='提交中'?'保存中…':'保存草稿'}</CaseButton></div><div role="status" style={{fontSize:26,color:colors.dark}}>{state==='错误'?'保存失败：草稿仍保留，请重试。':state==='禁用'?'当前缺少记录内容，保存不可用。':state==='焦点'?'此处展示焦点样式；也请用 Tab 实际检查。':state==='提交中'?'等待模拟结果；防止重复提交。':'可以保存；保存之后仍是草稿。'}</div></Panel><Panel><h2 style={{fontSize:31}}>每次都检查</h2><p style={{fontSize:28,lineHeight:1.8,marginTop:30}}>状态有可读文字<br/>按钮禁用理由明确<br/>焦点能看见<br/>失败保留输入与恢复入口</p><CaseNote>相同规则应用到完整页面；下页演示保存、送审和确认。</CaseNote></Panel></div></div>
</DeckFrame>;}
