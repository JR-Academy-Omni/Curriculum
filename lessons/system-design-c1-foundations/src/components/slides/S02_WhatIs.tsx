import { AnimatedGroup, Arrow, DeckFrame, Label, Panel, Takeaway, colors } from '../kit';

export default function S02_WhatIs() {
	return <DeckFrame tag="P02 · 什么是 SYSTEM DESIGN" title="System Design 要回答什么" subtitle="给你一个产品需求，说清楚系统怎么搭、为什么这样搭。">
		<div style={{ display: 'grid', gap: 26 }}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: 18, alignItems: 'stretch' }}>
				<AnimatedGroup delay={.12} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
					<Label>输入</Label>
					<p style={{ marginTop: 14, fontSize: 24, lineHeight: 1.5 }}>要做什么功能、给多少人用、多快出结果、能不能停机、预算多少。</p>
				</Panel></AnimatedGroup>
				<Arrow />
				<AnimatedGroup delay={.2} style={{ display: 'flex' }}><Panel bg={colors.yellow} style={{ flex: 1 }}>
					<Label>你做的事</Label>
					<p style={{ marginTop: 14, fontSize: 24, lineHeight: 1.5 }}>拆出要哪些组件、数据存在哪、请求怎么走、出错了怎么办。</p>
				</Panel></AnimatedGroup>
				<Arrow />
				<AnimatedGroup delay={.28} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
					<Label bg={colors.yellow} color={colors.black}>输出</Label>
					<p style={{ marginTop: 14, fontSize: 24, lineHeight: 1.5 }}>一张架构图，加上每个选择的理由和代价。</p>
				</Panel></AnimatedGroup>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<AnimatedGroup delay={.36}><Panel>
					<Label>面试里</Label>
					<p style={{ marginTop: 12, fontSize: 23, lineHeight: 1.5 }}>45 分钟左右，题目故意说得很模糊。面试官看你会不会先问清需求、估数字，再一步步画图和讲取舍。</p>
				</Panel></AnimatedGroup>
				<AnimatedGroup delay={.42}><Panel>
					<Label>工作里</Label>
					<p style={{ marginTop: 12, fontSize: 23, lineHeight: 1.5 }}>写设计文档、评审方案。约束更具体：现有系统、团队人手、上线时间和云账单。</p>
				</Panel></AnimatedGroup>
			</div>
			<Takeaway>没有唯一标准答案。好的设计 = 满足需求，并且能说清楚自己放弃了什么。</Takeaway>
		</div>
	</DeckFrame>;
}
