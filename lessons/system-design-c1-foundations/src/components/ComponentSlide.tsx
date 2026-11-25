import type { ReactNode } from 'react';
import { AnimatedGroup, Arrow, DeckFrame, Label, Node, Panel, colors } from './kit';

/** 组件页统一版式：上面一条示意链路，下面三栏「是什么 / 解决什么问题 / 代价」 */
export default function ComponentSlide({ tag, title, subtitle, flow, what, solves, cost }: {
	tag: string;
	title: ReactNode;
	subtitle: ReactNode;
	flow: { title: string; sub: string; hot?: boolean }[];
	what: ReactNode;
	solves: ReactNode;
	cost: ReactNode;
}) {
	const cols: [string, ReactNode, string][] = [['是什么', what, colors.white], ['解决什么问题', solves, colors.white], ['代价', cost, colors.dark]];
	return <DeckFrame tag={tag} title={title} subtitle={subtitle}>
		<div style={{ display: 'grid', gap: 30 }}>
			<div style={{ display: 'flex', alignItems: 'stretch', gap: 14 }}>
				{flow.map((n, i) => <div key={n.title} style={{ display: 'contents' }}>
					{i > 0 && <Arrow />}
					<Node title={n.title} sub={n.sub} bg={n.hot ? colors.yellow : colors.white} style={{ flex: 1, minWidth: 0 }} />
				</div>)}
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
				{cols.map(([label, body, bg], i) => <AnimatedGroup key={label} delay={.15 + i * .08} style={{ display: 'flex' }}>
					<Panel bg={bg} style={{ flex: 1, color: bg === colors.dark ? colors.white : colors.dark, padding: 24 }}>
						<Label bg={bg === colors.dark ? colors.yellow : colors.dark} color={bg === colors.dark ? colors.black : colors.white}>{label}</Label>
						<div style={{ marginTop: 14, fontSize: 23, lineHeight: 1.5 }}>{body}</div>
					</Panel>
				</AnimatedGroup>)}
			</div>
		</div>
	</DeckFrame>;
}
