import { DeckFrame, AnimatedGroup, Label, colors } from '../deck';
import { assetPath } from '../ui';
import { Stat, muted } from '../lesson';

// 视频：天枢 30 秒宣传片（AI 用 Remotion 生成，含配乐）；数字来源见 SOURCE_MAP #1–#6
export default function S02_Result() {
	return (
		<DeckFrame tag="00 · 先看成品" title="三天，没有一行代码是我写的" subtitle="规则是我说的。写代码、取数据、查公告、做网页、每天更新、做宣传片，都是 Claude 做的。" accent={colors.red}>
			<div style={{ display: 'grid', gridTemplateColumns: '1.3fr .7fr', gap: 34, height: '100%', alignItems: 'center' }}>
				<AnimatedGroup delay={.15} style={{ position: 'relative' }}>
					<video
						src={assetPath('video/tianshu.mp4')}
						poster={assetPath('img/v5_title.jpg')}
						controls
						playsInline
						preload="metadata"
						onKeyDown={e => e.preventDefault()}
						style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', background: colors.black, borderRadius: 18, border: `2px solid ${colors.dark}`, boxShadow: '8px 8px 0 rgba(255,222,89,.92)' }}
					/>
					<span style={{ position: 'absolute', left: 14, top: 14, pointerEvents: 'none' }}><Label bg={colors.yellow} color={colors.dark}>宣传片 · 30 秒 · AI 做的</Label></span>
					<div style={{ fontSize: 17, color: muted, marginTop: 14 }}>点播放键看，有声音。翻页前先暂停。</div>
				</AnimatedGroup>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 20px', alignContent: 'center' }}>
					<div style={{ gridColumn: '1 / -1' }}><Stat value={165} suffix=" GB" label="数据全部跑完，才出最终结果" delay={.2} color={colors.red} size={64} /></div>
					<Stat value={3} suffix=" 天" label="把系统搭起来" delay={.25} size={50} />
					<Stat value={42} suffix=" 个" label="决定，都有记录" delay={.35} color={colors.red} size={50} />
					<Stat value={65} suffix=" 组" label="AI 助手同时查公告" delay={.45} color={colors.red} size={50} />
					<Stat value={2438} label="条结论，每条都有出处" delay={.55} size={50} />
					<Stat value={1087} label="份官方原文" delay={.65} size={50} />
					<Stat value={0} suffix=" 行" label="代码是我自己写的" delay={.75} color={colors.blue} size={50} />
				</div>
			</div>
		</DeckFrame>
	);
}
