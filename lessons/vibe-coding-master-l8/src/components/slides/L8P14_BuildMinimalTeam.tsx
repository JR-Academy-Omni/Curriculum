import { colors, fonts } from '../ui';
import { Page, PageHead, PracticeBoard, Note } from '../deck';

// P14 · 现在做：创建最小 Team —— 10 分钟任务屏（蓝图 §9.2）
// 🚫 实践页纪律（§12.1 / §12.2 末）：不出现标准答案。
//    这一页只有动作、完成判据、硬停时间。创建 Prompt 全文在 HANDOUT。

export default function L8P14_BuildMinimalTeam() {
	return (
		<Page>
			<PageHead
				phase="do" time="60–70 min"
				title="现在做：创建最小 Team"
				sub={<>只创建<strong>两名</strong> teammates。<strong>先不要开始正式调查。</strong></>}
			/>

			<PracticeBoard
				doWhat={
					<>
						按 <strong>HANDOUT「最小 Team 创建 Prompt」</strong> 交给你的 Lead。
						<div style={{ margin: '16px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
							{[
								{ k: 'A · frontend-trace', d: '只读追踪前端邮箱从输入到请求发出的字符串变化' },
								{ k: 'B · backend-identity', d: '只读追踪后端身份派生与 history 过滤' },
							].map((m) => (
								<div key={m.k} style={{
									border: `3px solid ${colors.black}`, background: colors.warmBg, padding: '10px 16px',
								}}>
									<div style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, color: colors.dark }}>{m.k}</div>
									<div style={{ fontSize: 22, color: '#666', marginTop: 2, lineHeight: 1.4 }}>{m.d}</div>
								</div>
							))}
						</div>
						创建一条共享任务「<strong>确认 Team 通信可用</strong>」，让 frontend-trace 认领。
						<br /><br />
						创建完成后<strong style={{ color: colors.red }}>停止</strong>，只报告：成员名单 · 共享任务及 owner · 当前权限模式。
					</>
				}
				criteria={[
					'成员名单里 Lead 之外有 2 名 teammate',
					'名字与指令完全一致，没有被改写',
					'共享任务已创建并有 owner',
					'权限模式是只读，没有跳过权限检查',
				]}
				stopAt="70 min"
				warn={<><strong>不要改业务代码。</strong> 这一步只证明 Team 建起来了，不做任何调查。</>}
			/>

			<Note>
				卡住的三种情况（成员创建失败 / 消息失败 / 任务列表失败）→ 举手，助教按 RUNSHEET 的恢复步骤处理。
				<strong style={{ color: colors.dark }}>不要自己改设置文件试。</strong>
			</Note>
		</Page>
	);
}
