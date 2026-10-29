import ReferenceFrame from '../ReferenceFrame';
import {colors,border,shadow} from '../deck';

const PARTS=[
 {name:'SoT · 正式记录',question:'现在什么信息算数？',items:['当前日期、客户、预算','确认人、版本、生效状态'],color:colors.yellow},
 {name:'Skills · 具体做法',question:'这件工作怎么做好？',items:['写稿、海报、审稿、跟进','明确输入、步骤和产出'],color:colors.purple},
 {name:'管理 Agent · 协调',question:'谁做、先做什么、卡在哪？',items:['拆任务、分负责人、定期限','收汇报、追结果、升级异常'],color:colors.rose},
 {name:'人和软件 · 执行',question:'谁真正完成操作与决定？',items:['员工、客户系统、财务软件','权限内操作，重要事项审批'],color:colors.blue},
];
export default function N12_BusinessGap(){
 return <ReferenceFrame stage="从一场活动推到公司 · 方案构成，不是运行结果" title="正式记录 + Skills + 管理协调，才能接起整件事" takeaway="一场活动如此；整家公司同时有多个项目、部门和员工，下一步把同样的结构放进一家中介公司。">
 <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
 {PARTS.map((p,i)=><section data-reference-panel key={p.name} style={{height:230,padding:'24px 28px',border,borderRadius:24,boxShadow:shadow,background:i===2?colors.dark:colors.white,color:i===2?colors.white:colors.dark}}>
 <p style={{fontSize:20,fontWeight:800,color:i===2?colors.yellow:colors.rose}}>0{i+1} · {p.question}</p>
 <h2 style={{fontSize:32,fontWeight:900,marginTop:14}}>{p.name}</h2>
 {p.items.map(t=><p key={t} style={{fontSize:24,marginTop:15,lineHeight:1.4}}>{t}</p>)}
 </section>)}
 </div>
 </ReferenceFrame>;
}
