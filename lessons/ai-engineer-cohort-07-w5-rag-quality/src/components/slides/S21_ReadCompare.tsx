import { colors } from '../ui';
import { PartFrame, Flow, Punch, Mark } from './_shared';

// 读 compare 报告（evals.compare 的输出：config diff、metric diff、修好的和新坏的 case，最后人工抽检）
export default function S21_ReadCompare() {
	return (
		<PartFrame part="experiment" title="读对比报告，看四样">
			<Flow color={colors.orange} minHeight={250} zhSize={29} steps={[
				{ en: 'Main metric', zh: '主指标', d: '这次想改善的那个分数' },
				{ en: 'Guardrails', zh: '护栏指标', d: '延迟、成本有没有变差' },
				{ en: 'Fixed', zh: '修好的题', d: '以前错、现在对的是哪几道' },
				{ en: 'Broken', zh: '新坏的题', d: '以前对、现在错的是哪几道' },
			]} />
			<Punch delay={0.9} size={29}>最后一步永远是：<Mark>打开那几道题，人工看一遍</Mark>。</Punch>
		</PartFrame>
	);
}
