import { Page, Card, Pill, asset, c, f } from '../kit';

export default function ClosingQR() {
	return (
		<Page dots>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: 72, alignItems: 'center', height: '100%', padding: '0 96px' }}>
				<div>
					<img src={asset('brand/tagline-xueai-laijiangren.png')} alt="学 AI 来匠人" style={{ height: 88, display: 'block', marginLeft: -6 }} />
					<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 56, lineHeight: 1.25, marginTop: 22 }}>先免费学起来，<br />需要时再找老师带</h1>
					<Card style={{ marginTop: 32, background: c('wash-sunshine') }}>
						<div style={{ display: 'flex', gap: 14, alignItems: 'center' }}><span style={{ fontFamily: f.h, fontWeight: 700, fontSize: 28 }}>匠人会员</span><Pill style={{ background: c('canvas-pure') }}>A$19.90 / 月起</Pill></div>
						<p style={{ fontSize: 19, lineHeight: 1.75, marginTop: 10 }}>课程最高 8 折 · 付费活动免费参加 · 1v1 导师最低 85 折<br />会员不含训练营课程本身；具体权益与价格见 jracademy.ai/membership</p>
					</Card>
					<div style={{ fontSize: 23, lineHeight: 2, marginTop: 28 }}><div><b>官网</b>　jracademy.ai</div><div><b>邮箱</b>　hello@jiangren.com.au</div><div><b>电话</b>　0421-672-555</div></div>
				</div>
				<Card style={{ textAlign: 'center', padding: 36, borderRadius: c('r-program') }}>
					<img src={asset('site/wechat-qr.jpg')} alt="课程顾问小花 Amelia 的微信二维码" style={{ width: '100%', display: 'block' }} />
					<div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 28, marginTop: 14 }}>微信扫码，找小花 Amelia</div>
					<p style={{ fontSize: 18, lineHeight: 1.65, color: c('slate'), marginTop: 8 }}>聊聊哪门课合适、什么时候开班、<br />每周大概要花多少时间</p>
				</Card>
			</div>
		</Page>
	);
}
