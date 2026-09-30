import { DeckFrame, Panel, colors } from "../deck";
import { assetPath } from "../ui";
const products = [
 {name:"AirBotix",label:"青少年 AI 创作与编程",en:"AI creation and coding for ages 5–17",desc:"孩子主导创作，AI 辅助，教师指导；用故事、游戏、网站与代码项目学习。",english:"Children lead, AI assists, teachers guide — learning through creative projects.",image:"airbotix-logo.png",accent:colors.red},
 {name:"MetaTree AI Lab",label:"企业 AI Consulting / FDE",en:"AI consulting and forward-deployed engineering",desc:"梳理业务流程，搭建 AI Agent 与定制系统，把 AI 接入实际业务。",english:"Workflow discovery, AI agents and custom systems integrated into real operations.",image:"products/metatree.png",accent:colors.blue},
 {name:"求职匠 · JobPin AI",label:"个人 AI 求职顾问",en:"A personal AI career advisor",desc:"围绕真实背景与目标岗位，准备简历、差距分析和求职材料。",english:"Resume tailoring, gap analysis and application materials grounded in your background.",image:"products/jobpin.png",accent:colors.green},
 {name:"考证匠 · CertMaster",label:"AI 考证辅导助手",en:"AI certification study assistant",desc:"考题分析、题目收藏与学习记录，辅助理解和持续练习。",english:"Question explanations, bookmarks and study tracking for ongoing practice.",image:"products/certmaster.png",accent:colors.yellow},
];
export default function S36_JRProducts(){return <div data-slide-id="S36_JRProducts" style={{width:"100%",height:"100%"}}><DeckFrame tag="JR ACADEMY · PRODUCTS & SERVICES" title="匠人的产品与服务" subtitle="从个人学习与成长，到企业 AI 落地 · From personal growth to business AI delivery" titleSize={58}>
 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:24,height:"100%"}}>{products.map(p=><Panel key={p.name} style={{padding:22,borderTop:`7px solid ${p.accent}`}}>
 <div style={{display:"flex",alignItems:"center",gap:18}}><img src={assetPath(p.image)} alt={p.name} style={{width:76,height:60,objectFit:"contain"}}/><div><h2 style={{fontSize:29,margin:0}}>{p.name}</h2><div style={{fontSize:22,fontWeight:700,marginTop:5}}>{p.label}</div></div></div>
 <div style={{fontSize:16,color:"#514c48",marginTop:8}}>{p.en}</div><p style={{fontSize:22,lineHeight:1.35,margin:"12px 0 6px"}}>{p.desc}</p><p style={{fontSize:17,lineHeight:1.3,margin:0,color:"#514c48"}}>{p.english}</p>
 </Panel>)}</div></DeckFrame></div>;}
