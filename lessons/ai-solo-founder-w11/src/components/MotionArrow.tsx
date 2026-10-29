import { useId, type CSSProperties } from 'react';
import { useReducedMotion } from 'framer-motion';
import { colors } from './deck';
import '../styles/arrow-motion.css';

/** Static directional geometry stays visible. A short highlight runs from start to end
 * three times, then disappears. CSS print rules remove the highlight, never the base. */
export function MotionArrow({ d, markerEnd, color = colors.dark, accent = colors.red, strokeWidth = 3, dashed = false, dashArray, delay = 0 }: {
  d: string; markerEnd?: string; color?: string; accent?: string; strokeWidth?: number;
  dashed?: boolean; dashArray?: string; delay?: number;
}) {
  const reduced = useReducedMotion();
  return <g data-motion-arrow className="growth-motion-arrow">
    <path data-arrow-base d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={dashArray || (dashed ? '9 7' : undefined)} strokeLinecap="round" strokeLinejoin="round" markerEnd={markerEnd} />
    {!reduced && <path data-arrow-overlay aria-hidden="true" className="growth-arrow-overlay" d={d} pathLength={100} fill="none" stroke={accent} strokeWidth={strokeWidth + 1.5} strokeLinecap="round" style={{ '--growth-arrow-delay': `${delay}s` } as CSSProperties} />}
  </g>;
}

/** Action-diagram connector, not a navigation control. */
export function DirectionalArrow({ direction = 'right', color = colors.dark, delay = 0, width = 37, height = 36, style }: {
  direction?: 'right' | 'down' | 'loop'; color?: string; delay?: number;
  width?: number; height?: number; style?: CSSProperties;
}) {
  const id = `directional-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const d = direction === 'down' ? 'M 20 5 L 20 32' : direction === 'loop' ? 'M 31 13 A 13 13 0 1 0 31 27' : 'M 5 20 L 32 20';
  return <span aria-hidden="true" data-directional-arrow style={{ display: 'inline-flex', width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}>
    <svg width="100%" height="100%" viewBox="0 0 40 40" style={{ overflow: 'visible' }}>
      <defs><marker id={id} markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M 0 0 L 8 4 L 0 8" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></marker></defs>
      <MotionArrow d={d} markerEnd={`url(#${id})`} color={color} strokeWidth={2.5} delay={delay} />
    </svg>
  </span>;
}
