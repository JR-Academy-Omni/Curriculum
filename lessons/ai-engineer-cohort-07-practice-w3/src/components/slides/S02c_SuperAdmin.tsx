import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';

const features = [
	['开通 / 停用养老院', '新客户签约后开通；不再续用就停用，数据按规定保留。'],
	['创建院管理员', '给每家养老院开第一个管理员账号，之后由他管本院员工。'],
	['角色和权限模板', '定好护理员、审核人、院管理员默认能做什么。'],
	['配置与密钥', '功能开关、选用哪个 AI 模型、填写供应商 key；key 只能写入，看不到明文。'],
	['审计查询', '跨养老院查谁在什么时候做了什么，用于排查问题。'],
	['受控排障', '客户报问题时查看该院数据，必须登记原因并留下记录。'],
];

export default function S02c_SuperAdmin() {
	return <DeckFrame tag="W3 · PRD · Super Admin" title="为什么要 Super Admin，它能做什么" subtitle="Super Admin 是我们自己的运营和技术团队用的后台。" titleSize={52}>
		<div data-lesson-content style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
			<div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.3fr', gap: 22, flex: 1, minHeight: 0 }}>
				<AnimatedGroup delay={.1} style={{ background: '#f3e6fb', border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 800 }}>为什么需要</div>
					<div style={{ fontSize: 20, lineHeight: 1.5 }}>我们是一个平台，同时服务很多家养老院。每家养老院只能管自己，总得有人站在所有养老院之上开通客户、管配置、查问题。</div>
					<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 800, marginTop: 4 }}>没有它会怎样</div>
					<div style={{ fontSize: 19, lineHeight: 1.5 }}>开一家新养老院要工程师手改数据库；换 AI 模型或 key 要改代码重新发布；出了问题查不到是谁做了什么。</div>
				</AnimatedGroup>
				<AnimatedGroup delay={.2} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '14px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
					{features.map(([h, t], i) => <div key={h} style={{ display: 'grid', gridTemplateColumns: '34px 200px 1fr', gap: 10, alignItems: 'baseline' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800 }}>0{i + 1}</span>
						<span style={{ fontSize: 20, fontWeight: 800 }}>{h}</span>
						<span style={{ fontSize: 18, lineHeight: 1.45, color: '#403b37' }}>{t}</span>
					</div>)}
				</AnimatedGroup>
			</div>
			<div data-lesson-footer style={{ fontSize: 19, lineHeight: 1.4, fontWeight: 750, padding: '8px 18px', borderRadius: 12, background: '#f9dfc7', color: '#463c32' }}>Super Admin 只管平台，不替养老院写护理记录；本周只做种子账号和拒绝越权的测试。</div>
		</div>
	</DeckFrame>;
}
