import { DeckFrame, Panel, Label, colors } from "../deck";
import { assetPath } from "../ui";
const steps=[
 ["01","从业务问题开始","Discover the workflow","明确使用者、流程、数据与可交付范围。","Define users, workflows, data and a concrete delivery scope."],
 ["02","把 AI 接入工作流","Build and integrate","开发 Agent、自动化与定制 AI 系统，连接已有工具。","Build agents, automation and custom AI systems connected to existing tools."],
 ["03","一起完成业务落地","Deliver with the team","和业务团队协作，落实验收、使用方式与后续改进。","Work with the business team on acceptance, adoption and ongoing improvements."],
];
export default function S37_MetaTree(){return <div data-slide-id="S37_MetaTree" style={{width:"100%",height:"100%"}}><DeckFrame tag="METATREE AI LAB · AI CONSULTING / FDE" title="让 AI 进入真实业务流程" subtitle="FDE · Forward-Deployed Engineering：贴近业务团队，参与系统交付" accent={colors.blue}>
 <div style={{display:"grid",gridTemplateColumns:".7fr 1.5fr",gap:30,height:"100%"}}><Panel style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}><img src={assetPath("products/metatree.png")} alt="MetaTree AI Lab" style={{width:260,height:150,objectFit:"contain"}}/><h2 style={{fontSize:31,margin:"22px 0 10px"}}>企业 AI 落地</h2><p style={{fontSize:23,lineHeight:1.45,margin:0}}>业务自动化 · AI Agent<br/>定制系统 · 团队 AI 培训</p><p style={{fontSize:18,lineHeight:1.4,color:"#514c48"}}>Automation · Agents<br/>Custom systems · Team training</p><Label bg={colors.blue}>metatreelab.ai</Label></Panel>
 <div style={{display:"grid",gap:20}}>{steps.map(([n,title,en,desc,eng])=><Panel key={n} style={{padding:"20px 24px"}}><div style={{display:"flex",gap:18,alignItems:"baseline"}}><span style={{fontSize:29,fontWeight:900,color:colors.red}}>{n}</span><h2 style={{fontSize:29,margin:0}}>{title}</h2><span style={{fontSize:18,color:"#514c48"}}>{en}</span></div><p style={{fontSize:23,margin:"10px 0 5px"}}>{desc}</p><p style={{fontSize:18,lineHeight:1.35,margin:0,color:"#514c48"}}>{eng}</p></Panel>)}</div></div></DeckFrame></div>;}
