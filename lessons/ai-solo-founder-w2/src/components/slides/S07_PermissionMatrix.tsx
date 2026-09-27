import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

const YES = <span style={{ color: '#0a7a3d', fontWeight: 900 }}>给</span>;
const NO = <span style={{ color: '#b00', fontWeight: 900 }}>不给</span>;

export default function S07_PermissionMatrix() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="② 接权限 · 边界"
					tagBg={colors.blue}
					title="五类权限，一条一条给，不要一次全开"
					sub="授权是这节课风险最高的十分钟。给之前先想清楚：它做错了，损失落在谁头上。"
				/>
				<DeckTable
					fontSize={18.5}
					cellPad="12px 15px"
					cols={[
						{ label: '数据源', w: '150px' },
						{ label: '给到什么程度', w: '1.35fr' },
						{ label: '读', w: '70px', align: 'center' },
						{ label: '写 / 发', w: '90px', align: 'center' },
						{ label: '为什么这样切', w: '1.15fr' },
					]}
					rows={[
						[<b>邮箱</b>, '只给读 + 起草进草稿箱，不给直接发送', YES, NO, '发出去的邮件收不回来，代价不对称'],
						[<b>日历</b>, '读写都给，它要能替你排和挪', YES, YES, '日程改错可以改回来，风险可逆'],
						[<b>云盘</b>, '按目录授权，敏感目录明确排除', YES, YES, '合同、财务、客户原始资料不进授权范围'],
						[<b>代码仓库</b>, '给分支写权限，不给主干', YES, <span style={{ fontSize: 16 }}>分支 only</span>, '错了在分支上，主干永远有人审过'],
						[<b>浏览器自动化</b>, '开独立 profile，不用你的主账号登录态', YES, YES, '别让它带着你所有已登录的身份到处点'],
					]}
				/>
				<Punchline bg={colors.red}>
					判断标准只有一句：<u>它做错这件事，能不能撤回。</u>撤不回的动作，永远留一道人工确认。
				</Punchline>
			</Body>
		</Slide>
	);
}
