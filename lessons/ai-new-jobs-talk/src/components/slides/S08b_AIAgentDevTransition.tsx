import DeepJobTransitionSlide from '../DeepJobTransitionSlide';
import { TECH_DEEP } from '../../data/jobs';
import { colors } from '../ui';

export default function S08b_AIAgentDevTransition() {
	return <DeepJobTransitionSlide job={TECH_DEEP[2]} accentColor={colors.techPurple} accentBg={colors.techBg} chapterTag="CHAPTER 2 · TECHNICAL" />;
}
