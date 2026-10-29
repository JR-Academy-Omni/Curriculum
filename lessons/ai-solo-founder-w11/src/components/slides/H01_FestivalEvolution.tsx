import { FestivalFrame, Diagram, Arrow, ChartText } from '../FestivalDiagram';
import { colors } from '../deck';

export default function H01_FestivalEvolution() {
  const stages = [
    { x: 20, phase: '前两届', number: '300 人', metric: '初期现场到场', mechanism: '推广 + 奖品 + 抽奖', ticket: '每人一张纸券', color: colors.yellow },
    { x: 500, phase: '第 3–5 届', number: '可达 500 人', metric: '报名 / 到场未拆开', mechanism: '做任务，获得更多纸券', ticket: '兑换 / 兑奖变困难', color: colors.red },
    { x: 980, phase: '第三轮 · 电子券', number: '1500+ 报名', metric: '到场率约90% · 后台统计', mechanism: '电子券 + 更多玩法', ticket: '系统承接更多操作', color: colors.blue },
  ];
  return <FestivalFrame title="新生节：从一张纸券，到电子券与更多玩法" subtitle="三轮迭代：改变参与动机，也改变现场的运营方式。" takeaway="先找到参与动机，再解决规模放大后的兑现瓶颈。" evidence="讲师回顾：第三轮报名1500+、约90%到场，后台有统计，本课未另行取数；500报名/到场未拆。">
    <Diagram title="新生节三阶段里程碑：初期现场300人到场，第3到5届可达500人但口径未拆，第三轮电子券阶段报名1500以上且到场率约90%，来自讲师回顾后台统计">{id => <>
      {stages.map(s => <g key={s.phase}>
        <rect x={s.x} y={70} width={400} height={388} rx={26} fill={s.color} stroke={colors.dark} strokeWidth={2} />
        <ChartText x={s.x + 200} y={123} size={30}>{s.phase}</ChartText>
        <ChartText x={s.x + 200} y={213} size={49}>{s.number}</ChartText>
        <ChartText x={s.x + 200} y={270} size={25}>{s.metric}</ChartText>
        <line x1={s.x + 36} x2={s.x + 364} y1={310} y2={310} stroke={colors.dark} strokeOpacity={.25} />
        <ChartText x={s.x + 200} y={354} size={25}>{s.mechanism}</ChartText>
        <ChartText x={s.x + 200} y={410} size={24}>{s.ticket}</ChartText>
      </g>)}
      <Arrow d="M 432 244 L 480 244" arrowId={id} /><Arrow d="M 912 244 L 960 244" arrowId={id} />
      <ChartText x={700} y={493} size={28}>激励参与 → 兑现压力 → 数字化承接</ChartText>
    </>}</Diagram>
  </FestivalFrame>;
}
