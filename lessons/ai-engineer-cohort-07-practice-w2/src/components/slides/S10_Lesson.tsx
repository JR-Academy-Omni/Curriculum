import { DeckFrame, Panel, Label, colors } from '../deck';
import { CaseNode, CaseNote, CaseCode, CaseButton, CaseStyles } from '../CaseKit';
export default function S10_Lesson(){return <DeckFrame tag="复用 L3 · TOKEN 三层" title="值可以变，组件认的语义保持稳定" subtitle="primitive → semantic → component；课堂例子沿用本课品牌token，不是已存在的starter字段。">
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:26}}><CaseNode title="① Primitive · 值" body={<><span style={{display:'inline-block',background:colors.red,width:34,height:34,borderRadius:10,verticalAlign:'middle'}}/> 珊瑚 / 品牌色<br/>字号与间距档位<br/>圆角与边框档位</>}/><CaseNode title="② Semantic · 意义" color={colors.purple} body={<>action → 主操作<br/>text → 内容<br/>surface → 容器<br/>error → 错误反馈</>}/><CaseNode title="③ Component · 用途" color={colors.green} body={<>Button → action<br/>Field → text / error<br/>StateBadge → 业务状态<br/>Panel → surface</>}/></div>
<Panel style={{marginTop:26,padding:24}}><div style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:25}}><b>同一 action token</b><span>→</span><span style={{background:colors.red,borderRadius:12,padding:'15px 28px'}}>保存草稿</span><span style={{background:colors.red,borderRadius:12,padding:'15px 28px'}}>确认记录</span><span>不同动作；同类层级</span></div></Panel>
<CaseNote>组件还需要明确状态、行为与可访问名称。只换颜色或只引用token，不足以证明设计一致。</CaseNote>
</DeckFrame>;}
