import { colors } from '../ui';
import { Page, PageHead, AsciiFlow, MiniTable, Verdict } from '../deck';

/**
 * P21 · 用不了云端怎么办（受限 / 国内环境）
 * 🔴 §10.1 铁律 7：这一页不许砍。时间不够砍 P17 的例子，不砍这页。
 * 🔴 §19.2：只讲能力维度，不排名、不点评具体产品的版本能力。
 * 本页的价值在「每退一步失去什么」，不是安慰。
 */
export default function L11P21_RestrictedEnv() {
	return (
		<Page>
			<PageHead phase="talk" title="用不了云端怎么办" sub="退让是有阶梯的，而且每退一步失去的东西是明确的。" />

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				<AsciiFlow label="退让阶梯" accent={colors.dark} size={20} lh={1.6} style={{ flex: 1 }}>
{`云端托管定时
     │  用不了
     ▼
本机调度器 + 无人值守会话
     │  用不了
     ▼
CI 的定时触发
（把仓库当运行环境）
     │  用不了
     ▼
只写任务书，人工按它执行`}
				</AsciiFlow>

				<MiniTable
					widths={['0.8fr', '1.3fr']}
					size={21}
					head={['退到哪', '失去的能力维度']}
					rows={[
						['本机调度器', '关机就不跑；凭证和日志得自己管'],
						['CI 定时', '读不到本地文件；每次冷启动；调试回路长'],
						[<strong>只有任务书</strong>, <>失去「自动」，但<strong style={{ color: colors.teal }}>判断闸和七段结构完全保留</strong></>],
					]}
					starRow={2}
					style={{ flex: 1.15 }}
				/>
			</div>

			<div style={{
				border: `3px solid ${colors.red}`, background: '#fff0f0',
				padding: '14px 22px', fontSize: 22, lineHeight: 1.45, color: colors.dark, flexShrink: 0,
			}}>
				换了通道，<strong>凭证过期这条不会消失，只会换个样子</strong> ——
				订阅登录会过期，API key 会被轮换，公司代理的证书会换。
				所以契约里「什么都没交回来」必须是一种会报警的状态。
			</div>

			<Verdict bg={colors.teal} fg={colors.white}>
				通道会变，会被墙，会改名，会涨价。<span style={{ color: colors.yellow }}>任务书不会。</span>
			</Verdict>
		</Page>
	);
}
