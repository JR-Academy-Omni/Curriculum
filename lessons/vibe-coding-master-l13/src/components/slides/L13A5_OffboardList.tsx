import { AppendixBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// A5 · 离职系统清单 —— 十类最容易漏的权限残留
// 🔴 这一页跟规则仓库关系不大，但学员当天就能用。
// 🔴 关键洞见：离职要回答的是反问题。授权记录回答「我们给过什么」，
//    离职需要回答「这人可能还在哪有权限」—— 后者无法从授权行重建，
//    因为你只能移除你记得存在的东西。所以走清单，不走行。
const LIST: [string, string][] = [
	['身份提供商 / 单点登录', '用户名就是工作邮箱，不停账号权限一直活着。移除应用权限 ≠ 移除单点登录'],
	['通过单点登录进的云控制台', '从门户进去的，不是按人授予的，在任何授权记录里都不出现'],
	['代码组织 + 仓库级协作者', '组织移除不会清掉仓库级协作者，也不会清掉待接受的邀请'],
	['邮件组 / 分发列表', '一个受限发送列表就是一项权限。残留成员能群发全公司'],
	['共享盘里给了「管理 / 编辑」的文件夹', '共享加在文件夹上，按文件审计时看不见'],
	['周期性日历邀请', '是对会议、链接和记录的长期权限，在未来的场次上继续存活'],
	['聊天工作区，含私有频道', '成员资格跟邮箱和单点登录是分开的'],
	['财务 / 薪资系统', '持有人少，所以没人想起来查'],
	['工单 / 知识库账号', '常常跟身份系统分开计费'],
	['共享凭据', '无法按人撤销，只能轮换'],
];

export default function L13A5_OffboardList() {
	return (
		<Page>
			<AppendixBadge label="A5 · 离职清单" />
			<Head sub="授权记录回答「我们给过什么」。离职要回答的是反问题：这人可能还在哪有权限。">
				走清单，<span style={{ color: colors.red }}>不走授权记录</span>
			</Head>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				{LIST.map(([k, why], i) => (
					<div key={k} style={{
						display: 'grid', gridTemplateColumns: '1fr 1.9fr',
						borderTop: i === 0 ? 'none' : `2px solid ${colors.black}`,
						background: i === 0 || i === LIST.length - 1 ? 'rgba(255,87,87,0.07)' : colors.white,
					}}>
						<div style={{
							padding: '9px 16px', fontSize: 19, fontWeight: 600,
							borderRight: `2px solid ${colors.black}`, lineHeight: 1.35,
						}}>{k}</div>
						<div style={{ padding: '9px 16px', fontSize: 17, color: '#555', lineHeight: 1.4 }}>{why}</div>
					</div>
				))}
			</div>

			<div style={{ marginTop: 'auto', paddingTop: 18, display: 'flex', gap: 22 }}>
				<div style={{ flex: 1, fontSize: FS.note, lineHeight: 1.65, color: '#444' }}>
					反问题<b>无法从授权行重建</b>，因为
					<b style={{ color: colors.red }}>你只能移除你记得存在的东西。</b>
					所以登记册必须配一张系统清单，离职时走清单。
				</div>
				<div style={{
					flex: '0 0 460px', border: `3px solid ${colors.red}`, padding: '12px 16px',
					fontSize: 19, lineHeight: 1.55,
				}}>
					<b>先停用身份账号是单步价值最高的一步</b>，因为多数行都通过它认证。
					但它不充分：共享凭据、仓库级授权、外部系统会活得比它久。
				</div>
			</div>
		</Page>
	);
}
