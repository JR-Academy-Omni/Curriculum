import { InterviewSlide } from './_shared';
import { interview } from '../../data/interview';

// M7 英文面试练习 3：先在对话框里写答案，再看参考答案
export default function S35_M7Interview3() {
	const q = interview[2];
	return <InterviewSlide n={3} total={interview.length} question={q.question} hint={q.hint} answer={q.answer} />;
}
