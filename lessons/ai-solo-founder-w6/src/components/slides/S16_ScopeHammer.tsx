import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const cuts = [['官网', '一页服务说明'], ['内容矩阵', '3 个定向邀请'], ['自动化 CRM', '表格记录'], ['完整品牌', '清晰可信即可']];

export default function S16_ScopeHammer() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.orange}>SCOPE HAMMER</Tag><Title size="56px" style={{ margin: '15px 0 28px' }}>范围锤炼：保留结果，替换解法</Title>
		<Grid cols={2} gap={18}>{cuts.map(([before, after]) => <CardSm key={before} bg={colors.warmBg}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 24, fontWeight: 900 }}><span style={{ textDecoration: 'line-through' }}>{before}</span><span>→</span><span>{after}</span></div></CardSm>)}</Grid>
		<p style={{ fontSize: 22, marginTop: 28 }}>追问：有没有更小、更丑，但仍能产生同一证据的版本？</p>
	</Inner></Slide>;
}