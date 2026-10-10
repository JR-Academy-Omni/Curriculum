import { Teaching, Three } from '../Teaching';
import { Panel, Label, colors } from '../deck';
export default function P02(){return <Teaching tag="增长原理 02 · 推力与阻力" title="给关键环节加力，也要减少摩擦" subtitle="HubSpot：Attract 吸引 → Engage 互动 → Delight 助客户成功；通过推力、摩擦与积累理解增长。"><div style={{height:390}}><Three items={[
{title:'加推力',text:'精准渠道、产品价值、推荐机制，把匹配客户推向有用行动。',detail:'例：完成交付后，请客户介绍一位同样遇到问题的人。'},
{title:'减摩擦',text:'减少看不懂、起步难、等回复、交付慢和价值落差。',detail:'例：用真实样例和模板缩短首次价值时间。'},
{title:'积累基础',text:'留住真实客户，复用可信案例、内容和交付能力。',detail:'例：让上轮成果持续帮助下一位客户，记维护成本。'}
]}/></div><p style={{fontSize:18,margin:"18px 0 0"}}>框架来源：<a href="https://www.hubspot.com/flywheel?product=breeze" target="_blank" rel="noreferrer">HubSpot Flywheel</a> · <a href="https://www.reforge.com/blog/growth-loops" target="_blank" rel="noreferrer">Reforge Growth Loops</a>；中文应用与演算为教学设计。</p></Teaching>;}