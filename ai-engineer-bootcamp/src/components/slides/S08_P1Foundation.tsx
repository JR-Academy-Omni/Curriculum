import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S08_P1Foundation() {
	return (
		<PhaseSlide
			phase={phases[0]}
			whyItMatters="AI Engineer 的 80% bug，都卡在 Transformer / Embedding / Tokenizer 没搞懂就动手了。这一层把底子打死。"
			representativeLessons={[
				'Transformer Architecture + API',
				'Input Embeddings',
				'GenAI Overview + Ops',
			]}
		/>
	);
}
