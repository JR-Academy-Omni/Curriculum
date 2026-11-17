import { colors } from '../ui';
import { Page, Say, Tbl } from './_parts';

export default function S06_Ladder() {
	return (
		<Page part="第 1 部分" title="四级阶梯：下面一级不够，才往上走">
		  <Tbl size={22} widths="230px 1fr 1.25fr" head={['级别', '谁决定下一步', 'CareKind 例子']} rows={[
		    ['Single call', '没有下一步：一次输入，一次输出', '把一段已确认的观察整理成一条 Draft'],
		    ['Workflow', '代码：步骤事先写死', '每晚把已确认的 note 导出成 PDF'],
		    ['Single agent', '模型：根据查到的结果决定', '交班：查六位住户、对照政策、决定谁交给 RN'],
		    ['Multi-agent', '协调者把子任务派给别的 Agent', '同样的交班，按住户并行，另有只读检查员'],
		  ]} />
		  <Say bg={colors.red}><span style={{ color: colors.white }}>每往上一级，成本、延迟和出错的地方都会增加。能停在下面就停在下面。</span></Say>
		</Page>
	);
}
