import { Page, Say, Tbl } from './_parts';

export default function S20_PatternMap() {
	return (
		<Page part="第 3 部分" title="一张表记住五种模式">
		  <Tbl size={21} widths="290px 1fr 1fr" head={['模式', '解决什么', '必须配什么']} rows={[
		    ['Sequential', '依赖和独立检查', '每一步的输入输出契约'],
		    ['Fan-out / synthesis', '量大、能并行', '并发上限、汇总规则、部分失败怎么报'],
		    ['Specialization', '权限和上下文不同', '每个 Agent 一份工具清单，后台再查一次'],
		    ['Escalation / advisor', '少数难步骤', '分清“建议”和“决定”，决定交给人'],
		    ['Dynamic workflow', '规模事先不知道', '预算、时间上限、终止条件'],
		  ]} />
		  <Say>真实系统常常组合使用。今天的 demo：fan-out + specialization + advisor + 交给人。</Say>
		</Page>
	);
}
