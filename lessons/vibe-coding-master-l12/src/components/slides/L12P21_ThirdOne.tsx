import { ActBadge, BigLine, colors } from '../deck';

// P21 · 写到第三条，它就该进仓库
// 🔴 收口是一个**动作**，不是总结（蓝图 §9.4）。
export default function L12P21_ThirdOne() {
	return (
		<div style={{ width: '100%', height: '100%', position: 'relative' }}>
			<ActBadge act={5} />
			<BigLine
				sub={
					<>
						你今天挂的这一条，在你自己机器上。
						<br />
						那一刻，这条规矩就不再是你的习惯了 ——
						<b style={{ color: colors.black }}>它变成了这个项目的规矩。</b>
					</>
				}
			>
				等你挂到<span style={{ color: colors.red }}>第三条</span>，
				<br />
				而且你确信它们是对的那天 ——
				<br />
				<span style={{ color: colors.red }}>把它们提交进仓库。</span>
			</BigLine>
		</div>
	);
}
