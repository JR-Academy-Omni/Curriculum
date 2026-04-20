import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S16_P9Model() {
	return (
		<PhaseSlide
			phase={phases[8]}
			whyItMatters="到了这一层你不是调 API，而是亲手训模型。QLoRA + Unsloth 能在一张 4090 上微调出企业级模型，SDG + PEFT 让数据和算力都不再是门槛。"
			representativeLessons={[
				'Fine-Tuning Llama 3.1 with QLoRA',
				'Unsloth 极速训练',
				'Synthetic Data Generation',
			]}
		/>
	);
}
