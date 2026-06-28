import { Lab } from './_LabLayout';

// 动手⑤ 派一个 subagent
export default function L05_Subagent() {
	return (
		<Lab
			n="⑤"
			min="10 分钟"
			title={<>派一个 <span style={{ color: '#38B6FF' }}>子 agent</span> 替你跑噪音活</>}
			sub="把要翻一堆文件的活外包出去，只要结论不要刷屏"
			demo={[
				{ kind: 'say', text: '用一个子 agent 扫一遍这个目录，看有没有硬编码的密钥 / token' },
				{ kind: 'note', text: '搜索很吵 —— 让子 agent 在它自己的上下文里翻，省你的窗口' },
				{ kind: 'say', text: '只把发现的问题清单带回来，别贴一堆 grep 输出' },
				{ kind: 'note', text: '进阶：让两个 agent 从不同角度审，再对比' },
			]}
			todo={[
				'挑一个「要翻很多文件」的检查任务',
				'让 Claude 派子 agent 去做',
				'观察：它派活 → 子 agent 干 → 带回结论',
				'对比：你的主对话上下文没被刷屏',
			]}
			verify="一句话派出去，回来的是干净的结论清单 —— 你的注意力没被噪音淹没"
		/>
	);
}
