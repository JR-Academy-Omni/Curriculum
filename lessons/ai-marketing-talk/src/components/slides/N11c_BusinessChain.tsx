import SystemDiagram from '../SystemDiagram';

// Same proposed event change; Skill existence does not prove a running orchestration.
export default function N11c_BusinessChain(){
 return <SystemDiagram stage="同一次改期 · 在执行能力之上增加管理层" title="增加管理 Agent：把变化变成有人负责的工作" takeaway="管理层协调，Skill 执行具体步骤；按批准规则派工，超预算或对外承诺等事项先找负责人。"
 nodes={[
 {id:'sot',x:0,y:175,w:255,h:180,title:'正式活动记录',kind:'store',sub:'新日期 / 报名名单\n角色与审批规则'},
 {id:'management',x:345,y:120,w:350,h:290,title:'管理 Agent',kind:'ai',rows:['识别受影响工作','指定负责人和期限','调用 Skill / 发人工任务','收回证据、追踪异常']},
 {id:'marketing',x:800,y:0,w:300,h:135,title:'宣传任务',kind:'task',sub:'调用写稿 / 海报 Skill'},
 {id:'notice',x:800,y:140,w:300,h:125,title:'通知任务',kind:'task',sub:'客服确认并发送'},
 {id:'venue',x:800,y:270,w:300,h:125,title:'场地任务',kind:'task',sub:'执行负责人确认档期'},
 {id:'finance',x:800,y:400,w:300,h:145,title:'费用任务',kind:'task',sub:'财务核对，越界先审批'},
 {id:'results',x:1180,y:150,w:200,h:260,title:'结果汇总',kind:'doc',rows:['完成证据','待审批','失败 / 卡点']},
 ]}
 edges={[{from:'sot',to:'management'},...['marketing','notice','venue','finance'].map(id=>({from:'management',to:id})),...['marketing','notice','venue','finance'].map(id=>({from:id,to:'results'})),{from:'results',to:'management',start:'bottom',end:'bottom',path:'M1280 410V548H520V410',dashed:true}]}
 />;
}
