import { ActBadge, Page, colors, fonts, border, shadowSm } from '../deck';

// P22 · 作业 + Exit ticket
// 🔴 现场只收第 6 题：**拦截成功的证据**。收不上来的人，这节课对他没有发生。
const TICKET = [
	'你那条规矩原话是什么？你说过几遍？',
	'它是「做了不该做的」还是「漏了该做的」？所以挂在哪个时点？',
	'你的判据那一行 if 长什么样？',
	'你的 matcher 是什么？宽了会怎样？',
	'你挂在哪个文件？因此谁受它管？',
	'交你那次拦截成功的证据。',
] as const;

const MUST = [
	'把课堂那条 hook 补完整并跑通，贴出一次拦截成功的记录。',
	'故意让它失效一次（改错退出码 / 删执行权限 / matcher 写错），看它是怎么「安静地」不工作的，写一句你是怎么发现的。',
	'你的 hook 第一天里，有没有拦住过一次你自己不想被拦的操作？有的话打算怎么收窄。',
] as const;

const OPT = [
	'挂一条 Stop hook，测试不过就没法收工。（L6 铁律第一次被真正执行）',
	'挂一条 SessionStart + compact，把最容易被压缩丢掉的三句话灌回去。',
	'挑一条判过「挂不上」的主观规矩，用 prompt hook 写一版 —— 然后回答：你信它的判断吗？',
	'有三条验证过的 hook 之后，提交进项目 .claude/settings.json。',
	'克隆一个你常用的开源仓库，敲 /hooks 看一眼。记录你看到了什么。',
] as const;

export default function L12P22_Homework() {
	return (
		<Page>
			<ActBadge act={5} mode="现场收" />

			<div style={{ flex: 1, display: 'flex', gap: 24, minHeight: 0 }}>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					<h3 style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, marginBottom: 14 }}>
						Exit ticket
					</h3>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
						{TICKET.map((t, i) => {
							const hot = i === TICKET.length - 1;
							return (
								<div key={i} style={{
									border: hot ? `4px solid ${colors.black}` : border,
									background: hot ? colors.yellow : colors.white,
									boxShadow: hot ? shadowSm : 'none',
									padding: hot ? '14px 16px' : '8px 14px',
									display: 'flex', gap: 11, alignItems: 'center',
								}}>
									<span style={{
										fontFamily: fonts.heading, fontSize: hot ? 20 : 16, fontWeight: 900,
										color: hot ? colors.red : '#999', minWidth: 20,
									}}>
										{i + 1}
									</span>
									<span style={{ fontSize: hot ? 21 : 17, fontWeight: hot ? 900 : 400, lineHeight: 1.4 }}>
										{t}
									</span>
									{hot && (
										<span style={{
											marginLeft: 'auto', fontSize: 15, fontWeight: 700, background: colors.red,
											color: colors.white, padding: '4px 11px', flexShrink: 0,
										}}>
											现场只收这题
										</span>
									)}
								</div>
							);
						})}
					</div>

					<div style={{
						marginTop: 'auto', border, background: colors.dark, color: colors.white,
						padding: '14px 18px', fontSize: 18, lineHeight: 1.6,
					}}>
						截图、终端粘贴、配置加脚本，都行。
						<br />
						<b style={{ color: colors.yellow }}>收不上来的人，这节课对他没有发生。</b>
					</div>
				</div>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
					<div>
						<h3 style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, marginBottom: 9, color: colors.red }}>
							必做
						</h3>
						{MUST.map((t, i) => (
							<div key={i} style={{ display: 'flex', gap: 9, fontSize: 17, lineHeight: 1.5, marginBottom: 7 }}>
								<span style={{ fontWeight: 900, color: colors.red, flexShrink: 0 }}>{i + 1}</span>
								<span>{t}</span>
							</div>
						))}
					</div>
					<div style={{ flex: 1, minHeight: 0 }}>
						<h3 style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, marginBottom: 9, color: '#888' }}>
							选做
						</h3>
						{OPT.map((t, i) => (
							<div key={i} style={{ display: 'flex', gap: 9, fontSize: 16, lineHeight: 1.45, marginBottom: 6, color: '#555' }}>
								<span style={{ fontWeight: 900, flexShrink: 0 }}>{i + 4}</span>
								<span>{t}</span>
							</div>
						))}
					</div>
					<div style={{
						border: `3px solid ${colors.red}`, background: 'rgba(255,87,87,0.06)',
						padding: '12px 16px', fontSize: 16, lineHeight: 1.5,
					}}>
						⚠️ 第 7 项提交前，先在 PR 描述里写清楚：「这个 PR 会让所有克隆本仓库的人的
						Claude Code 自动执行以下脚本」。<b>这句话你写不出来，就说明还不该提交。</b>
					</div>
				</div>
			</div>
		</Page>
	);
}
