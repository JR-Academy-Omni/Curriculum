import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

const num = (n: number) => <span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 22 }}>{n}</span>;
const bad = (t: string) => <span style={{ color: '#9b1c1c' }}>{t}</span>;
const good = (t: string) => <b>{t}</b>;

export default function S16_SoTFields() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '28px 52px 22px' }}>
				<SlideHead
					tag="W1 最终产出 · OPPORTUNITY CARD"
					tagBg={colors.red}
					titleSize="clamp(29px, 2.55vw, 40px)"
					title="一张创业机会卡，只回答六个问题"
					sub="先写事实和待验证假设。不要写行业报告，也不要把 AI 猜测当成用户证据。"
				/>

				<DeckTable
					fontSize={17}
					headFontSize={15}
					cellPad="8px 12px"
					cols={[
						{ label: '#', w: '48px', align: 'center' },
						{ label: '机会卡字段', w: '1fr' },
						{ label: '❌ 不能这样写', w: '1fr' },
						{ label: '✅ 写到什么程度', w: '2.45fr' },
					]}
					rows={[
						[num(1), <b>目标用户是谁？</b>, bad('澳洲中小企业'), good('在澳洲经营 1–5 人装修公司的老板')],
						[num(2), <b>他们遇到什么问题？</b>, bad('效率低'), good('写清发生场景、困难和造成的后果')],
						[num(3), <b>现在怎么解决？</b>, bad('人工处理'), good('Excel、微信、助理、ChatGPT、现有软件，或者根本不处理')],
						[num(4), <b>现有方案哪里不好？</b>, bad('不够智能'), good('太贵、太复杂、数据分散、不适合本地或仍需大量人工')],
						[num(5), <b>初步解决方案是什么？</b>, bad('AI 赋能平台'), good('我们帮助谁，通过什么，实现什么；只写一句话')],
						[num(6), <b>本周怎么验证？</b>, bad('做个网站看看'), good('访谈 5 人、收集 3 个真实案例、找 3 个竞品、询问付费意愿')],
					]}
				/>

				<Punchline bg={colors.dark}>
					这张卡不是商业计划书。它是你准备拿去找真实用户<u>求证</u>的一组假设。
				</Punchline>
			</Body>
		</Slide>
	);
}
