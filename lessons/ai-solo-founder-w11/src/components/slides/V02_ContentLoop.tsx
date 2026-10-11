import { ChartFrame, ChartDefs, ChartNode, ChartArrow, chartSources } from '../GrowthChart';
import { colors } from '../deck';
export default function V02_ContentLoop(){return <ChartFrame tag="种子用户 02 · 内容循环" title="用户越会产出，下一批用户越容易理解价值" subtitle="先交付值得展示的成果，再把成果接回 website / app 的价值入口" footnote={<>{chartSources} 成果须获授权；老内容可持续获客，新用户继续产出时才形成内容循环。</>}>
  <svg viewBox="0 0 1400 530" role="img" aria-label="种子用户获值，成果成为内容，内容被分发发现，新人得到价值，其中一部分继续成为贡献者" style={{width:1400,height:530}}>
    <ChartDefs id="content-arrow"/>
    <ChartArrow id="content-arrow" d="M 340 111 L 534 111"/><ChartArrow id="content-arrow" d="M 840 111 L 1034 111"/>
    <ChartArrow id="content-arrow" d="M 1180 167 Q 1260 270 1110 346"/><ChartArrow id="content-arrow" d="M 970 402 L 628 402"/>
    <ChartArrow id="content-arrow" d="M 350 402 Q 94 340 190 175"/>
    <ChartNode x={60} y={55} w={280} title="种子用户获值" detail="完成一件真实任务" fill={colors.yellow}/>
    <ChartNode x={560} y={55} w={280} title="成果成为内容" detail="案例 / 模板 / 使用心得"/>
    <ChartNode x={1060} y={55} w={280} title="相关人发现" detail="搜索 / 分享 / 社区" fill={colors.blue}/>
    <ChartNode x={970} y={346} w={300} title="新人实际获值" detail="进入网站 / app 完成任务" fill={colors.green}/>
    <ChartNode x={330} y={346} w={300} title="部分成为贡献者" detail="愿意公开成果或继续分享" fill={colors.red}/>
    <rect x="520" y="224" width="390" height="74" rx="37" fill={colors.white} stroke={colors.dark} strokeWidth="2"/>
    <text x="715" y="271" textAnchor="middle" fontSize="29" fontWeight="800" fill={colors.dark}>每一轮，积累可复用内容</text>
    <text x="835" y="440" textAnchor="middle" fontSize="21" fill={colors.dark}>新人不是自动变成贡献者</text>
    <text x="98" y="294" fontSize="22" fontWeight="800" fill={colors.dark}>下一轮 ↺</text>
  </svg>
</ChartFrame>;}
