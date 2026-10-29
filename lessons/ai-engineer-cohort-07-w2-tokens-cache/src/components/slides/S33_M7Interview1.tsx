import { InterviewSlide } from './_shared';
import { interview } from '../../data/interview';

// M7 英文面试练习 1：先在对话框里写答案，再看参考答案
export default function S33_M7Interview1() {
	const q = interview[0];
	return <InterviewSlide n={1} total={interview.length} question={q.question} hint={q.hint} answer={q.answer} />;
}
