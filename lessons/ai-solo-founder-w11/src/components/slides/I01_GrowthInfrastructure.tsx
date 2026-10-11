import { MotionArrow, DirectionalArrow } from '../MotionArrow';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, Inner } from '../ui';
import { colors, fonts } from '../../styles/theme';

/** Proposed infrastructure, demonstrated locally. No network calls or real rewards. */
export default function I01_GrowthInfrastructure() {
  const [attempts, setAttempts] = useState(0);
  const reduced = useReducedMotion();
  const issued = attempts > 0;
  const settings = [['活动', 'Campaign'], ['渠道', 'Channel'], ['资格', 'Eligibility'], ['奖励', 'Reward'], ['预算', 'Budget'], ['停止', 'Stop']];
  const stages = [
    ['网站 / App', 'Web / App', '来源保留 · 登录绑定', colors.blue],
    ['账户与事件', 'Account + Events', '访问 · 注册 · 首次获值', colors.yellow],
    ['后台核验', 'Backend Validation', '新账户 · 关系 · 去重', colors.orange],
    ['奖励账本', 'Reward Ledger', issued ? '同一邀请，只记 +2' : '符合规则，再记奖励', colors.green],
    ['账户回读', 'Account Read-back', issued ? '雷达额度：5 → 7' : '看到账，再触发回访', colors.purple],
  ];
  return <Slide bg={colors.white}><Inner style={{ width: 1400, height: 810, padding: '36px 0', gap: 18, flexDirection: 'column', color: colors.dark, fontFamily: fonts.body }}>
    <header>
      <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 1.6 }}>GROWTH INFRASTRUCTURE · 增长基础设施</div>
      <h1 style={{ margin: '9px 0 0', fontSize: 51, lineHeight: 1.12, fontFamily: fonts.heading, fontWeight: 900 }}>把增长接到网站、App 与后台</h1>
      <div style={{ fontSize: 20, marginTop: 7 }}>追踪 → 核验 → 奖励 → 回读 <span style={{ marginLeft: 14 }}>Track → Validate → Reward → Read back</span></div>
    </header>

    <section aria-label="Super Admin 配置示意" style={{ display: 'flex', gap: 24, alignItems: 'center', background: colors.warmBg, borderRadius: 20, border: `2px solid ${colors.dark}`, padding: '13px 22px' }}>
      <div style={{ width: 177, fontSize: 23, fontWeight: 850 }}>运营后台<div style={{ fontSize: 17, marginTop: 3 }}>Super Admin</div></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 20, flex: 1 }}>{settings.map(([zh, en]) => <div key={en} style={{ fontSize: 24, fontWeight: 800 }}>{zh}<div style={{ fontSize: 17, fontWeight: 550, marginTop: 4 }}>{en}</div></div>)}</div>
      <div style={{ fontSize: 17, width: 155, borderLeft: `2px solid ${colors.dark}`, paddingLeft: 19 }}>配置版本与审计<div style={{ marginTop: 3 }}>Version + Audit</div></div>
    </section>

    <section style={{ display: 'flex', alignItems: 'center', gap: 35, padding: '2px 4px' }}>
      <div style={{ width: 197, fontSize: 25, fontWeight: 850 }}>分享 / 邀请链接<div style={{ fontSize: 17, marginTop: 4 }}>Share / Referral URL</div></div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: fonts.mono, fontSize: 17, padding: '9px 14px', borderRadius: 10, background: colors.warmBg }}>example.invalid/deal/demo?utm_source=wechat&amp;utm_medium=share&amp;utm_campaign=radar&amp;ref=DEMO</div>
        <div style={{ display: 'flex', gap: 43, fontSize: 21, marginTop: 10 }}><span><b>UTM</b> 看渠道 <small style={{ fontSize: 17 }}>Channel attribution</small></span><span><b>ref</b> 找邀请人 <small style={{ fontSize: 17 }}>Inviter identity</small></span><span>活动归属 <small style={{ fontSize: 17 }}>Campaign binding</small></span></div>
      </div>
    </section>

    <section aria-label="教学后台事件与奖励流程" style={{ position: 'relative', paddingTop: 2 }}>
      <div style={{ display: 'flex', gap: 30 }}>{stages.map(([zh, en, detail, bg], i) => <div key={en} style={{ position: 'relative', flex: 1 }}>
        <div data-infrastructure-stage style={{ border: `2px solid ${colors.dark}`, borderRadius: 20, background: bg, padding: '14px 12px', height: 158, textAlign: 'center' }}>
          <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>0{i + 1}</div><div style={{ fontSize: 28, fontWeight: 850 }}>{zh}</div><div style={{ fontSize: 17, fontWeight: 650, marginTop: 4 }}>{en}</div><div style={{ fontSize: 19, marginTop: 10 }}>{detail}</div>
        </div>
        {i < 4 && <DirectionalArrow width={28} height={28} delay={i*.12} style={{position:'absolute',right:-25,top:58}}/>}
      </div>)}</div>
      <svg width="1400" height="43" viewBox="0 0 1400 43" aria-hidden="true" style={{ display: 'block' }}>
        <MotionArrow d="M 1260 3 L 1260 30 L 130 30 L 130 10" strokeWidth={2} delay={.65} />
        <path d="M 123 17 L 130 9 L 137 17" fill="none" stroke={colors.dark} strokeWidth="2" />
        <rect x="445" y="13" width="510" height="28" rx="9" fill={colors.white} />
        <text x="700" y="33" textAnchor="middle" fill={colors.dark} fontFamily={fonts.body} fontSize="19">用户再次获得价值 → 下一圈 / Value → Next loop</text>
      </svg>
    </section>

    <section style={{ display: 'flex', alignItems: 'center', gap: 24, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '12px 20px', background: colors.warmBg }}>
      <div style={{ width: 272, fontSize: 24, fontWeight: 850 }}>同一事件，只奖励一次<div style={{ fontSize: 17, marginTop: 4 }}>Deduplication + Idempotency</div></div>
      <button onClick={() => setAttempts(n => n + 1)} style={{ border: `2px solid ${colors.dark}`, borderRadius: 12, padding: '11px 16px', background: colors.yellow, fontFamily: fonts.body, color: colors.dark, fontSize: 20, fontWeight: 800, cursor: 'pointer' }}>{issued ? '重放同一邀请 · Replay' : '模拟有效邀请 · Simulate'}</button>
      <motion.div data-infrastructure-balance role="status" aria-live="polite" initial={false} animate={{ backgroundColor: issued ? colors.green : colors.white }} transition={{ duration: reduced ? 0 : .25 }} style={{ borderRadius: 12, padding: '10px 20px', fontSize: 27, fontWeight: 900 }}>{issued ? 7 : 5} 个雷达 <span style={{ fontSize: 17, fontWeight: 600 }}>Radars</span></motion.div>
      <div data-infrastructure-result style={{ flex: 1, fontSize: 20 }}>{attempts > 1 ? '重复事件 → 额度仍为 7 / Duplicate → Still 7' : issued ? '核验入账 → 5 + 2 / Verified → Issued' : '示意基线 5；其他任务奖励不计入'}</div>
      <button aria-label="重置基础设施演示 Reset demo" onClick={() => setAttempts(0)} style={{ border: `2px solid ${colors.dark}`, borderRadius: 12, padding: '10px 12px', background: colors.white, color: colors.dark, fontFamily: fonts.body, fontSize: 18, cursor: 'pointer' }}>重置 Reset</button>
    </section>

    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ borderLeft: `6px solid ${colors.blue}`, paddingLeft: 18 }}><div style={{ fontSize: 25, fontWeight: 850 }}>邀请奖励 <span style={{ fontSize: 20 }}>Referral</span></div><div style={{ fontSize: 20, marginTop: 6 }}>薅羊毛：新 JR 账户注册成功 → 邀请人 +2 雷达</div></div>
      <div style={{ borderLeft: `6px solid ${colors.orange}`, paddingLeft: 18 }}><div style={{ fontSize: 25, fontWeight: 850 }}>成交分佣 <span style={{ fontSize: 20 }}>Affiliate</span></div><div style={{ fontSize: 20, marginTop: 6 }}>订单支付核验 → 按规则结算；退款 → 调整佣金</div></div>
    </section>
    <footer style={{ fontSize: 17, lineHeight: 1.35 }}>后台链路、URL 与配置栏为教学设计 / Teaching design。UTM 不作邀请身份证明；分享、注册、发奖励分别统计，另追踪首次获值。</footer>
  </Inner></Slide>;
}
