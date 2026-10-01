import { motion } from 'framer-motion';
import { Slide, Tag, Card, Title, colors, fonts } from '../courseUi';

export default function S02_Hook() {
  return <Slide>
    <div style={{ width: 1360, display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center' }}>
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .4 }}>
        <Tag bg={colors.red}>第 0 章 · 开场</Tag>
        <Title size="68px" style={{ marginTop: 24, lineHeight: 1.2 }}>为什么你的 AI<br />用起来像金鱼？</Title>
        <p style={{ fontSize: 24, marginTop: 30, lineHeight: 1.75 }}>每开一个新对话，它都<b>从零开始</b>：不记得你的项目规范、不记得昨天的决定、不记得上次踩过的坑 —— 你只能<b>反复地教它同一件事</b>。</p>
        <div style={{ marginTop: 34, borderLeft: `5px solid ${colors.red}`, paddingLeft: 20, fontSize: 23, fontWeight: 800, lineHeight: 1.6 }}>问题不在模型聪不聪明，在于它<br /><span style={{ color: colors.red }}>没有记忆，也没有唯一真相。</span></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: .15 }} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div aria-label="重复教学循环" style={{ display: 'flex', gap: 12, alignItems: 'center', fontFamily: fonts.body, fontSize: 19, fontWeight: 800 }}>
          {['新对话', '从零开始', '重新教一遍'].map((label, i) => <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ background: i === 1 ? colors.yellow : colors.white, padding: '12px 16px', borderRadius: 10 }}>{label}</span>{i < 2 && <span aria-hidden>→</span>}</div>)}
        </div>
        <Card style={{ padding: 28 }}>
          <Tag bg={colors.yellow} color={colors.dark}>01 · 没有记忆系统</Tag>
          <div style={{ fontSize: 27, fontWeight: 800, marginTop: 20 }}>「我们用 ObjectId 不用 slug」</div>
          <div style={{ fontSize: 20, marginTop: 10, opacity: .72 }}>→ 教一次 · 下次又写错 · 再教一次 …</div>
        </Card>
        <Card style={{ padding: 28 }}>
          <Tag bg={colors.blue} color={colors.dark}>02 · 没有唯一真相</Tag>
          <div style={{ fontSize: 27, fontWeight: 800, marginTop: 20 }}>「这个数到底以哪份为准？」</div>
          <div style={{ fontSize: 20, marginTop: 10, opacity: .72 }}>→ 三份文档三个答案 · AI 猜一个给你</div>
        </Card>
        <Card bg={colors.dark} style={{ padding: 26, color: colors.white, fontSize: 23, fontWeight: 800, lineHeight: 1.6 }}>大师和新手的差距：<br />不是 prompt 技巧，是有没有给 AI 建好<span style={{ color: colors.yellow }}>「记忆 + 真相」</span>。</Card>
      </motion.div>
    </div>
  </Slide>;
}
