import type { ReactNode } from 'react';
import { AnimatedGroup, DeckFrame, Label, Panel, Steps, Table, colors, fonts, ink } from './kit';

export const columns = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' };

export function Source({ links }: { links: [string, string][] }) {
	return <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px 20px', marginTop: 14, fontSize: 17, lineHeight: 1.4 }}>
		{links.map(([label, url]) => <a key={url} href={url} target="_blank" rel="noreferrer" style={{ color: colors.dark, textUnderlineOffset: 4 }}>{label} ↗</a>)}
	</div>;
}

export function Subheading({ children }: { children: ReactNode }) {
	return <h2 style={{ fontSize: 30, lineHeight: 1.18, fontWeight: 850, margin: '0 0 14px' }}>{children}</h2>;
}

export function Body({ children }: { children: ReactNode }) {
	return <p style={{ fontSize: 23, lineHeight: 1.48, margin: '0 0 12px' }}>{children}</p>;
}

export function RolePage({ tag, title, subtitle, job, skills, evidence, pay, payLabel = '年薪参考 · AUD', payScope, signal, employer, links }: {
	tag: string;
	title: string;
	subtitle: string;
	job: ReactNode[];
	skills: ReactNode;
	evidence: ReactNode;
	pay: string;
	payLabel?: string;
	payScope: string;
	signal: string;
	employer?: ReactNode;
	links: [string, string][];
}) {
	return <DeckFrame tag={tag} title={title} subtitle={subtitle}>
		<div style={{ ...columns, gridTemplateColumns: '1.13fr .87fr' }}>
			<AnimatedGroup delay={.13} style={{ display: 'flex' }}>
				<Panel style={{ flex: 1 }}>
					<Subheading>工作怎么做</Subheading>
					<Steps items={job} size={22} />
					<div style={{ borderTop: '2px solid #10162f26', marginTop: 20, paddingTop: 16 }}>
						<Body><b>需要什么</b>　{skills}</Body>
						<Body><b>面试看什么</b>　{evidence}</Body>
					</div>
				</Panel>
			</AnimatedGroup>
			<AnimatedGroup delay={.22} style={{ display: 'flex' }}>
				<Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
					<Label bg={colors.yellow} color={colors.dark}>{payLabel}</Label>
					<div style={{ fontFamily: fonts.heading, fontSize: 57, lineHeight: 1.06, fontWeight: 900, margin: '22px 0 12px' }}>{pay}</div>
					<Body>{payScope}</Body>
					<div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid #ffffff55' }}>
						<Label bg={colors.white} color={colors.dark}>澳洲招聘</Label>
						{employer}
						<p style={{ fontSize: 22, lineHeight: 1.48, marginTop: 13 }}>{signal}</p>
					</div>
				</Panel>
			</AnimatedGroup>
		</div>
		<Source links={links} />
	</DeckFrame>;
}

export function NoteLine({ children }: { children: ReactNode }) {
	return <p style={{ marginTop: 16, color: ink, fontSize: 21, lineHeight: 1.45 }}>{children}</p>;
}

export interface CareerDetail extends SalaryDetail {
	title: string;
	subtitle: string;
	capabilities: [string, string][];
	practice: string;
	jobLinks: [string, string][];
}

export interface SalaryDetail {
	payTitle: string;
	paySubtitle: string;
	payColumns: string[];
	payRows: string[][];
	payNote: string;
	payLinks: [string, string][];
}

export function CapabilityPage({ detail }: { detail: CareerDetail }) {
	return <DeckFrame tag="澳洲岗位能力" title={detail.title} subtitle={detail.subtitle} titleSize={50}>
		<div style={columns}>
			{[detail.capabilities.slice(0, 5), detail.capabilities.slice(5)].map(group =>
				<Panel key={group[0][0]} style={{ padding: '6px 18px' }}>
					<dl style={{ margin: 0 }}>
						{group.map(([name, responsibility], i) => <div key={name} style={{ padding: '6px 0', borderTop: i ? '1px solid #10162f26' : undefined }}>
							<dt style={{ fontSize: 22, fontWeight: 800 }}>{name}</dt>
							<dd style={{ margin: 0, fontSize: 20, lineHeight: 1.35 }}>{responsibility}</dd>
						</div>)}
					</dl>
				</Panel>)}
		</div>
		<NoteLine>{detail.practice}</NoteLine>
		<Source links={detail.jobLinks} />
	</DeckFrame>;
}

export function SalaryPage({ detail }: { detail: SalaryDetail }) {
	return <DeckFrame tag="薪酬与职级" title={detail.payTitle} subtitle={detail.paySubtitle} titleSize={54}>
		<Table head={detail.payColumns} rows={detail.payRows} widths={detail.payColumns.length === 3 ? '1.12fr 1.05fr 1.24fr' : '1.18fr 1fr 1fr 1fr'} size={23} highlightCol={1} />
		<NoteLine>{detail.payNote}</NoteLine>
		<Source links={detail.payLinks} />
	</DeckFrame>;
}
