import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, MiniTable, Note } from '../deck';

// P15 · 哪些隐藏区不能搬（蓝图 §8.2）
// 必须紧接落盘讲：学员刚被鼓励「多写下来」，而他们回去要写的多半是公司的东西。
// 🔴 国内工具只讲**能力维度**，不排名、不写具体产品的版本能力（§19.2）。
// 🔴 合规部分只讲「要确认哪两条条款」，不替任何人做合规判断。
// 对应 §3.1 过关证据第 6 项 + §13.1 评分表「边界」维度。

export default function L10P15_WhatNotToMove() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title={<>搬<span style={{ background: colors.yellow, padding: '0 10px' }}>形状</span>，不搬内容</>}
				mark="搬运 1 / 4"
				markBg={colors.purple}
				sub="我刚才让你多写下来。现在说清楚哪些不许写。"
			/>

			<MiniTable
				size={21}
				widths={['1.5fr', '160px', '1.7fr']}
				head={['这一类信息', '能不能搬', '怎么办']}
				rows={[
					['技术约束、架构决定、命名规范', <OK />, '直接写'],
					['业务规则的逻辑', <Half />, '写规则，去掉真实客户名和数据'],
					['客户身份、真实数据、密钥、合同条款', <No />, <><strong>只写结构描述</strong>：「有一类客户走特殊结算路径，标记在 X 字段」</>],
					['受合规约束的代码本体', <Dep />, '按公司规定。本课不替任何人做合规判断'],
				]}
				style={{ flexShrink: 0 }}
			/>

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '20px 24px', display: 'flex', alignItems: 'center' }}>
					<div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.5 }}>
						它需要知道<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>这里有一条例外规则</span>，
						<br />
						不需要知道这条例外是给谁开的。
					</div>
				</div>

				<div style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.blue, color: colors.white, padding: '9px 16px', borderBottom: border, fontSize: 20, fontWeight: 900 }}>
						国内环境 / 换工具会变吗
					</div>
					<div style={{ padding: '14px 18px', fontSize: 21, lineHeight: 1.5, color: colors.dark }}>
						四问<strong>不依赖任何特定工具</strong>。差距只出现在两格：
						<div style={{ marginTop: 8, fontFamily: fonts.mono, fontSize: 20, lineHeight: 1.6 }}>
							盲区 · 对陌生代码库能看多深<br />
							未知区 · 能不能自己设计并跑实验
						</div>
						<div style={{ marginTop: 8, fontWeight: 700 }}>它只影响搬运效率，不改变协议。</div>
					</div>
				</div>
			</div>

			<Note>
				下课前你要交一条<strong>数据边界声明</strong>：哪一类信息你决定不搬，以及不搬的话你改成怎么写。
			</Note>
		</Page>
	);
}

const chip = (t: string, bg: string, fg: string) => (
	<span style={{
		display: 'inline-block', background: bg, color: fg, padding: '3px 12px',
		fontSize: 19, fontWeight: 900, border: `2px solid ${colors.black}`, fontFamily: fonts.mono,
	}}>{t}</span>
);
const OK = () => chip('可以', colors.green, colors.black);
const Half = () => chip('一般可以', colors.yellow, colors.black);
const No = () => chip('不可以', colors.red, colors.white);
const Dep = () => chip('看密级', '#999', colors.white);
