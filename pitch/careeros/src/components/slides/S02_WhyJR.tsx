import { AnimatedGroup, Panel, Label } from '../deck';
import { Page, Todo, H3, P, colors, fonts } from '../pitch';

export default function S02_WhyJR() {
	return (
		<Page tag="01 · Who we are / why we are changing" title="From selling courses to delivering career outcomes" subtitle="JR Academy (匠人学院) has trained IT and AI job seekers for years, Chinese speakers worldwide and locals in Australia. The course model has plateaued; our next stage is CareerOS." source="Company data, as of Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 28, height: '100%' }}>
				<AnimatedGroup delay={.15} style={{ display: 'flex' }}>
					<Panel style={{ flex: 1, borderTop: `12px solid ${colors.red}` }}>
						<Label bg={colors.red}>What we ran into</Label>
						<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 30, lineHeight: 1.35, marginTop: 22 }}>AI made knowledge free. Learners still need a career outcome.</div>
						<div style={{ display: 'grid', gap: 14, marginTop: 24 }}>
							<P><b>Courses sell knowledge:</b> AI now explains any topic for free, and our course sales are under pressure.</P>
							<P><b>The course ends too early:</b> learn → project → graduate → job hunt alone. The relationship ends before the outcome learners paid for.</P>
							<P><b>Mentor-heavy teaching doesn't scale:</b> AI can now handle most day-to-day guidance; people are best used for review.</P>
						</div>
					</Panel>
				</AnimatedGroup>
				<AnimatedGroup delay={.28} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
					<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '18px 22px', borderTop: `10px solid ${colors.green}` }}>
						<H3 style={{ fontSize: 24 }}>Annual revenue</H3>
						<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 64, lineHeight: 1.1, marginTop: 8 }}>~A$1M</div>
						<P style={{ fontSize: 17, marginTop: 4, color: '#7a716a' }}>Existing JR Academy training business, before CareerOS revenue</P>
					</div>
					{[
						['Course business trend', 'YoY change in course revenue or enrolments'],
						['Learners served', 'total learners / paying learners, last 12 months'],
					].map(([h, t]) => (
						<div key={h} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '18px 22px' }}>
							<H3 style={{ fontSize: 24 }}>{h}</H3>
							<div style={{ marginTop: 10 }}><Todo>{t}</Todo></div>
						</div>
					))}
				</AnimatedGroup>
			</div>
		</Page>
	);
}
