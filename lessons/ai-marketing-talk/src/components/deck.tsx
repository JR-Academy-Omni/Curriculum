import type { ReactNode } from 'react';
import { Slide, colors, fonts } from './ui';

// Content-layer design combinations, adapted from the talk-deck golden reference.
// Runtime theme/ui/SlideEngine stay untouched.
export const border = `2px solid ${colors.dark}`;
export const shadow = `6px 6px 0 ${colors.yellow}`;
export const radii = { panel: 24, card: 18, label: 8, pill: 999 } as const;
export const paper = {
  backgroundImage: 'linear-gradient(rgba(16,22,47,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.045) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
};

export function DeckFrame({ stage, title, takeaway, children }: { stage: string; title: string; takeaway: string; children: ReactNode }) {
  return <Slide style={{ position: 'relative', ...paper }}>
    <div aria-hidden style={{position:'absolute',left:-88,top:160,width:170,height:170,borderRadius:'50%',border:`20px solid ${colors.yellow}`,opacity:.42}}/>
    <div aria-hidden style={{position:'absolute',right:-85,bottom:-80,width:240,height:240,borderRadius:'50%',background:colors.rose,opacity:.12}}/>
    <div data-talk-page style={{ width: 1380, height: 768, display: 'flex', flexDirection: 'column', color: colors.dark, fontFamily: fonts.body, lineHeight: 1.25, position:'relative' }}>
      <header style={{ height: 124, flexShrink: 0 }}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:17}}>
          <span aria-hidden style={{width:38,height:7,borderRadius:4,background:colors.rose}}/>
          <p style={{ fontSize: 18, fontWeight: 800, color: colors.rose }}>{stage}</p>
          <span style={{color:'#666',fontSize:18,marginLeft:12}}>课堂示意 · 非真实操作</span>
        </div>
        <h1 style={{fontFamily:fonts.heading,fontSize:54,lineHeight:1.2,fontWeight:900,letterSpacing:-1}}>
          <span style={{backgroundImage:`linear-gradient(transparent 72%, ${colors.yellow} 72%, ${colors.yellow} 95%, transparent 95%)`,boxDecorationBreak:'clone',WebkitBoxDecorationBreak:'clone'}}>{title}</span>
        </h1>
      </header>
      <div data-system-diagram style={{ position: 'relative', height: 554, flexShrink: 0 }}>{children}</div>
      <footer style={{ marginTop: 22, height:66, flexShrink:0, display: 'flex', alignItems: 'center', gap: 20, background:colors.white, border:'1px solid #ccc', borderRadius:18, padding:'12px 20px' }}>
        <span style={{ background: colors.yellow, color: colors.dark, borderRadius:8, padding: '7px 12px', fontSize: 18, fontWeight: 800, whiteSpace: 'nowrap' }}>这一层解决</span>
        <p style={{ fontSize: 27, lineHeight: 1.3, fontWeight: 800 }}>{takeaway}</p>
      </footer>
    </div>
  </Slide>;
}
export { colors, fonts };
