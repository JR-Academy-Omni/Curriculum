/** Course content compositions using the current Talk Deck template tokens. */
import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, radii } from './ui';
export * from './ui';
export const border = `1.5px solid ${colors.dark}`;
export const shadow = `6px 6px 0 ${colors.yellow}`;
export const shadowSm = `4px 4px 0 ${colors.yellow}`;

export function Slide({ bg = colors.warmBg, children, style }: { bg?: string; children: ReactNode; style?: CSSProperties }) {
  const dark = bg === colors.dark || bg === colors.darkBg || bg === colors.black;
  return <div data-course-canvas style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', background: bg,
    color: dark ? colors.white : colors.dark,
    backgroundImage: dark ? undefined : `linear-gradient(${colors.dark}0d 1px, transparent 1px), linear-gradient(90deg, ${colors.dark}0d 1px, transparent 1px)`,
    backgroundSize: '48px 48px', ...style }}>
    {dark && <div aria-hidden style={{ position: 'absolute', top: 12, right: 14, width: 122, height: 46, borderRadius: 10, background: colors.white, zIndex: 2 }} />}
    <div aria-hidden style={{ position: 'absolute', left: -60, top: 145, width: 100, height: 100, borderRadius: '50%', border: `18px solid ${dark ? colors.red : colors.yellow}`, opacity: .45, pointerEvents: 'none' }} />
    <div aria-hidden style={{ position: 'absolute', right: -42, bottom: -55, width: 180, height: 180, borderRadius: '50%', background: dark ? colors.purple : colors.yellow, opacity: .4, pointerEvents: 'none' }} />
    <div data-course-content style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>{children}</div>
  </div>;
}

export function Title({ children, white, size = '58px', style }: { children: ReactNode; white?: boolean; size?: string; style?: CSSProperties }) {
  return <h2 style={{ fontFamily: fonts.heading, fontSize: size, fontWeight: 900, lineHeight: 1.15, color: white ? colors.white : colors.dark, letterSpacing: -1, ...style }}>
    <span style={white ? undefined : { backgroundImage: `linear-gradient(transparent 76%, ${colors.yellow} 76%, ${colors.yellow} 95%, transparent 95%)`, boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>{children}</span>
  </h2>;
}

export function Highlight({ children, color = colors.yellow }: { children: ReactNode; color?: string }) {
  return <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: radii.label, background: color, color: color === colors.yellow || color === colors.green ? colors.dark : colors.white }}>{children}</span>;
}

export function Tag({ children, bg = colors.dark, color = colors.white }: { children: ReactNode; bg?: string; color?: string }) {
  return <span style={{ display: 'inline-flex', alignItems: 'center', padding: '7px 14px', borderRadius: radii.label, fontSize: 15, fontWeight: 700, fontFamily: fonts.body, border: `1.5px solid ${bg}`, background: bg, color }}>{children}</span>;
}

export function Card({ children, bg = colors.white, style }: { children: ReactNode; bg?: string; style?: CSSProperties }) {
  return <motion.div style={{ border, borderRadius: radii.card, background: bg, padding: '24px 20px', boxShadow: bg === colors.dark ? `6px 6px 0 ${colors.red}` : shadow, ...style }}>{children}</motion.div>;
}
export function CardSm({ children, bg = colors.white, style }: { children: ReactNode; bg?: string; style?: CSSProperties }) {
  return <Card bg={bg} style={{ padding: '16px 14px', boxShadow: shadowSm, ...style }}>{children}</Card>;
}
