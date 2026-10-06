import { TestSlide } from './_shared';

// M3 后测：两种用户抱怨，分别查哪个指标
export default function S18_M3Post() {
	return (
		<TestSlide
			module="M3"
			kind="post"
			question="你负责一个客服 bot，收到两种抱怨。分别先查哪个指标、先改哪里？"
			items={['「点了发送，等好久才开始出字」', '「开始出字挺快，但一段回答要写很久」']}
			answer={<>① 查 TTFT → prefill 太重：精简 context、把稳定内容放前面让 prefix cache 命中，同时检查是否在排队。② 查 TPOT 和 output_tokens → decode 太长：限制输出长度、用流式输出，必要时调低 effort 减少 thinking。</>}
		/>
	);
}
