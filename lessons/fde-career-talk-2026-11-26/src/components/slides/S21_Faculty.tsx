import { DeckFrame, Panel, AnimatedGroup, colors } from '../kit';
import { assetPath } from '../ui';

// 头像按各人照片里脸的位置裁切：w/h 是原图尺寸，cx/cy 是脸中心，crop 是要放进圆里的正方形边长。
const PHOTO = 176;
const photos: Record<string, { src: string; w: number; h: number; cx: number; cy: number; crop: number }> = {
	Lightman: { src: 'mentors/lightman.png', w: 460, h: 690, cx: 232, cy: 238, crop: 430 },
	Joe: { src: 'mentors/joe.jpg', w: 436, h: 436, cx: 218, cy: 218, crop: 436 },
	Jason: { src: 'mentors/jason.png', w: 1000, h: 1228, cx: 532, cy: 305, crop: 580 },
	Roy: { src: 'mentors/roy.jpg', w: 400, h: 400, cx: 181, cy: 150, crop: 290 },
};

function Avatar({ name }: { name: string }) {
	const p = photos[name];
	const k = PHOTO / p.crop;
	return <div style={{ width: PHOTO, height: PHOTO, flex: 'none', alignSelf: 'center', borderRadius: '50%', overflow: 'hidden', position: 'relative', background: '#fff', boxShadow: '0 6px 18px rgba(23,20,42,.16)' }}>
		<img src={assetPath(p.src)} alt={name} style={{ position: 'absolute', width: p.w * k, height: p.h * k, maxWidth: 'none', left: PHOTO / 2 - p.cx * k, top: PHOTO / 2 - p.cy * k }} />
	</div>;
}

const people = [
	['Lightman', '匠人学院创始人', '有创业实践经验，关注全栈开发与产品设计'],
	['Joe', '前 Google SDE · Block SDE', '参与软件工程与职业辅导'],
	['Jason', 'V2 · FDE 经历', 'AI Engineer VIP 导师，参与 AI 工程项目与技术辅导'],
	['Roy', 'V2 · FDE 经历', '关注应用 AI 与 AI Engineering，具备软件工程背景'],
];

export default function S21_Faculty() {
	return <DeckFrame tag="07 · 谁来带" title="FDE 课程的导师" accent={colors.red}>
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginTop: 10 }}>
			{people.map(([n, f, b], i) => <AnimatedGroup key={n} delay={.15 + i * .1} style={{ display: 'flex' }}>
				<Panel bg={i >= 2 ? colors.yellow : colors.white} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 300, textAlign: 'center' }}>
					<Avatar name={n} />
					<div style={{ fontSize: 44, fontWeight: 900 }}>{n}</div>
					<div style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.35 }}>{f}</div>
					<div style={{ fontSize: 20, lineHeight: 1.55, color: '#514c48' }}>{b}</div>
				</Panel>
			</AnimatedGroup>)}
		</div>
	</DeckFrame>;
}
