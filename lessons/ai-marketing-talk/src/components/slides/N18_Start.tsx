import ReferenceFrame from '../ReferenceFrame';
import { colors, fonts, border, shadow } from '../deck';

// Adapted from W1 fixed Workspace / load SoT / activate Skill and Marketing concrete file examples.
const FILES=[
 {name:'正式记录 SoT',meaning:'大家确认的资料',detail:'员工岗位 / 当前项目 / 负责人'},
 {name:'工作 Skills',meaning:'汇报与派工方法',detail:'补问什么 / 怎样派工 / 怎么检查'},
 {name:'执行步骤',meaning:'开始后，按顺序做',detail:'谁批准 / 用什么软件 / 出错找谁'},
 {name:'工作记录',meaning:'每轮执行记录',detail:'状态 / 结果 / 证据'},
];
export default function N18_Start(){
 return <ReferenceFrame stage="第一条试运行 · 员工汇报到任务完成" title="从员工汇报开始，跑通第一条公司流程" takeaway="完成标准：有负责人、有期限、有执行证据、能查到结果；超出批准规则时先审批，跑通后再扩展部门。">
  <div style={{display:'grid',gridTemplateColumns:'560px 1fr',gap:32,height:530}}>
   <section data-reference-panel style={{borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:colors.dark,color:colors.white,padding:30}}>
    <p style={{fontSize:18,fontWeight:800,color:colors.yellow}}>教学示例 · 先整理，再连接软件</p>
    <h2 style={{fontSize:36,fontWeight:900,marginTop:22}}>📁 员工汇报与任务工作区</h2>
    <div style={{fontFamily:fonts.body,fontSize:25,lineHeight:1.85,marginTop:24,color:colors.white}}>
     <div>① 员工提交汇报与证据</div><div>② 管理 Agent 补问、整理</div><div>③ 按规则派工 / 越界先审批</div><div>④ 员工或执行 Agent 完成</div><div>⑤ 核验结果，写入工作记录</div>
    </div>
    <p style={{fontSize:24,color:colors.yellow,lineHeight:1.5,marginTop:20}}>已有客户管理软件就用它<br/>不要再抄一份“最新版”</p>
   </section>
   <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
    {FILES.map((f,i)=><section data-reference-panel key={f.name} style={{borderRadius:24,overflow:'hidden',border,boxShadow:shadow,background:i===0?colors.yellow:colors.white,padding:23}}>
     <p style={{fontFamily:fonts.body,fontSize:23,fontWeight:800,color:colors.rose}}>{f.name}</p>
     <h2 style={{fontSize:29,fontWeight:900,marginTop:24}}>{f.meaning}</h2>
     <p style={{fontSize:23,lineHeight:1.5,marginTop:23}}>{f.detail}</p>
    </section>)}
   </div>
  </div>
 </ReferenceFrame>;
}
