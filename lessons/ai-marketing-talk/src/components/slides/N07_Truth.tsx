import SystemDiagram from '../SystemDiagram';

// The same fictional course promotion as the preceding conflicting files.
export default function N07_Truth() {
 return <SystemDiagram
  stage="解决版本冲突 · 谁确认 → 哪份算数 → AI 从哪里取"
  title="不让 AI 猜 final：先指定公司正式记录"
  takeaway="这份有负责人、有版本、有生效状态的正式记录，就是 SoT；下一页看改期后哪些内容要更新。"
  nodes={[
   {id:'owner',x:0,y:175,w:235,h:180,title:'课程负责人',kind:'person',sub:'核对改期决定\n批准当前信息'},
   {id:'sot',x:315,y:80,w:375,h:350,title:'课程正式记录 · SoT',kind:'store',sub:'AI 和员工共同读取',rows:['日期：10月22日','状态：本场满班','版本：v3 · 当前生效','确认：课程负责人','保留：批准与修改记录']},
   {id:'agent',x:770,y:175,w:270,h:180,title:'内容 Agent',kind:'ai',sub:'先读取当前记录\n再调用内容 Skills'},
   {id:'copy',x:1120,y:10,w:260,h:145,title:'小红书草稿',kind:'post',sub:'/xhs-draft\n使用当前日期与状态'},
   {id:'poster',x:1120,y:200,w:260,h:145,title:'海报草稿',kind:'post',sub:'/xhs-poster\n不沿用旧版时间'},
   {id:'sales',x:1120,y:390,w:260,h:145,title:'销售答复',kind:'doc',sub:'本场满班\n不再承诺本场名额'},
  ]}
  edges={[
   {from:'owner',to:'sot',label:'批准',lx:275,ly:240},
   {from:'sot',to:'agent',label:'读取',lx:730,ly:240},
   {from:'agent',to:'copy'}, {from:'agent',to:'poster'}, {from:'agent',to:'sales'},
  ]}
 />;
}
