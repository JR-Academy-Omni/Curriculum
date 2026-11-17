import type { ReactNode } from 'react';
import { colors } from '../ui';
import { Box, Cols, Flow, Page } from './_parts';

// 第 3 部分五页模式共用的版式：上面一条流程，下面三格（什么时候用、什么时候别用、CareKind）。
export function PatternPage({ title, flow, use, avoid, example }: {
	title: string;
	flow: { t: string; d?: string; bg?: string }[];
	use: ReactNode;
	avoid: ReactNode;
	example: ReactNode;
}) {
	return (
		<Page part="第 3 部分 · 编排模式" title={title}>
		  <Flow size={23} items={flow} />
		  <Cols n={3}>
		    <Box title="什么时候用" bg={colors.green} size={22}>{use}</Box>
		    <Box title="什么时候别用" bg={colors.red} size={22}>{avoid}</Box>
		    <Box title="CareKind" bg={colors.yellow} size={22}>{example}</Box>
		  </Cols>
		</Page>
	);
}
