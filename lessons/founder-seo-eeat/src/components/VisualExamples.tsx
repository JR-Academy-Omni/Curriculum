import type { SlideData } from '../data/slides';
import { CaseObject, caseObjects, RenderMechanism } from './CaseObjects';
export const examples=caseObjects;
export function VisualExamples({index}:{index:number;slide:SlideData}){return <CaseObject index={index}/>}
export function RenderPictures(){return <RenderMechanism/>}
export function OutcomeIllustration({ai=false}:{ai?:boolean}){return <div className="outcome-illustration"><div className="outcome-browser"><div className="browser-chrome"><i/><i/><i/><span>{ai?'内容与证据路径 · 教学示意':'Maple Slot · 虚构教学示意'}</span></div><div className="illustration-query">⌕ {ai?'如何检查跨地区预约的日期？':'Brisbane 预约时间检查'}</div><div className="illustration-result"><span>{ai?'完整方法 + 可追查来源':'搜索结果'}</span><h3>{ai?'保留 UTC 原值，核对完整日期':'三条记录，核对预约日期与时区'}</h3><p>{ai?'给出适用条件、步骤、证据与例外。':'先解决眼前任务，再帮助读者判断下一步。'}</p></div></div><div className="outcome-arrow">→</div><div className="outcome-sheet"><span>{ai?'可核对证据':'已完成的检查记录'}</span><h3>{ai?'结论有依据':'A-003 · 跨日检查'}</h3>{(ai?['固定输入与换算规则','可打开的完整方法','无证据效果承诺已删除']:['UTC · 17 Oct 15:00','Brisbane · 18 Oct 01:00','模拟显示 · 17 Oct 01:00']).map(x=><p key={x}>• {x}</p>)}<strong>{ai?'不需要特殊标记来代替内容':'得到方法 ≠ 已经购买软件'}</strong></div></div>}
