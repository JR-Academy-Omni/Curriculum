import { Page, Head, asset, body, c, grid } from '../kit';

const mentors = [['Huansong（Winston）Zeng', 'Software Engineer · Canva'], ['韭天', 'Software Engineer · Google'], ['Aurora Zhou', 'Technology & Transformation Consultant · Deloitte'], ['Vik Gambhir', 'Product Lead · Atlassian'], ['Ally Tang', 'Senior Software Engineer · Atlassian'], ['Ray Ma', 'GitHub 亚洲区高级技术负责人']];
export default function PortraitFlip() {
	return (
		<Page dots>
			<div style={{ ...body, justifyContent: 'center', gap: 42 }}>
				<Head eyebrow="谁来教你" title="600+ 行业导师，来自一线公司" lead="下面是部分讲师。每位老师的背景和授课方向见官网。" />
				<div style={grid(6, 18)}>{mentors.map(([n, r], i) => <figure key={n} className="flip"><img src={asset(`mentors/m${i + 1}.jpg`)} alt={n} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: c('r-card'), display: 'block' }} /><figcaption style={{ marginTop: 12 }}><div style={{ fontSize: 19, fontWeight: 700 }}>{n}</div><div style={{ fontSize: 16, color: c('slate'), lineHeight: 1.5, marginTop: 3 }}>{r}</div></figcaption></figure>)}</div>
			</div>
		</Page>
	);
}
