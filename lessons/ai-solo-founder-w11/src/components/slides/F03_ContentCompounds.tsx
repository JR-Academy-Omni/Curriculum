import { FestivalFrame, Diagram, Node, Arrow, ChartText } from '../FestivalDiagram';
import { colors } from '../deck';

export default function F03_ContentCompounds() {
  return <FestivalFrame title="内容飞轮：学生的真实体验，变成下一批人的答案" subtitle="社交任务是现有业务玩法；可复用官网内容与完整归因，是这里提出的教学设计。" takeaway="内容越有用，后续学生越容易发现；有授权、可复用，才形成资产。" evidence="依据：EVENT.md / social-task；官网内容库存、链接归因与回流为教学设计，实际增量暂无。">
    <Diagram title="学生真实体验经同意成为内容与攻略，被下一批学生发现，报名到场后产生更多真实体验，授权内容库存累积">{id => <>
      <Node x={70} y={35} width={340} title="学生真实体验" detail="朋友 · 城市经验 · 收获" color={colors.green} />
      <Node x={990} y={35} width={340} title="授权内容 / 攻略" detail="学生自愿分享 + 官网复用" color={colors.red} />
      <Node x={990} y={338} width={340} title="后续学生发现" detail="搜索 / 朋友 / 分享链接" color={colors.yellow} />
      <Node x={70} y={338} width={340} title="报名并真实到场" detail="再次产生体验和内容" color={colors.blue} />
      <Arrow d="M 430 93 L 970 93" arrowId={id} dashed /><ChartText x={700} y={63} size={21}>征得同意 · 保留原始事实</ChartText>
      <Arrow d="M 1160 171 L 1160 315" arrowId={id} /><ChartText x={1270} y={260} size={21}>长期可发现</ChartText>
      <Arrow d="M 970 396 L 430 396" arrowId={id} /><ChartText x={700} y={443} size={21}>可识别链接 → 报名来源 → 签到</ChartText>
      <Arrow d="M 240 318 L 240 171" arrowId={id} />
      <rect x={507} y={191} width={386} height={115} rx={24} fill={colors.white} stroke={colors.dark} strokeWidth={2} />
      <ChartText x={700} y={238} size={30}>可用内容库存 ↑</ChartText><ChartText x={700} y={278} size={22}>下一轮素材与信任积累</ChartText>
      <ChartText x={700} y={503} size={23}>不能把点赞当获客；要看内容带来的新报名和真实到场。</ChartText>
    </>}</Diagram>
  </FestivalFrame>;
}
