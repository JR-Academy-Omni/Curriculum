import { FestivalFrame, Diagram, Arrow, ChartText } from '../FestivalDiagram';
import { colors } from '../deck';

export default function H06_WhatGrew() {
  const layers = [
    { y: 35, color: colors.yellow, question: '获客规模', measure: '来源 → 新报名 → 新到场', action: '先统一口径，再判断增量' },
    { y: 200, color: colors.green, question: '现场停留', measure: '到场 → 参与 → 离场时间', action: '把现场价值与奖品动机拆开' },
    { y: 365, color: colors.blue, question: '系统容量', measure: '任务 → 发券 → 核销 / 失败', action: '减少摩擦，承接更多操作' },
  ];
  return <FestivalFrame title="新生节到底增长了什么？分三层看" subtitle="第三轮报名1500+、到场率约90%；获客、停留与系统容量仍分开观察。" takeaway="OPC：先验证第一批人获值，再追踪回流；玩法和承接一起改。" evidence="第三轮口径经讲师确认，后台有统计，本课未自行取数；停留/容量图为测量建议，不推算到场人数。">
    <Diagram title="分开检查获客规模、现场停留和系统容量，并将对应事件记录用于OPC增长判断">{id => <>
      {layers.map(l => <g key={l.question}>
        <rect x={30} y={l.y} width={290} height={115} rx={24} fill={l.color} stroke={colors.dark} strokeWidth={2} />
        <ChartText x={175} y={l.y + 69} size={34}>{l.question}</ChartText>
        <rect x={410} y={l.y} width={510} height={115} rx={24} fill={colors.white} stroke={colors.dark} strokeWidth={2} />
        <ChartText x={665} y={l.y + 69} size={28}>{l.measure}</ChartText>
        <Arrow d={`M 337 ${l.y + 57} L 390 ${l.y + 57}`} arrowId={id} />
        <ChartText x={1150} y={l.y + 69} size={25}>{l.action}</ChartText>
        <Arrow d={`M 937 ${l.y + 57} L 987 ${l.y + 57}`} arrowId={id} />
      </g>)}
    </>}</Diagram>
  </FestivalFrame>;
}
