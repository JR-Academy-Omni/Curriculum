import { useEffect, useState } from 'react';
import { Page, asset, c, f } from '../kit';

// 画面为各产品官网实拍（2026-11-26）
const products = [
	{ img: 'metatown', name: 'MetaTown', url: 'metatown.ai', tag: '3D AI 小镇', desc: '在 3D 小镇里工作和生活，和 AI 居民聊天' },
	{ img: 'airbotix', name: 'Airbotix', url: 'airbotix.ai', tag: '青少年 AI 教育', desc: '5–17 岁孩子的 AI 与编程课' },
	{ img: 'deeprouter', name: 'DeepRouter', url: 'deeprouter.co', tag: 'AI 模型网关', desc: '一个账号、一个 key 调用主流 AI 模型' },
	{ img: 'deals', name: '澳洲薅羊毛', url: 'deals.jracademy.ai', tag: '网站 · iPhone App', desc: '超市特价、学生福利和免费资源' },
	{ img: 'codequest', name: 'Code Quest Junior', url: 'airbotix.ai/codequest', tag: '3D 编程游戏', desc: '用积木编程指挥角色闯关冒险' },
	{ img: 'j3', name: 'J3 Club', url: 'j3.club', tag: 'AI 叙事游戏', desc: '选一个身份进入故事，AI 扮演其他所有人' },
	{ img: 'zen', name: '赛博木鱼 · 静心寺', url: 'zen.j3.club', tag: '3D 线上禅堂', desc: '敲木鱼、许个愿，或者安静坐一会儿' },
	{ img: 'airbotixgame', name: 'Creative Code Studio', url: 'airbotix.ai', tag: '少儿游戏创作', desc: '孩子说出想法，和 AI 一起做出小游戏' },
	{ img: 'metatree', name: 'Metatree AI Lab', url: 'metatreelab.ai', tag: '企业 AI 服务', desc: '帮企业做自动化、AI 系统和团队培训' },
];
const N = products.length;

export default function ProductCarousel() {
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	useEffect(() => {
		if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = window.setInterval(() => setActive((a) => (a + 1) % N), 2600);
		return () => window.clearInterval(id);
	}, [paused]);
	const current = products[active];
	return (
		<Page night>
			<div style={{ padding: '40px 80px 0' }}>
				<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 54, lineHeight: 1.25 }}>匠人旗下，还有这些产品</h1>
				<p style={{ fontSize: 22, color: c('on-night-muted'), marginTop: 4 }}>不只做教育：3D 世界、AI 游戏、模型网关、生活服务和企业 AI，我们都在自己做。</p>
			</div>
			<div style={{ position: 'absolute', left: 0, right: 0, top: 168, height: 436, perspective: 1500 }}>
				{products.map((p, i) => {
					let d = i - active;
					if (d > N / 2) d -= N;
					if (d < -N / 2) d += N;
					const far = Math.abs(d);
					return (
						<button key={p.img} type="button" onClick={() => { setActive(i); setPaused(true); }} aria-label={`查看 ${p.name}`}
							style={{ position: 'absolute', left: 800 - 320, top: 10, width: 640, height: 400, padding: 0, cursor: 'pointer', borderRadius: 22, overflow: 'hidden', background: c('night-2'), border: `${d === 0 ? 3 : 1}px solid ${d === 0 ? c('sunshine') : c('night-line')}`, zIndex: 10 - far, opacity: far > 3 ? 0 : 1 - far * 0.16, transform: `translateX(${Math.sign(d) * (far * 255 + (far ? 150 : 0))}px) translateZ(${-far * 230}px) rotateY(${-Math.sign(d) * 38}deg)`, boxShadow: d === 0 ? '0 34px 70px -18px rgba(255, 212, 59, 0.4)' : '0 24px 40px -20px rgba(0,0,0,0.8)', transition: 'all 0.7s var(--jc-ease)' }}>
							<img src={asset(`products/${p.img}.webp`)} alt={`${p.name} 官网画面`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
						</button>
					);
				})}
			</div>
			<div style={{ position: 'absolute', left: 0, right: 0, top: 600, textAlign: 'center' }}>
				<span style={{ fontFamily: f.h, fontWeight: 700, fontSize: 30 }}>{current.name}</span>
				<span style={{ marginLeft: 16, fontSize: 19, color: c('sunshine'), fontWeight: 700 }}>{current.url}</span>
			</div>
			<div onMouseLeave={() => setPaused(false)} style={{ position: 'absolute', left: 60, right: 60, top: 654, display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 10 }}>
				{products.map((p, i) => (
					<div key={p.img} onMouseEnter={() => { setActive(i); setPaused(true); }} className="rise" style={{ cursor: 'pointer' }}>
						<div style={{ height: 92, padding: '10px 14px', borderRadius: 14, background: i === active ? c('canvas-pure') : c('night-2'), color: i === active ? c('ink') : c('on-night'), border: `1px solid ${i === active ? c('sunshine') : c('night-line')}`, transition: 'background 0.4s, color 0.4s' }}>
							<div style={{ fontSize: 16.5, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden' }}>{p.name}</div>
							<div style={{ fontSize: 12.5, fontWeight: 700, marginTop: 1, color: i === active ? c('slate') : c('sunshine') }}>{p.tag}</div>
							<div style={{ fontSize: 12.5, lineHeight: 1.45, marginTop: 4, opacity: 0.8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.desc}</div>
						</div>
					</div>
				))}
				<div className="rise" style={{ height: 92, padding: '10px 14px', borderRadius: 14, border: `1px dashed ${c('night-line')}`, color: c('on-night') }}>
					<div style={{ fontSize: 16.5, fontWeight: 700 }}>学习与求职产品</div>
					<div style={{ fontSize: 12.5, lineHeight: 1.7, marginTop: 4, color: c('on-night-muted') }}>CareerOS Harness · 考证匠<br />职聘 Jobpin</div>
				</div>
			</div>
		</Page>
	);
}
