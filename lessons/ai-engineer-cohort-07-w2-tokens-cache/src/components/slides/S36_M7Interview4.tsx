import { InterviewSlide } from './_shared';
import { interview } from '../../data/interview';

// M7 英文面试练习 4：先在对话框里写答案，再看参考答案
export default function S36_M7Interview4() {
	const q = interview[3];
	return <InterviewSlide n={4} total={interview.length} question={q.question} hint={q.hint} answer={q.answer} />;
}
