import { ActBadge, BigLine, colors } from '../deck';

// P02 · 转场：那我们换个办法
// 🔴 不要解释 hook 是什么。先做，做完再讲机制（P05）。
export default function L12P02_Switch() {
	return (
		<div style={{ width: '100%', height: '100%', position: 'relative' }}>
			<ActBadge act={2} />
			<BigLine
				sub={<span style={{ opacity: 0.5 }}>先做。做完再讲它是什么。</span>}
			>
				那我们换个办法。
				<br />
				<span style={{ color: colors.red }}>这次不写给它看。</span>
			</BigLine>
		</div>
	);
}
