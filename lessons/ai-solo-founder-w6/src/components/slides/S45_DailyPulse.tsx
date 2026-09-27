import { Slide, Inner, Half, Title, Card, Tag, colors, fonts } from '../ui';

export default function S45_DailyPulse() {
	return <Slide bg={colors.yellow}><Inner split><Half><Tag bg={colors.dark}>EXPERT RULES · 1–4</Tag><Title size="55px" style={{ margin: '18px 0' }}>先把方向、边界和反馈距离管住</Title></Half><Half><Card bg={colors.white}><div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>PUBLIC METHODS</div>{['Microsoft Learn：速度来自持续规划与学习', 'Scrum：透明 → 检查 → 调整', 'Shape Up：固定时间，范围可变', 'Lean Startup：Build → Measure → Learn'].map((item, index) => <p key={item} style={{ fontSize: 19, fontWeight: 900, margin: '16px 0' }}>{index + 1}. {item}</p>)}</Card></Half></Inner></Slide>;
}