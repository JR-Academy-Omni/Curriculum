import { Lab } from './_LabLayout';

// 动手③ 写一个 skill
export default function L03_Skill() {
	return (
		<Lab
			n="③"
			min="15 分钟"
			title={<>把一件反复做的事，做成 <span style={{ color: '#ff5757' }}>Skill</span></>}
			sub="一句斜杠命令，把你的 SOP 变成谁都能用的能力"
			demo={[
				{ kind: 'say', text: '帮我创建一个 skill：审查 git commit message 是否符合规范' },
				{ kind: 'note', text: '说清楚：什么时候用、检查哪几条、输出什么' },
				{ kind: 'note', text: 'Claude 会生成 .claude/skills/xxx/SKILL.md' },
				{ kind: 'say', text: '把评分标准也写进去：格式 / 长度 / 有没有动词开头' },
				{ kind: 'cmd', text: '/commit-review   # 触发你刚做的 skill' },
				{ kind: 'note', text: '团队任何人 clone 仓库就能用同一个 skill' },
			]}
			todo={[
				'想一件你团队每周重复 ≥3 次的事',
				'让 Claude 帮你把它做成一个 skill',
				'把「怎么算做对」的标准写进 skill',
				'用斜杠命令触发一次，看产出',
			]}
			verify="新人不用问你，敲一句 /你的skill 就产出了接近老手水平的结果"
		/>
	);
}
