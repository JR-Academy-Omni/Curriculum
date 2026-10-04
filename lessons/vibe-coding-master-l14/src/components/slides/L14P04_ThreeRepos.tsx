import { Page, Head, ActBadge, ThreeRepos, SoBar, colors } from '../deck';

/**
 * P04 · 三仓图 ⭐
 * 🔴 产品仓那一行视觉最硬。「agent 只读，绝不写」不是怕它写坏，
 *   是权限边界要跟责任边界对齐 —— 一个 agent 同时能写两边，
 *   等于把两套互不相干的审查制度短路了。
 */
export default function L14P04_ThreeRepos() {
	return (
		<Page>
			<ActBadge act={1} />
			<Head sub="三个仓，职责完全不同。最后一列是今天第一个要落到文件上的决定。">
				东西放在哪
			</Head>

			<ThreeRepos repos={[
				{ name: '规则仓', what: '稳定的运营定义 —— 上节课你造的就是这个', who: '写权限：极少数人', agent: 'agent 能写（有白名单）' },
				{ name: '记录', what: '每天的工作状态，一人一天一个文件', who: '写权限：所有人', agent: 'agent 能写（有白名单）' },
				{ name: '产品仓', what: '真正的业务代码', who: '写权限：工程师', agent: 'agent 绝不许写', forbid: true },
			]} />

			<div style={{ marginTop: 26 }}>
				<SoBar color={colors.blue}>
					规则和记录对分支保护的要求<strong>正好相反</strong> —— 规则要强制审查，
					记录绝不能要（否则不会用 git 的人交不了东西）。塞一个仓里必然牺牲一边，
					而被牺牲的通常是不会 git 的那一半人。
				</SoBar>
				<SoBar>
					产品仓那条线最容易被忽略：禁止写<strong>不是怕它写坏</strong>，是
					<strong>权限边界要跟责任边界对齐</strong>。产品仓有自己的审查人和自己的检查，
					一个 agent 同时能写两边，等于把两套互不相干的审查制度短路了。
				</SoBar>
			</div>
		</Page>
	);
}
