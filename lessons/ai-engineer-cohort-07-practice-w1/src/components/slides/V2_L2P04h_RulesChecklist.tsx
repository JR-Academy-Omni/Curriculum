// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04h_RulesChecklist.tsx
import { useState } from 'react';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
// 15 条可写进 CLAUDE.md / .cursor/rules 的具体规则（比 SOLID/DRY/KISS 更落地）
const rules: {
    t: string;
    d: string;
}[] = [
    { t: 'Single Responsibility', d: '一个函数/模块只做一件事，改一个原因只影响一处' },
    { t: 'Clear Naming', d: '变量/函数名说人话，不用 a / tmp / data2 这种糊弄名字' },
    { t: 'No Hard-Coded Secrets', d: 'API Key / 密码 / token 一律进 .env，不进代码或 git' },
    { t: 'Comments First', d: '复杂逻辑先写一句"为什么"，不是写完代码再补注释' },
    { t: 'Test-Driven', d: '关键逻辑先写测试用例，或至少写完立刻补测试' },
    { t: 'Explicit Error Handling', d: '报错要显式抛出/处理，禁止空 catch 静默吞掉' },
    { t: 'Validate at Boundaries', d: '只在系统边界（用户输入/外部 API）验证，内部代码互相信任，别层层判空' },
    { t: 'Secure by Default', d: '默认最小权限/最严设置，要放开权限必须显式声明' },
    { t: 'No Placeholder / Fake Data', d: '禁止交付 TODO / Lorem ipsum / 编造的假数字，没有真数据就说明白' },
    { t: 'Performance Boundaries', d: '明确写死不可接受的性能底线（如接口 > 2s 算不合格）' },
    { t: 'Minimal Dependencies', d: '能用标准库解决就不装新包，装之前先问"真的需要吗"' },
    { t: 'YAGNI', d: "You Aren't Gonna Need It：不为「未来可能用到」写代码，只写现在要用的" },
    { t: 'Code for the Reader', d: '代码首先是给人看的，顺便给机器执行；可读性优先于炫技' },
    { t: 'Explicit Types on Exports', d: '每个导出的函数/变量都要写明类型，不依赖隐式推断' },
    { t: '"No any" Unless Whitelisted', d: '禁用 any，除非在白名单里明确批准（如无类型的第三方库）' },
];
// Rules Checklist：15 条可执行规则，比 SOLID/DRY/KISS 更具体、可直接抄进 rules 文件
export default function L2P04h_RulesChecklist() {
    const [copied, setCopied] = useState(false);
    const [copyError, setCopyError] = useState(false);
    const handleCopy = async () => {
        const text = `请在写代码时严格遵守以下 ${rules.length} 条规则：\n\n${rules
            .map((r, i) => `${i + 1}. ${r.t} — ${r.d}`)
            .join('\n')}`;
        try { await navigator.clipboard.writeText(text); } catch { setCopyError(true); return; }
        setCopyError(false);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    };
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
					<div>
						<Tag bg={colors.dark}>Rules Checklist</Tag>
						<Title size="40px" style={{ marginTop: 10 }}>
							15 条可执行规则：<span style={{ color: colors.red }}>比 SOLID/DRY/KISS 更具体</span>
						</Title>
						<p style={{ fontSize: 14.5, color: '#555', marginTop: 6, fontWeight: 700 }}>
							SOLID/DRY/KISS 是方向，这 15 条是可以直接抄进 CLAUDE.md / .cursor/rules 的具体条款。
						</p>
					</div>

					<motion.button onClick={handleCopy} whileTap={{ scale: 0.95 }} style={{
            borderRadius: 18,
            flexShrink: 0, cursor: 'pointer', border, boxShadow: shadow,
            background: copied ? colors.green : colors.dark,
            color: copied ? colors.black : colors.yellow,
            padding: '10px 16px', fontFamily: fonts.mono, fontSize: 13, fontWeight: 900,
            display: 'flex', alignItems: 'center', gap: 8, marginTop: 6
        }}>
						<span style={{ fontSize: 16 }}>{copied ? '✓' : '📋'}</span>
						{copied ? '已复制！去粘给 AI' : copyError ? '复制受限，请选取下方规则' : '复制这 15 条给 AI'}
					</motion.button>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
					{rules.map((r, i) => (<motion.div key={r.t} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.045, duration: 0.3 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '9px 13px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
							<div style={{ flexShrink: 0, width: 26, height: 26, background: colors.dark, color: colors.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 12, fontWeight: 900 }}>
								{String(i + 1).padStart(2, '0')}
							</div>
							<div style={{ flex: 1, minWidth: 0 }}>
								<div style={{ fontSize: 14, fontWeight: 900, color: colors.black, fontFamily: fonts.mono }}>{r.t}</div>
								<div style={{ fontSize: 12, color: '#555', marginTop: 2, lineHeight: 1.35, fontWeight: 650 }}>{r.d}</div>
							</div>
						</motion.div>))}
				</div>
			</Inner>
		</Slide>);
}
