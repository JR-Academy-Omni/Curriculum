import { InterviewSlide } from './_shared';
import { interview } from '../../data/interview';

// M7 英文面试练习 2：先在对话框里写答案，再看参考答案
export default function S34_M7Interview2() {
	const q = interview[1];
	return <InterviewSlide n={2} total={interview.length} question={q.question} hint={q.hint} answer={q.answer} />;
}
