import { Children, cloneElement, isValidElement, type ReactNode, type CSSProperties } from 'react';
import { teachingTermEn, teachingTitleEn } from '../data/teaching-terms-en';
import { DeckFrame, Panel, Label, colors } from './deck';

export function Teaching({ tag, title, subtitle, children, dark = false }: { tag: string; title: string; subtitle?: string; children: ReactNode; dark?: boolean }) {
  return <DeckFrame tag={tag} title={title} subtitle={bilingualSubtitle(title,subtitle)} bg={dark ? colors.dark : colors.warmBg}><div style={{ height: 474, color: dark ? colors.white : colors.dark }}>{bilingualChildren(children)}</div></DeckFrame>;
}
export function Three({ items }: { items: { title: string; text: string; detail?: string }[] }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, height: '100%' }}>{items.map((item, i) => <Panel key={item.title} style={{ height: '100%', padding: 28 }}><Label bg={colors.yellow} color={colors.dark}>{`0${i + 1}`}</Label><h2 style={{ fontSize: 34, margin: '28px 0 18px', lineHeight: 1.2 }}>{item.title}</h2><p style={{ fontSize: 27, lineHeight: 1.5, margin: 0 }}>{item.text}</p>{item.detail && <p style={{ fontSize: 22, lineHeight: 1.5, marginTop: 24 }}>{item.detail}</p>}</Panel>)}</div>;
}

/** Deliberately exact; source quotations and long explanatory prose are untouched. */
export function bilingualSubtitle(title: string, subtitle?: string): ReactNode {
  const english = teachingTitleEn(title);
  if (!english) return subtitle;
  return <><span data-teaching-title-en style={{display:'block',fontSize:20,fontWeight:750,lineHeight:1.25,letterSpacing:.15,color:'inherit'}}>{english}</span>{subtitle && <span style={{display:'block',fontSize:20,lineHeight:1.35,marginTop:4}}>{subtitle}</span>}</>;
}
export function bilingualChildren(children: ReactNode): ReactNode {
  return Children.map(children, child => {
    if(!isValidElement(child)) return child;
    const props=child.props as { children?: ReactNode; x?: number|string; fontSize?: number; style?: CSSProperties; height?:number|string };
    if (typeof props.children==='function') return child;
    const english=typeof props.children==='string' ? teachingTermEn(props.children) : undefined;
    if(child.type==='text' && english) return cloneElement(child as React.ReactElement, {}, props.children, <tspan data-teaching-term-en x={props.x} dy={19} fontSize={17} fontWeight={550}>{english}</tspan>);
    if(typeof child.type==='string' && ['div','span','button','strong','b'].includes(child.type) && english) return cloneElement(child as React.ReactElement, {}, props.children, <span data-teaching-term-en style={{display:'block',fontSize:17,fontWeight:550,lineHeight:1.12,marginTop:3,letterSpacing:0}}>{english}</span>);
    if(child.type==='svg' && typeof (props.height ?? props.style?.height)==='number' && Number(props.height ?? props.style?.height)>510) return cloneElement(child as React.ReactElement<{style?:CSSProperties;height?:number|string}>, {height:505,style:{...props.style,height:505}}, bilingualChildren(props.children));
    return props.children ? cloneElement(child as React.ReactElement,{},bilingualChildren(props.children)) : child;
  });
}
