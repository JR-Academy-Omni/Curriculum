import { MotionArrow, DirectionalArrow } from './MotionArrow';
import { Fragment } from 'react';
import { DeckFrame, Panel, Label, AnimatedGroup, colors, fonts } from './deck';
import type { GrowthMethod } from '../data/methods';
import { methodFlowById } from '../data/method-flows';
import type { FlowNode } from '../data/method-flows';
import { methodLabelsEnById, stageLabelsEn, stateLabelsEn } from '../data/method-labels-en';

const stageColor = (node: FlowNode) => node.stage === '网站' ? colors.blue : node.stage === 'App' ? colors.green : node.stage === '行为' ? colors.yellow : node.stage === '结果' ? colors.red : colors.warmBg;

/** 内容层流程教具；所有事件/自动化为课堂方案，不发送消息、不接入平台。 */
export default function MethodSlide({ method: m }: { method: GrowthMethod }) {
  const f = methodFlowById[m.id];
  const en = methodLabelsEnById[m.id];
  const sources = m.sources.filter(s => m.id !== 7 || !s.url.includes('zapier.com'));
  return <DeckFrame tag={`${m.group} · METHOD ${String(m.id).padStart(2, '0')} · ${en.name}`} title={`方法 ${String(m.id).padStart(2, '0')} · ${m.name}`} subtitle={f.principle} titleSize={52}>
    <div data-method-id={m.id} style={{ display: 'flex', flexDirection: 'column', gap: 12, height: 490 }}>
      <AnimatedGroup delay={.12}>
        <Panel style={{ height: 284, padding: '16px 22px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Label bg={f.loop ? colors.green : colors.yellow} color={colors.dark}>{f.loop?.kind || '获客 / 价值路径'} <span style={{fontFamily:fonts.body,marginLeft:8,fontSize:15}}>{f.loop?.kind === '获客回流' ? 'Acquisition loop' : f.loop ? 'Retention loop' : 'Growth path'}</span></Label>
            <span style={{ fontSize: 18, color: colors.dark }}>场景 Scene：{f.scene}</span>
          </div>
          <div role="img" aria-label={f.nodes.map(n => `${n.stage}：${n.label}，${n.state}`).join(' → ') + (f.loop ? `。${f.loop.kind}：${f.loop.label}` : '。开放路径，未证明回流。')} style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
            {f.nodes.map((node, i) => <Fragment key={node.label}>
              {i > 0 && <DirectionalArrow delay={i * .12} />}
              <div data-method-node={i + 1} style={{ minWidth: 0, flex: 1, height: 154, border: `1px solid ${colors.dark}`, borderRadius: 18, background: stageColor(node), padding: '10px 9px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: 17, fontWeight: 800, opacity: .8 }}>{i + 1} · {node.stage}{node.stage !== 'App' && ` ${stageLabelsEn[node.stage]}`} </div>
                <div style={{ fontSize: 27, fontFamily: fonts.heading, fontWeight: 850, marginTop: 7, lineHeight: 1.15, whiteSpace: 'nowrap' }}>{node.label}</div>
                <div style={{fontFamily:fonts.body,fontSize:17,lineHeight:1.1,marginTop:3,whiteSpace:'nowrap'}}>{en.nodes[i]}</div>
                <div style={{ marginTop: 'auto', fontSize: 17, lineHeight:1.1, fontWeight: 700, background: 'rgba(255,255,255,.72)', borderRadius: 999, padding: '3px 14px', whiteSpace: 'nowrap' }}>此时：{node.state}</div>
                <div style={{fontSize:15,lineHeight:1.1,marginTop:3,whiteSpace:'nowrap'}}>{stateLabelsEn[node.state]}</div>
              </div>
            </Fragment>)}
          </div>
          {f.loop ? <div style={{ position: 'relative', height: 42, marginTop: 5 }}>
            <svg aria-hidden="true" width="100%" height="42" viewBox="0 0 1200 42" preserveAspectRatio="none"><MotionArrow d="M1100 1V25H95V4" strokeWidth={2.5} delay={.65} /><path d="M87 13L95 4L103 13" fill="none" stroke={colors.dark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span style={{ position: 'absolute', left: '50%', top: 12, transform: 'translateX(-50%)', fontSize: 18, padding: '0 12px', background: colors.white, whiteSpace: 'nowrap', fontWeight: 750 }}>{f.loop.label}</span>
          </div> : <div style={{ marginTop: 16, fontSize: 19, fontWeight: 750, display: 'flex', gap: 9, alignItems: 'center' }}><span style={{ width: 9, height: 9, borderRadius: '50%', background: colors.red }} />先验证路径，再验证回流。<span style={{fontFamily:fonts.body,fontSize:17,fontWeight:600}}>Validate the path, then the loop.</span></div>}
        </Panel>
      </AnimatedGroup>
      <AnimatedGroup delay={.2}>
        <Panel bg={colors.dark} style={{ height: 104, padding: '12px 20px', boxShadow: 'none', color: colors.white, display: 'flex', alignItems: 'center', gap: 18 }}>
          <Label bg={colors.yellow} color={colors.dark}>自动化<span style={{fontFamily:fonts.body,marginLeft:7,fontSize:15}}>Automation</span></Label>
          <div style={{ flex: 1 }}><div style={{ color: colors.yellow, fontSize: 16 }}>何时触发 Trigger</div><div style={{ fontSize: 22, fontWeight: 750, marginTop: 3 }}>{f.trigger}</div><div style={{fontSize:16,lineHeight:1.15,marginTop:4,color:colors.white}}>{en.trigger}</div></div>
          <DirectionalArrow color={colors.white} delay={.2} />
          <div style={{ flex: 1 }}><div style={{ color: colors.yellow, fontSize: 16 }}>执行动作 Action</div><div style={{ fontSize: 22, fontWeight: 750, marginTop: 3 }}>{f.action}</div><div style={{fontSize:16,lineHeight:1.15,marginTop:4,color:colors.white}}>{en.action}</div></div>
          <DirectionalArrow color={colors.white} delay={.2} />
          <div style={{ flex: 1 }}><div style={{ color: colors.green, fontSize: 16 }}>停止 / 边界 Stop</div><div style={{ fontSize: 22, fontWeight: 750, marginTop: 3 }}>{f.exit}</div><div style={{fontSize:16,lineHeight:1.15,marginTop:4,color:colors.white}}>{en.stop}</div></div>
        </Panel>
      </AnimatedGroup>
      <Panel style={{ height: 78, padding: '9px 20px', boxShadow: 'none', borderWidth: 1 }}>
        <div style={{ display: 'flex', gap: 22, alignItems: 'center', fontSize: 18 }}>
          <span><strong>适合 Fit：</strong>{f.fit}</span>
          <span style={{ flex: 1 }}><strong>指标 Metric：</strong>{f.metric}</span>
          <span><strong>成本 Cost：</strong>{f.cost}</span>
        </div>
        <div style={{ display: 'flex', gap: 15, alignItems: 'baseline', marginTop: 8, fontSize: 16, lineHeight: 1.3 }}>
          <span title={m.id === 7 ? f.evidence : m.evidence} style={{ flex: 1 }}>{f.evidence}</span>
          {sources.map((s, i) => <a key={s.url} href={s.url} title={s.title} aria-label={s.title} target="_blank" rel="noreferrer" style={{ color: colors.dark, textDecoration: 'underline', whiteSpace: 'nowrap' }}>{sources.length > 1 ? `来源 Source ${i + 1}` : '来源 Source'}</a>)}
          <span style={{ whiteSpace: 'nowrap', color: colors.dark }}>课堂设计 · Teaching design</span>
        </div>
      </Panel>
    </div>
  </DeckFrame>;
}
