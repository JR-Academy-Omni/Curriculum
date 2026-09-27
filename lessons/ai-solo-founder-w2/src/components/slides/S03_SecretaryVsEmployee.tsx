import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

export default function S03_SecretaryVsEmployee() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="W1 → W2 的分界"
					tagBg={colors.yellow}
					title="秘书回答你的问题，员工按排程主动产出交付物"
					sub="同一个模型、同一份 SoT，差别不在智商，在有没有人给它排班和定义完成。"
				/>
				<DeckTable
					fontSize={19}
					cellPad="12px 15px"
					cols={[
						{ label: '', w: '150px' },
						{ label: 'W1 · 秘书', w: '1fr', accent: '#FFF6D6' },
						{ label: 'W2 · 员工', w: '1fr', accent: '#D9F2E4' },
					]}
					rows={[
						[<b>谁先开口</b>, '你问它才动', '到点它自己动'],
						[<b>产出形态</b>, '一段回答，看完就没了', '一份交付物，有格式、有归档位置'],
						[<b>权限</b>, '基本只读，够回答就行', '读 + 起草 + 写到指定位置，边界要写清楚'],
						[<b>记忆</b>, '记住你是谁、生意在做什么', '还要记住这份工作怎么算做完'],
						[<b>你在哪</b>, '你在对话里，随时纠正', '你在审核位，只看交付物和异常'],
						[<b>失败长什么样</b>, '答错了你当场看见', <span>它安静地跑了七天，<b style={{ color: colors.red }}>没人发现输出是错的</b></span>],
					]}
				/>
				<Punchline bg={colors.red}>
					员工比秘书危险。<u>今天后半段讲的权限边界和失败兜底，比装哪个工具重要得多。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
