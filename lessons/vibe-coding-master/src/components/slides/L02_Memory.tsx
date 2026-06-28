import { Lab } from './_LabLayout';

// 动手② 建一条记忆 + 验证 recall
export default function L02_Memory() {
	return (
		<Lab
			n="②"
			min="10 分钟"
			title={<>建一条<span style={{ color: '#7ED957' }}>记忆</span>，让它跨对话记住</>}
			sub="把这次对话里的一个真实约束，沉淀成持久记忆"
			demo={[
				{ kind: 'say', text: '记住：这个项目用 pnpm，不要用 npm 或 yarn' },
				{ kind: 'note', text: '让它写成一条 memory（一文件一事实 + 分类）' },
				{ kind: 'say', text: '再记一条我的偏好：回复先给结论，再给细节' },
				{ kind: 'note', text: '查重——已有类似记忆就更新，不要重复建' },
				{ kind: 'cmd', text: '# 关掉对话，重开一个新的' },
				{ kind: 'say', text: '我们这个项目用什么包管理器？' },
			]}
			todo={[
				'让 Claude 记住一条你项目的真实约束',
				'再记一条「你希望 AI 怎么跟你工作」的偏好',
				'开新对话，问它刚才记的东西',
				'确认它直接答对，没让你重讲',
			]}
			verify="新对话里它主动遵守了你昨天才教的规则 —— 这就是 Memory ≠ Context"
		/>
	);
}
