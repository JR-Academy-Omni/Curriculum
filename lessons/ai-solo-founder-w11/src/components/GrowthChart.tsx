import type { ReactNode } from 'react';
import { DeckFrame, colors, fonts } from './deck';
import { bilingualChildren, bilingualSubtitle } from './Teaching';
import { MotionArrow } from './MotionArrow';
import { teachingTermEn } from '../data/teaching-terms-en';
export function ChartFrame({ tag, title, subtitle, children, footnote }: { tag: string; title: string; subtitle?: string; children: ReactNode; footnote: ReactNode }) {
  return <DeckFrame tag={tag} title={title} subtitle={bilingualSubtitle(title,subtitle)}><div style={{height:520,position:'relative',fontFamily:fonts.body,color:colors.dark}}>{bilingualChildren(children)}</div><p style={{fontSize:18,lineHeight:1.45,margin:'14px 0 0',maxWidth:1300,color:colors.dark}}>{footnote}</p></DeckFrame>;
}
export function ChartDefs({ id }: { id: string }) { return <defs><marker id={id} markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto" markerUnits="strokeWidth"><path d="M 0 0 L 10 5 L 0 10 z" fill={colors.dark}/></marker></defs>; }
export function ChartNode({ x,y,w=260,h=112,fill=colors.white,title,detail }: { x:number;y:number;w?:number;h?:number;fill?:string;title:string;detail?:string }) {
  const english=teachingTermEn(title);
  const titleY=english ? (detail?35:Math.min(h-42,45)) : (detail?49:Math.min(h-18,66));
  const englishSize=w<260?16:18;
  return <g><rect x={x} y={y} width={w} height={h} rx="22" fill={fill} stroke={colors.dark} strokeWidth="2"/><text x={x+w/2} y={y+titleY} textAnchor="middle" fontSize="29" fontWeight="800" fill={colors.dark}>{title}</text>{english&&<text data-teaching-term-en x={x+w/2} y={y+titleY+25} textAnchor="middle" fontSize={englishSize} fontWeight="550" fill={colors.dark}>{english}</text>}{detail&&<text x={x+w/2} y={y+87} textAnchor="middle" fontSize="20" fill={colors.dark}>{detail}</text>}</g>;
}
export function ChartArrow({ d,id,dash=false }: { d:string;id:string;dash?:boolean }) { return <MotionArrow d={d} dashed={dash} markerEnd={`url(#${id})`}/>; }
export const chartSources=<><a href="https://www.reforge.com/blog/growth-loops" target="_blank" rel="noreferrer">Reforge · Growth Loops</a>；图形与数字为课堂教学设计。</>;
