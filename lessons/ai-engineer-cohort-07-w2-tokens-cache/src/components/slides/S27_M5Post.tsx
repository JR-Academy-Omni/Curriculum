import { Slide, Inner, Half, Title, colors } from '../ui';
import { ModuleTag, Terminal, RevealButton } from './_shared';
import { useState } from 'react';
import { motion } from 'framer-motion';

// M5 后测：找出让 cache 命中率归零的代码
export default function S27_M5Post() {
	const [open, setOpen] = useState(false);
	return (
		<Slide bg={colors.white}>
			<Inner split>
				<Half>
					<ModuleTag id="M5" phase="post" />
					<Title size="46px" style={{ marginBottom: 16 }}>上线后 cache 命中率一直是 0，问题在哪？</Title>
					<Terminal
						fontSize={17}
						lines={[
							'system = (',
							'    f"Today is {datetime.now()}. "',
							'    f"You are helping {user.name}.\\n"',
							'    + POLICY_DOC        # 很长，所有用户都一样',
							')',
							'tools = random.sample(ALL_TOOLS, k=len(ALL_TOOLS))',
						]}
					/>
				</Half>
				<Half>
					<p style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.6, marginBottom: 16 }}>
						找出 3 个问题，说出怎么改，以及上线后看哪个字段确认修好了
					</p>
					<RevealButton open={open} label="看参考答案" onClick={() => setOpen(!open)} />
					{open && (
						<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
							style={{ marginTop: 16, padding: '14px 18px', background: colors.green, fontSize: 20, fontWeight: 700, lineHeight: 1.6 }}>
							① 时间在最前面，每次都变 → 前缀第一个字节就不同。② user name 让每个用户的前缀都不一样。③ tools 顺序随机，而 tools 排在最前面。
							改法：tools 固定顺序；POLICY_DOC 放最前并打 cache 断点；时间和用户名挪到 messages 里。
							监控：cache_read_input_tokens 应该大于 0，并且随着流量稳定增长。
						</motion.div>
					)}
				</Half>
			</Inner>
		</Slide>
	);
}
