import { colors, fonts } from '../ui';
import { Page, Say, Tbl } from './_parts';

export default function S20_PatternMap() {
	return (
		<Page part="第 3 部分" title="五种编排模式，一张表">
		  <Tbl size={18} widths="200px 0.8fr 1fr 1.1fr 1fr" head={['模式', '解决什么', '必须配什么', 'CareKind', 'Google Cloud 指南里叫']} rows={[
		    ['Sequential', '后一步依赖前一步；需要独立检查', '每一步的输入输出契约', 'Drafter 写 → Checker 只读核对，不能改', 'Sequential'],
		    ['Fan-out / synthesis', '量大、能并行', '并发上限、汇总规则、部分失败怎么报', '每位住户一个 drafter（下一页）', 'Parallel'],
		    ['Specialization', '工具、权限、模型不同', '每个 Agent 一份工具清单，后台再查一次', 'Checker 只读，用便宜的 Haiku', 'Coordinator（按专长派活）'],
		    ['Escalation / advisor', '少数难步骤', '分清“建议”和“决定”，决定交给人', '措辞拿不准问 Opus 5.5；R-106 交给 RN', '接近 Review and critique；交给人是 Human-in-the-loop'],
		    ['Dynamic workflow', '规模事先不知道', '预算、时间上限、终止条件', '120 位住户的月度抽查才用；今天关掉', '接近 Hierarchical task decomposition'],
		  ]} />
		  <Say>真实系统常常组合使用。今天的 demo：fan-out + specialization + advisor + 交给人。指南里还有 Loop、Iterative refinement、Swarm（没有中心协调者，成本最高，可能不收敛）。</Say>
		  <div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.black }}>来源：Google Cloud Architecture Center，Choose a design pattern for your agentic AI system（W7 第 8 部分用过）</div>
		</Page>
	);
}
