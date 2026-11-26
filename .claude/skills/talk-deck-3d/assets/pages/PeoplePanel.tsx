import { Page, Head, Card, asset, body, c, f, grid, type Tone } from '../kit';
import { teachers } from '../../data/teachers';

const courses = [['AI Engineer 训练营', '从 LLM 应用到 Agent 的工程训练营'], ['AI Engineer 全栈项目班', '16 周'], ['DevOps 项目实战班', '12 周 · 部署流水线、容器化与监控'], ['数据工程 & 机器学习全栈项目班', '14 周 + 就业辅导视频课'], ['FDE Tech 职业进阶班', '10 周 · 30 项工程交付任务'], ['FDE Business 职业进阶班', '8 周 · 30 项企业自动化任务'], ['一人公司（OPC）落地实战营', '用 AI 把一个想法做成生意'], ['Vibe Coding 大师课', '用 AI 写代码做出自己的产品'], ['AI 风险管理、治理与审计实战课', '零基础可学']];
const rings: Tone[] = ['coral', 'sky', 'mint', 'sunshine', 'bubblegum'];

export default function PeoplePanel() {
	return (
		<Page>
			<div style={{ ...body, paddingTop: 56, gap: 26 }}>
				<Head eyebrow="训练营与课程" title="想系统学，跟着一线老师做项目" lead="直播课、做项目、导师答疑，按岗位方向开班。开班时间见 jracademy.ai/bootcamp。" />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 36, flex: 1, minHeight: 0 }}>
					<div style={{ ...grid(3, 14), gridAutoRows: '1fr' }}>
						{courses.map(([t, d], i) => <Card key={t} style={{ padding: 20, borderRadius: 20, borderTop: `5px solid ${c(rings[i % 5])}` }}><div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 21, lineHeight: 1.45 }}>{t}</div><div style={{ fontSize: 16, lineHeight: 1.6, color: c('slate'), marginTop: 10 }}>{d}</div></Card>)}
					</div>
					<aside style={{ background: c('night'), borderRadius: c('r-feature'), padding: '24px 22px', color: c('on-night'), display: 'flex', flexDirection: 'column', boxShadow: c('shadow-pop') }}>
						<div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 27 }}>带课的老师</div>
						<div style={{ fontSize: 16, color: c('on-night-muted'), marginTop: 2 }}>600+ 行业导师，以下是其中几位</div>
						<div style={{ ...grid(4, 10), flex: 1, alignContent: 'space-around', marginTop: 12 }}>
							{teachers.map((n, i) => (
								<figure key={n} className="pop" style={{ textAlign: 'center', animationDelay: `${0.25 + i * 0.07}s` }}>
									<div className="float" style={{ animationDelay: `${(i % 5) * 0.7}s`, width: 90, height: 90, margin: '0 auto', borderRadius: '50%', padding: 3, background: c(rings[i % 5]) }}>
										<img src={asset(`teachers/t${String(i + 1).padStart(2, '0')}.jpg`)} alt={n} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
									</div>
									<figcaption style={{ fontSize: 14, marginTop: 7, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{n.replace('（Winston） Zeng', '')}</figcaption>
								</figure>
							))}
						</div>
					</aside>
				</div>
			</div>
		</Page>
	);
}
