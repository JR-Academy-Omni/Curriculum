import { Page, Head, Card, Pill, asset, c, f, grid, parallax, type Tone } from '../kit';

// 状态依据：App Store 公开接口（2026-11-26 版本 1.0.6）、官网下载入口。小程序未核实发布状态，不写「已上线」。
const platforms: [Tone, string, string, string, string][] = [
	['coral', 'iOS App', 'App Store 已上架', '章节刷题、模考、错题本、拍照问 AI', '📱'],
	['sky', '浏览器插件', 'Chrome 插件已上线', '截图即问，AI 逐个选项讲解', '🧩'],
	['mint', '网页版', 'cert.jracademy.ai', '章节讲解、题库与全真模考', '💻'],
	['sunshine', '微信小程序', '自研移动刷题端', '碎片时间随手练', '💬'],
];
const certs = ['AWS CLF-C02', 'AZ-900', 'AWS SAA-C03', 'AWS DVA-C02', 'AZ-104', 'AWS MLS-C01', 'Claude 认证'];

export default function ProductPhones() {
	return (
		<Page bg={c('wash-sunshine')}>
			<div className="scene" {...parallax} style={{ position: 'absolute', inset: 0 }}>
				<div className="stage">
					<div style={{ position: 'absolute', left: 80, top: 50, width: 900, display: 'flex', flexDirection: 'column', gap: 22 }}>
						<Head tone="sunshine" eyebrow="考证匠 CertMaster · 匠人自主研发" title={<>350+ 认证，<span className="marker">多端全部自研</span></>} lead="从网页、App 到插件和小程序，都是匠人自己的研发团队做的。一章一章过，随时随地练。" width={900} />
						<div style={grid(2, 16)}>
							{platforms.map(([tone, name, status, d, icon]) => (
								<Card key={name} style={{ padding: '20px 22px', borderLeft: `8px solid ${c(tone)}`, borderRadius: 20 }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span aria-hidden style={{ fontSize: 30 }}>{icon}</span><span style={{ fontFamily: f.h, fontWeight: 700, fontSize: 28 }}>{name}</span></div>
									<Pill tone={tone} style={{ marginTop: 12, fontSize: 15, padding: '4px 13px' }}>{status}</Pill>
									<p style={{ fontSize: 17, color: c('slate'), marginTop: 10 }}>{d}</p>
								</Card>
							))}
						</div>
						<p style={{ fontSize: 19, fontWeight: 700 }}>AI Tutor 讲解 · 章节学习 · 模拟考试 · 错题本</p>
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{certs.map((x) => <Pill key={x} style={{ background: c('canvas-pure'), fontSize: 15, padding: '5px 13px' }}>{x}</Pill>)}</div>
						<div style={{ background: c('night'), color: c('on-night'), borderRadius: 20, padding: '16px 24px', fontSize: 20 }}><b style={{ color: c('sunshine') }}>匠人自研产品：</b>CareerOS Harness · 职聘 Jobpin · 考证匠</div>
					</div>
					{([['certmaster/ios-ai.jpg', '考证匠 iOS App：拍照或输入题目，AI 解析', 1200, 108, 30, 7, 1.2], ['certmaster/ios-certs.jpg', '考证匠 iOS App：认证中心', 1030, 150, 150, -7, 0]] as const).map(([src, alt, left, top, depth, rot, delay]) => (
						<div key={src} style={{ position: 'absolute', left, top, transform: `translateZ(${depth}px) rotateY(${rot * -1.6}deg) rotate(${rot * 0.6}deg)` }}>
							<div className="float phone" style={{ animationDelay: `${delay}s` }}><img src={asset(src)} alt={alt} /></div>
						</div>
					))}
					<img src={asset('certmaster/icon.jpg')} alt="考证匠 App 图标" className="float" style={{ position: 'absolute', left: 1000, top: 72, width: 92, borderRadius: 22, boxShadow: c('shadow-pop'), transform: 'translateZ(200px)' }} />
				</div>
			</div>
		</Page>
	);
}
