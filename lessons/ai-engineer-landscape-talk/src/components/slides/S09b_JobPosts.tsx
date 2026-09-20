import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, assetPath, colors, fonts, border, shadowSm } from '../ui';
import { NOW_LABEL } from '../../data/auAiTimeline';
import { JOB_POSTS, JOB_FAMILIES, JOB_POSTS_SOURCE, type JobFamily } from '../../data/auJobPosts';

const FAMILY_BG: Record<JobFamily, string> = { 'ai-ml': colors.blue, 'swe-ai': colors.green, client: colors.orange };

const filterBtn = (active: boolean, bg: string) => ({
	fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '7px 14px', cursor: 'pointer', color: colors.black, whiteSpace: 'nowrap', flex: 'none',
	border: `2px solid ${colors.black}`, background: active ? bg : colors.white,
	boxShadow: active ? 'none' : shadowSm, transform: active ? 'translate(3px, 3px)' : 'none',
} as const);

// 转场页：时光机回到“现在” → 打开 LinkedIn 看墨尔本今天在招什么 → 后面三页拆 JD。
// 操作：点上方分类筛选岗位，再点一次取消。
export default function S09b_JobPosts() {
	const [family, setFamily] = useState<JobFamily | null>(null);
	const seniorCount = JOB_POSTS.filter((j) => /^(Senior|Lead)\b/.test(j.title)).length;
	const hybridCount = JOB_POSTS.filter((j) => j.mode === 'Hybrid').length;
	const active = JOB_FAMILIES.find((f) => f.key === family);

	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '34px 64px 54px', display: 'flex', flexDirection: 'column', gap: 14 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
					style={{ display: 'flex', alignItems: 'center', gap: 14, height: 50 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '4px 10px', background: colors.yellow, border: `2px solid ${colors.black}`, whiteSpace: 'nowrap' }}>{NOW_LABEL}</span>
					<Title size="36px">回到现在：墨尔本今天在招什么？</Title>
				</motion.div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.15 }}
					style={{ display: 'flex', alignItems: 'center', gap: 10, height: 40 }}>
					<button onClick={() => setFamily(null)} style={filterBtn(family === null, colors.yellow)}>全部 {JOB_POSTS.length}</button>
					{JOB_FAMILIES.map((f) => (
						<button key={f.key} onClick={() => setFamily(family === f.key ? null : f.key)} style={filterBtn(family === f.key, FAMILY_BG[f.key])}>
							{f.label} {JOB_POSTS.filter((j) => j.family === f.key).length}
						</button>
					))}
					<span style={{ marginLeft: 8, fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap' }}>{active?.hint}</span>
				</motion.div>

				<div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: 14 }}>
					{JOB_POSTS.map((j, i) => {
						const dim = family !== null && j.family !== family;
						return (
							<motion.div key={j.title + j.company}
								initial={{ opacity: 0, y: 30, rotate: i % 2 ? 1.5 : -1.5 }}
								animate={{ opacity: dim ? 0.25 : 1, y: 0, rotate: 0, scale: family !== null && !dim ? 1.02 : 1 }}
								transition={family === null ? { type: 'spring', stiffness: 220, damping: 18, delay: 0.2 + i * 0.06 } : { duration: 0.25 }}
								style={{ minHeight: 0, overflow: 'hidden', background: colors.white, border, boxShadow: shadowSm, padding: '14px 16px', display: 'flex', flexDirection: 'column' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
									<span style={{ height: 48, flex: 'none', display: 'flex', alignItems: 'center' }}>
										<img src={assetPath(j.logo)} alt={j.company} style={{ display: 'block', maxWidth: 110, maxHeight: 48 }} />
									</span>
									<span style={{ fontSize: 19, fontWeight: 700 }}>{j.company}</span>
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, lineHeight: 1.2 }}>{j.title}</div>
								<div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
									<span style={{ width: 12, height: 12, flex: 'none', background: FAMILY_BG[j.family], border: `2px solid ${colors.black}` }} />
									<span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{j.location}{j.mode ? ` · ${j.mode}` : ''}</span>
									{j.posted && <span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 12, whiteSpace: 'nowrap', opacity: 0.65 }}>{j.posted}</span>}
								</div>
							</motion.div>
						);
					})}
				</div>

				<div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginRight: 96 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap' }}>
						{JOB_POSTS.length} 个岗位里 {seniorCount} 个是 Senior / Lead · {hybridCount} 个 Hybrid
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.dark, opacity: 0.6 }}>{JOB_POSTS_SOURCE}；分类为讲者归类</span>
				</div>
			</div>
		</Slide>
	);
}
