import { DeckFrame, AnimatedGroup, Panel, Label, colors, fonts } from '../deck';
import { Code, muted, Takeaway } from '../lesson';

// 文件结构和列号出自项目的取数脚本（表头 <1hI1H3L、目录项 <6s1c1L，float32 列从 0 数）
const cols = [
	{ no: 73, name: '营业收入' },
	{ no: 95, name: '归母净利润' },
	{ no: 205, name: '扣非净利润' },
	{ no: 237, name: '总股本' },
];

export default function S07_ReadFile() {
	return (
		<DeckFrame tag="02 · 让 AI 自己去拿数据" title="让 AI 自己读懂一个陌生的文件" subtitle="行情软件把全市场财报存成一个没有说明书的二进制包。我只告诉 AI 文件在哪，它自己解出了结构。" accent={colors.green}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.15}>
						<Code title="vipdoc\cw\gpcw20260630.zip · 字节示意">{`00 8a 40  ce f4 46 90 cc a7 13 73
00 8a 50  32 58 5c 1c 84 a9 3d 88
00 8a 60  73 b8 5f 86 21 3f ec 3f
…

表头    <1hI1H3L   报告期 · 公司数 · 每家字节数
目录项  <6s1c1L    6 位代码 · 偏移量
正文    每家一行 float32`}</Code>
					</AnimatedGroup>
					<AnimatedGroup delay={.3} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
						<Label bg={colors.green} color={colors.dark}>AI 解出来要用的四列</Label>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 20 }}>
							{cols.map(c => <div key={c.no} style={{ border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '14px 16px' }}>
								<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 18, color: muted }}>第 {c.no} 列</div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 28 }}>{c.name}</div>
							</div>)}
						</div>
						<div style={{ fontSize: 21, lineHeight: 1.5, marginTop: 20 }}>
							财报存的是<b>累计数</b>，所以：<br />单季度 = 本期累计 − 上一期累计
						</div>
						<div style={{ fontSize: 18, color: muted, marginTop: 10 }}>列号先拿几家公司和公告原文对过，确认没取错，才批量用。</div>
					</Panel></AnimatedGroup>
				</div>
				<div><Takeaway>只给位置，让 AI 自己摸清结构，再抽样核对</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
