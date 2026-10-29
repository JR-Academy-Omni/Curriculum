import SystemDiagram from '../SystemDiagram';

// Proposed coordination scenario based on the preceding real Skill example, not a recorded run.
export default function N11b_LeadHandoff(){
 return <SystemDiagram stage="承接真实活动 Skills · 改期后的方案推演" title="活动改期，不只是重做一张海报" takeaway="四项工作同时受影响：Skill 能完成具体步骤，但谁判断影响、分派负责人、追踪结果？"
 nodes={[
 {id:'change',x:0,y:120,w:300,h:300,title:'批准改期',kind:'person',sub:'负责人确认，正式记录更新',rows:['旧日期 → 新日期','SoT 中保留确认记录']},
 {id:'marketing',x:430,y:20,w:390,h:220,title:'宣传内容',kind:'doc',sub:'/xhs-draft + /xhs-poster',rows:['修改文案与海报','已发内容另行核对']},
 {id:'notice',x:930,y:20,w:390,h:220,title:'报名者通知',kind:'task',sub:'客服负责人',rows:['生成通知草稿','确认后发送、核对送达']},
 {id:'venue',x:430,y:300,w:390,h:220,title:'场地与人员',kind:'task',sub:'活动执行负责人',rows:['确认场地新档期','调整人员与执行安排']},
 {id:'finance',x:930,y:300,w:390,h:220,title:'费用变化',kind:'doc',sub:'财务负责人',rows:['核对改期费用','超预算先申请批准']},
 ]}
 edges={[
 {from:'change',to:'marketing',end:'top',path:'M300 270H360V0H625V20'},
 {from:'change',to:'notice',end:'top',path:'M300 270H360V0H1125V20'},
 {from:'change',to:'venue',end:'top',path:'M300 270H360V280H625V300'},
 {from:'change',to:'finance',end:'top',path:'M300 270H360V280H1125V300'},
 ]}
 />;
}
