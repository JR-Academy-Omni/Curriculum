import { AnimatedGroup, Label, Panel, colors, fonts } from '../deck';
import { Slide } from '../ui';
import { CoHosts, Marker, SpeakerPortrait } from '../event';
import { speakers } from '../../data/speakers';

export default function Slide01() {
  return <Slide style={{ position: 'relative', color: colors.dark,
    backgroundImage: 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
    <div aria-hidden style={{ position: 'absolute', width: 290, height: 290, borderRadius: '50%', border: `36px solid ${colors.yellow}`, right: -105, bottom: -145 }} />
    <div style={{ position: 'absolute', left: 100, right: 100, top: 76, bottom: 80, display: 'flex', flexDirection: 'column' }}>
      <AnimatedGroup style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Label bg={colors.yellow}>MELBOURNE · 2026.10.01</Label>
        <span style={{ fontFamily: fonts.mono, fontSize: 17, letterSpacing: 2, fontWeight: 700 }}>AI & BUSINESS</span>
      </AnimatedGroup>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '760px 560px', gap: 80, alignItems: 'center' }}>
        <AnimatedGroup delay={.1}>
          <p style={{ marginBottom: 16, fontSize: 28, fontWeight: 700 }}>老板 / 高管专场</p>
          <h1 style={{ fontFamily: fonts.heading, fontSize: 88, fontWeight: 900, letterSpacing: -3, lineHeight: 1.2 }}>企业 AI<br /><Marker>实战分享。</Marker></h1>
          <p style={{ fontSize: 28, fontWeight: 600, marginTop: 26, color: '#514c48', lineHeight: 1.6 }}>AI 自动化 × AI Marketing<br />财税新变革 × AI 房产金融</p>
          <p style={{ marginTop: 28, fontSize: 23, fontWeight: 800 }}>10 月 1 日 · 星期四 <span style={{ margin: '0 14px' }}>|</span> 17:00–20:30</p>
          <p style={{ marginTop: 12, fontSize: 23, lineHeight: 1.5 }}>Bupa · Ground Floor<br /><span style={{ fontSize: 21, color: '#625b55' }}>33 Exhibition Street, Melbourne</span></p>
        </AnimatedGroup>
        <AnimatedGroup delay={.22} style={{ position: 'relative', paddingTop: 20 }}>
          <Panel bg={colors.dark} style={{ color: colors.white, padding: '28px 30px', boxShadow: `12px 12px 0 ${colors.red}` }}>
            <Label bg={colors.green}>THEME SHARING · 四位嘉宾</Label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 26px', marginTop: 24 }}>
              {speakers.map(speaker => <div key={speaker.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <SpeakerPortrait speaker={speaker} width={170} height={170} />
                <p style={{ fontSize: 21, fontWeight: 800 }}>{speaker.name}</p>
              </div>)}
            </div>
          </Panel>
          <div aria-hidden style={{ position: 'absolute', right: -18, top: -6, width: 65, height: 65, borderRadius: '50%', background: colors.blue, border: `2px solid ${colors.dark}`, display: 'grid', placeItems: 'center', fontSize: 37, fontWeight: 800 }}>↗</div>
        </AnimatedGroup>
      </div>
      <AnimatedGroup delay={.32} style={{ borderTop: '2px solid rgba(16,22,47,.2)', paddingTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}><span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>CO-HOSTED BY</span><div style={{ width: 630 }}><CoHosts compact /></div></div>
        <p style={{ fontFamily: fonts.mono, fontSize: 13, maxWidth: 240, lineHeight: 1.5, fontWeight: 700, color: '#61524b' }}>A BRIGHTER BUSINESS<br />TOMORROW TOGETHER</p>
      </AnimatedGroup>
    </div>
  </Slide>;
}
