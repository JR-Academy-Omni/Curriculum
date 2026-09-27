import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const FILES = [
	{ name: 'Event_Brief_FINAL.docx', kind: 'W', color: '#2B6FD3', note: '活动信息 · 旧日期', preview: 'text' },
	{ name: 'Sponsorship_Deck_FINAL.docx', kind: 'W', color: '#2B6FD3', note: 'Gold · $5,000', preview: 'text' },
	{ name: 'Sponsorship_FINAL_FINAL.docx', kind: 'W', color: '#2B6FD3', note: 'Gold · $6,500', preview: 'text' },
	{ name: 'Sponsor_Price_NEW.xlsx', kind: 'X', color: '#23835B', note: 'Gold · $7,500', preview: 'bars' },
	{ name: 'Sponsor_Leads_v3.xlsx', kind: 'X', color: '#23835B', note: '名额：3？', preview: 'table' },
	{ name: 'Deck_USE_THIS_v8.pptx', kind: 'P', color: '#D45A32', note: '权益仍是旧版', preview: 'chart' },
];

function FilePreview({ file }: { file: (typeof FILES)[number] }) {
	return (
		<div style={{ height: 66, border: '1.5px solid #D4D8E0', background: '#fff', position: 'relative', overflow: 'hidden', padding: '8px 7px 6px' }}>
			<div style={{ position: 'absolute', top: 0, left: 0, width: 23, height: 23, display: 'grid', placeItems: 'center', background: file.color, color: '#fff', fontFamily: fonts.heading, fontSize: 12, fontWeight: 950 }}>{file.kind}</div>
			{file.preview === 'text' ? (
				<div style={{ marginLeft: 26, display: 'grid', gap: 5 }}>
					<div style={{ width: '80%', height: 5, background: '#C7CBD4' }} />
					<div style={{ width: '95%', height: 4, background: '#E0E2E8' }} />
					<div style={{ width: '70%', height: 4, background: '#E0E2E8' }} />
					<div style={{ width: '88%', height: 4, background: '#E0E2E8' }} />
				</div>
			) : null}
			{file.preview === 'bars' ? (
				<div style={{ marginLeft: 27, height: 45, display: 'flex', alignItems: 'flex-end', gap: 6, borderLeft: '1px solid #CBD0D8', borderBottom: '1px solid #CBD0D8', padding: '0 6px' }}>
					{[18, 31, 24, 39].map((height, index) => <div key={height} style={{ width: 11, height, background: index === 3 ? '#23835B' : '#9BD0B8' }} />)}
				</div>
			) : null}
			{file.preview === 'table' ? (
				<div style={{ marginLeft: 25, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid #BFC5CE', borderLeft: '1px solid #BFC5CE' }}>
					{Array.from({ length: 12 }).map((_, index) => <div key={index} style={{ height: 11, borderRight: '1px solid #BFC5CE', borderBottom: '1px solid #BFC5CE', background: index < 3 ? '#B9E0CD' : index === 7 ? '#FFF0A8' : '#fff' }} />)}
				</div>
			) : null}
			{file.preview === 'chart' ? (
				<div style={{ marginLeft: 27, display: 'grid', gridTemplateColumns: '42px 1fr', gap: 7, alignItems: 'center' }}>
					<div style={{ width: 39, height: 39, borderRadius: '50%', background: 'conic-gradient(#D45A32 0 43%, #FFB59C 43% 72%, #FFE0D6 72% 100%)', border: '1px solid #B74928' }} />
					<div style={{ display: 'grid', gap: 5 }}><div style={{ height: 5, background: '#D45A32' }} /><div style={{ width: '78%', height: 5, background: '#FFB59C' }} /><div style={{ width: '54%', height: 5, background: '#FFE0D6' }} /></div>
				</div>
			) : null}
		</div>
	);
}

export default function S11b_SoTProjectControl() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '30px 55px 22px' }}>
				<SlideHead
					tag="CASE · 大型活动 Sponsorship Deck"
					tagBg={colors.red}
					title="价格改一次，就多一份 final-final：维护很快变成灾难"
					titleSize="clamp(29px, 2.6vw, 41px)"
					sub="赞助价格、权益、剩余名额、Logo 和联系人不断变化；文件名不能告诉人或 LLM 哪一版算数。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '0.92fr 0.25fr 1.12fr', gap: 17, alignItems: 'stretch' }}>
					<div style={{ border, boxShadow: shadow, background: '#F8F9FA', padding: '12px 13px' }}>
						<div style={{ border: '1.5px solid #D4D8E0', borderRadius: 8, background: colors.white, padding: '8px 10px', display: 'grid', gridTemplateColumns: '1fr 150px', gap: 10, alignItems: 'center' }}>
							<div style={{ fontSize: 13, fontWeight: 850, color: '#3C4043' }}><span style={{ color: '#2B6FD3' }}>My Drive</span> › Events › Sponsorship</div>
							<div style={{ borderRadius: 12, background: '#EEF1F5', color: '#7A7F88', padding: '5px 9px', fontSize: 11.5 }}>⌕ Search in Drive</div>
						</div>
						<div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: colors.red }}>GOOGLE DRIVE · 版本灾难</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 800, color: '#666' }}>6 份文件 · 4 个“当前版”</div>
						</div>
						<div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7 }}>
							{FILES.map((file, index) => (
								<motion.div key={file.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05 * index }} style={{ minWidth: 0 }}>
									<FilePreview file={file} />
									<div style={{ marginTop: 4, fontFamily: fonts.mono, fontSize: 8.8, lineHeight: 1.2, fontWeight: 850, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name}</div>
									<div style={{ marginTop: 2, fontSize: 11.2, lineHeight: 1.2, fontWeight: 850, color: file.note.includes('$') || file.note.includes('?') ? colors.red : '#555' }}>{file.note}</div>
								</motion.div>
							))}
						</div>
						<div style={{ marginTop: 8, padding: '7px 9px', background: colors.dark, color: colors.white, fontSize: 12.5, lineHeight: 1.3, fontWeight: 750 }}>群聊又补了一句：“Gold 现在只剩 2 个。”—— 但没有写回任何文件。</div>
					</div>

					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
						<motion.div initial={{ scale: 0.72, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.42, delay: 0.36 }} style={{ width: 74, height: 74, display: 'grid', placeItems: 'center', border, boxShadow: shadowSm, background: colors.red, color: colors.white, fontFamily: fonts.heading, fontSize: 31, fontWeight: 950 }}>AI</motion.div>
						<div style={{ marginTop: 10, fontFamily: fonts.mono, fontSize: 27, fontWeight: 900 }}>→</div>
						<div style={{ marginTop: 3, fontSize: 13.5, lineHeight: 1.35, fontWeight: 850 }}>它该相信<br />哪一个价格？</div>
					</div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.42 }} style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '17px 19px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.yellow }}>SPONSORSHIP SoT · v1.8</div>
							<div style={{ border: '2px solid #fff', padding: '3px 8px', fontFamily: fonts.mono, fontSize: 11, fontWeight: 900 }}>CURRENT</div>
						</div>
						<div style={{ marginTop: 13, display: 'grid', gap: 8 }}>
							{[
								['Gold 价格', '$7,500（课堂示例）'],
								['包含权益', '展位 · 舞台鸣谢 · 4 张通行证'],
								['剩余名额', '2 个'],
								['负责人', '商务负责人审核后才可对外发送'],
								['素材状态', 'Logo / 场地图 / 联系人均为当前版'],
							].map(([label, value]) => (
								<div key={label} style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 10, paddingBottom: 7, borderBottom: '1px solid rgba(255,255,255,0.25)' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.yellow, fontWeight: 900 }}>{label}</div>
									<div style={{ fontSize: 14.5, lineHeight: 1.3, fontWeight: 750 }}>{value}</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>

				<div style={{ marginTop: 13, border, boxShadow: shadowSm, background: colors.red, color: colors.white, padding: '10px 16px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 22, alignItems: 'center' }}>
					<div style={{ fontSize: 18, lineHeight: 1.35, fontWeight: 900 }}>正确做法：价格和权益只改 SoT；Word、PPT、邮件和 AI 文案都从当前 SoT 重新生成。</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 850 }}>课堂合成案例<br />金额仅用于演示版本冲突</div>
				</div>
			</Body>
		</Slide>
	);
}
