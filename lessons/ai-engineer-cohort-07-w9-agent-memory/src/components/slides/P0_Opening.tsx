import { motion } from 'framer-motion';
import { Slide, colors, fonts, radii } from '../ui';
import { Box, Cols, Page, Say, Tbl, line, softShadow } from './_parts';

// 开场：封面、路线、这一课在阶梯上的位置。

export function S01_Cover() {
	return (
		<Slide bg={colors.warmBg} style={{
			position: 'relative',
			backgroundImage: 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)',
			backgroundSize: '48px 48px',
		}}>
			<div aria-hidden style={{ position: 'absolute', left: -84, top: 145, width: 164, height: 164, borderRadius: '50%', border: `22px solid ${colors.yellow}`, opacity: .52 }} />
			<div aria-hidden style={{ position: 'absolute', right: -62, bottom: -38, width: 220, height: 138, borderRadius: '110px 0 0 0', background: colors.yellow, opacity: .58 }} />
			<div style={{ position: 'relative', textAlign: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
					style={{ display: 'inline-block', padding: '8px 20px', borderRadius: radii.label, background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 3, marginBottom: 32 }}>
					AI ENGINEER 第七期 · W9 理论课 · L133
				</motion.div>
				<motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.08 }}
					style={{ fontFamily: fonts.heading, fontSize: 88, lineHeight: 1.1, letterSpacing: -2, margin: '0 0 30px' }}>
					Agent <span style={{ background: colors.red, color: colors.white, borderRadius: radii.card, padding: '0 22px' }}>Memory</span> 与 State
				</motion.h1>
				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.2 }}
					style={{ display: 'inline-block', padding: '18px 32px', background: colors.white, border: line, borderRadius: radii.panel, boxShadow: softShadow, fontSize: 32, fontWeight: 700 }}>
					Context window 不是 Memory，vector store 也不是
				</motion.div>
			</div>
		</Slide>
	);
}

export function S02_Agenda() {
	return (
		<Page part="今天的路线" title="一个问题，八个部分">
			<Cols n={2} gap={14}>
				<Box size={25}>1 · State 和 Memory 不是一回事</Box>
				<Box size={25}>5 · Scope：user / project / team / organisation</Box>
				<Box size={25}>2 · Task state、Working memory、Session memory</Box>
				<Box size={25}>6 · TTL、retention、更正、删除、consent</Box>
				<Box size={25}>3 · Episodic、Semantic、Procedural</Box>
				<Box size={25}>7 · 冲突、过期、provenance、memory poisoning</Box>
				<Box size={25}>4 · 读写策略：什么能写，什么时候读</Box>
				<Box size={25}>8 · Coding Agent Memory 架构与面试表达</Box>
			</Cols>
			<Say>记下来之前先问四件事：谁确认的、给谁看、留多久、怎么删。</Say>
		</Page>
	);
}

export function S03_Ladder() {
	return (
		<Page part="接上 W8" title="阶梯再上一级：能记住什么">
			<Tbl size={22} widths="150px 1fr 1fr" head={['', '解决的问题', '信息活多久']} rows={[
				['W7', '一个 Agent：ReAct 循环、工具、停止', '一次 run'],
				['W8', '多个 Agent：拆分、隔离、派活契约', '每个 Agent 各自的 context，交接靠契约'],
				['W9 今天', 'Memory：哪些信息可以跨步骤、跨 session 再读到', '按规则定：来源、scope、owner、TTL、删除'],
			]} />
			<Say>今天的例子都用 Claude Code。一条规则贯穿全课：Agent 可以提议记什么，记不记由代码和人决定。今天没有 code demo。</Say>
		</Page>
	);
}
