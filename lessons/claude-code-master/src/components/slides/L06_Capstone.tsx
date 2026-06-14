import { Lab } from './_LabLayout';

// 动手⑥ 综合实战 Capstone
export default function L06_Capstone() {
	return (
		<Lab
			n="⑥"
			min="10 分钟 + 课后"
			title={<>综合实战：<span style={{ color: '#CB6CE6' }}>跑完一整圈</span></>}
			sub="把今天学的全用上，最后把经验写回记忆 —— 闭环"
			demo={[
				{ kind: 'note', text: '目标：在你自己的项目里完成一个真实小任务' },
				{ kind: 'say', text: '按 CLAUDE.md 的规范，帮我做 X（先 PRD，再实现，最后自检）' },
				{ kind: 'say', text: '过程中你踩的坑、我纠正你的点，写成一条 memory' },
				{ kind: 'note', text: '下一轮起点就更高了 —— 这就是飞轮' },
			]}
			todo={[
				'选一个你这周真要做的小任务',
				'走完整 ADLC：目标→上下文→PRD→建→验收',
				'让它调用你建的 CLAUDE.md / skill / 记忆',
				'结束把「学到的」写回记忆系统',
			]}
			verify="同一个任务，下次让 AI 做会更快更准 —— 因为它记住了，规则也沉淀了"
		/>
	);
}
