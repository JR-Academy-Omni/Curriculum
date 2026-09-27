import { colors } from '../ui';
import { Page, PageHead, MiniTable, Note } from '../deck';

/**
 * P13 · 三条通道
 * 🔴 一张表讲完，不展开任何一条的操作步骤（§4 非目标第一条）。
 *    每一行都要落到一个「所以」，不许念表。
 * ⚠️ 「三条通道」是本课的教学分类，不是官方文档的分法（§19.1）：
 *    官方第三种是会话内循环，本节换成了命令行 + 系统调度，
 *    因为前者随会话消亡、还会自动过期，结构上不适合无人值守。
 * ⚠️ 表里不写死具体数值（最小间隔、额度）—— 产品行为变化快，
 *    讲师按当天官方文档口播（§19.3）。
 */
export default function L11P13_ThreeChannels() {
	return (
		<Page>
			<PageHead phase="talk" title="三条通道" sub="每一行后面都跟着一个「所以」。" />

			<MiniTable
				widths={['1.05fr', '1fr', '1.15fr', '1.15fr']}
				size={20}
				head={['', '云端', '本地', '命令行']}
				rows={[
					['跑在哪', '托管的云端', '你的机器', '你的机器 / 服务器'],
					['要开着机器吗', '不要', <strong style={{ color: colors.red }}>要，而且不能睡</strong>, '要'],
					['能读你本地文件吗', <strong style={{ color: colors.red }}>不能（每次重新克隆）</strong>, '能', '能'],
					['会弹权限吗', <strong style={{ color: colors.red }}>不会（结构上没有审批）</strong>, '会（配不对就挂着等）', '由你启动时的参数决定'],
					['最小间隔', '较粗', '较细', '较细'],
					['错过了会怎样', '文档没写补跑规则', '睡着就跳过，醒来最多补一次', '看你的系统调度器'],
				]}
				starRow={3}
				style={{ flex: 1 }}
			/>

			<div style={{ display: 'flex', gap: 14, flexShrink: 0 }}>
				{[
					{ t: '读不到本地文件', d: '所以依赖你机器上某个没提交的文件的任务，云端做不了' },
					{ t: '不会弹权限', d: '所以它在云端能做的每一件事，你都没有机会拦' },
					{ t: '睡着就跳过', d: '所以你定的九点可能十一点才跑 —— 时间得写进任务书' },
				].map((s) => (
					<div key={s.t} style={{
						flex: 1, border: `3px solid ${colors.black}`, background: colors.white,
						boxShadow: '4px 4px 0 #000', padding: '12px 16px',
					}}>
						<div style={{ fontSize: 20, fontWeight: 900, color: colors.dark }}>{s.t}</div>
						<div style={{ fontSize: 19, color: '#666', lineHeight: 1.4, marginTop: 5 }}>{s.d}</div>
					</div>
				))}
			</div>

			<Note>
				具体数值（最小间隔、额度、补跑规则）会变，以当天官方文档为准。这张表教的是<strong>差别在哪</strong>，不是背数字。
			</Note>
		</Page>
	);
}
