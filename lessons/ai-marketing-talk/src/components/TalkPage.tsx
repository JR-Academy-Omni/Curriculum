import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from './ui';

interface Panel {
  title: string;
  lines: string[];
}

export interface TalkPageProps {
  stage: string;
  title: string;
  intro: string;
  panels: Panel[];
  flow?: string[];
  question: string;
  conclusion: string;
  dark?: boolean;
}

/** Content-only layout; the established SlideEngine and its URL contract stay in place. */
export default function TalkPage({ stage, title, intro, panels, flow, question, conclusion, dark = false }: TalkPageProps) {
  const ink = dark ? colors.white : colors.dark;
  return (
    <Slide bg={dark ? colors.dark : colors.warmBg} style={{ position: 'relative' }}>
      {dark && <div aria-hidden="true" style={{ position: 'absolute', top: 12, right: 12, width: 190, height: 44, background: colors.white }} />}
      <div data-talk-page style={{ width: 1380, height: 754, display: 'flex', flexDirection: 'column', gap: 22, color: ink }}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div style={{ display: 'inline-block', background: colors.rose, color: colors.white, padding: '7px 16px', fontFamily: fonts.body, fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
            {stage}
          </div>
          <h1 style={{ fontFamily: fonts.heading, fontSize: 'clamp(48px, 3.6vw, 60px)', lineHeight: 1.22, fontWeight: 900, letterSpacing: -1 }}>
            {title}
          </h1>
          <p style={{ fontFamily: fonts.body, fontSize: 25, lineHeight: 1.5, opacity: 0.85, marginTop: 12 }}>{intro}</p>
        </motion.div>

        {flow && (
          <div aria-label="工作流程" style={{ display: 'flex', gap: 8, alignItems: 'stretch', flexShrink: 0 }}>
            {flow.map((step, index) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
                <div style={{ flex: 1, minWidth: 0, minHeight: 80, background: index === 0 ? colors.yellow : colors.white, color: colors.dark, border: `2px solid ${colors.black}`, padding: '12px 10px', fontFamily: fonts.body, fontSize: 20, fontWeight: 700, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1.4 }}>
                  {step}
                </div>
                {index < flow.length - 1 && <span aria-hidden="true" style={{ paddingLeft: 8, fontSize: 24, color: dark ? colors.yellow : colors.rose }}>→</span>}
              </div>
            ))}
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.3 }} style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
          {panels.map((panel, index) => (
            <section key={panel.title} style={{ flex: 1, minWidth: 0, background: colors.white, color: colors.dark, border, boxShadow: shadow, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h2 style={{ fontFamily: fonts.heading, fontSize: 29, lineHeight: 1.3, fontWeight: 900, color: index === 0 ? colors.rose : colors.dark }}>{panel.title}</h2>
              {panel.lines.map(line => <p key={line} style={{ fontFamily: fonts.body, fontSize: 24, lineHeight: 1.55 }}>{line}</p>)}
            </section>
          ))}
        </motion.div>

        <div style={{ flexShrink: 0, fontFamily: fonts.body }}>
          <p style={{ fontSize: 25, lineHeight: 1.4, fontWeight: 700, marginBottom: 14 }}>{question}</p>
          <div style={{ background: dark ? colors.rose : colors.dark, color: colors.white, padding: '17px 24px', border, boxShadow: `6px 6px 0 ${colors.rose}`, fontSize: 26, fontWeight: 800, lineHeight: 1.4 }}>{conclusion}</div>
        </div>
      </div>
    </Slide>
  );
}
