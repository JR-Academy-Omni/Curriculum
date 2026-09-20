import { Slide, Inner, Title, Highlight, Tag, colors } from '../ui';

export default function C48_YourCase() {
	return <Slide bg={colors.darkBg}><Inner center><Tag bg={colors.yellow} color={colors.black}>PART 5 · 案例工作坊 · 30 分钟</Tag><Title white size="76px" style={{ margin: '24px 0' }}>现在，轮到你们<br /><Highlight color={colors.green}>分析与 Trim</Highlight></Title><p style={{ color: colors.white, fontSize: 24 }}>你自己的项目 · 拆解 · 取舍 · Sprint 规划 · 90 秒汇报</p></Inner></Slide>;
}