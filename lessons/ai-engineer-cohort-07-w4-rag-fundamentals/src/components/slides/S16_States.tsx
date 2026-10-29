import { colors } from '../ui';
import { PartFrame, TermCards, Punch, Mark } from './_shared';

// 作答：Answer contract 只讲四种状态
export default function S16_States() {
	return (
		<PartFrame part="answer" title="每个回答，先定一个状态">
			<TermCards minHeight={290} items={[
				{ zh: '有证据', term: 'Supported', color: colors.green, d: '每句话都能指回一块证据' },
				{ zh: '只答一部分', term: 'Partial', color: colors.yellow, d: '能答的答，缺的说缺' },
				{ zh: '证据打架', term: 'Conflict', color: colors.orange, d: '两份说法不同，不替用户挑' },
				{ zh: '答不了', term: 'No-answer', color: colors.red, d: '没有证据，就说不知道' },
			]} />
			<Punch delay={0.8} size={30} mt={28}>Answer contract 今天只讲这一项：<Mark>四种状态</Mark>。</Punch>
		</PartFrame>
	);
}
