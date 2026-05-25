import { Slide, Inner, Half, Title, Divider, Card, BulletList, colors, fonts } from '../ui';

export default function S03_WhatIs() {
	return (
		<Slide bg={colors.white}>
			<Inner split>
				<Half>
					<Title size="clamp(28px,4vw,48px)">AI 工作流<br />提效营<br />是什么？</Title>
					<Divider />
					<p style={{ fontSize: 18, color: '#555', lineHeight: 1.8, maxWidth: 500 }}>
						把 AI 装进你<strong>现在</strong>这个部门的工作流 —— 不是 ChatGPT 入门课，不是承诺转职 AI 新岗位，是让在职 1 年+ 的你用 AI 提效现有工作，给老板看到 ROI。
					</p>
					<div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
						<span style={{ padding: '6px 14px', background: colors.indigo, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>不是入门课</span>
						<span style={{ padding: '6px 14px', background: colors.teal, color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: fonts.mono }}>不是转职课</span>
					</div>
				</Half>
				<Half>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<Card bg="#f8f9fa">
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8, color: colors.indigo }}>vs ChatGPT 入门课</div>
							<BulletList items={['入门课教你写 prompt', '这门课把 prompt 串成 SOP，同事接手就能跑']} />
						</Card>
						<Card bg="#f8f9fa">
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8, color: colors.indigo }}>vs 转职 AI Engineer</div>
							<BulletList items={['转职课承诺新岗位 offer (池子小)', '这门课让你在现有岗位用 AI 升级 (零跳槽风险)']} />
						</Card>
						<Card bg={colors.yellow}>
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>毕业你拿到</div>
							<BulletList items={['5 个可复用 SOP', '1 份给老板的 ROI 报告', 'JR Academy AI Workflow Specialist 证书']} />
						</Card>
					</div>
				</Half>
			</Inner>
		</Slide>
	);
}
