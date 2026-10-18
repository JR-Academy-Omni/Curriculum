import { motion } from 'framer-motion';
import { Page, Code, colors, fonts, radii } from '../deck';

/**
 * P14 · ⭐⭐ 独占 —— 【全课唯一一次翻车】，也是唯一一个学员看完会后背发凉的时刻
 *
 * 🔴 2026-10-04：原来全课有三次翻车，讲师取消了另外两次（P07 / P20）：
 *   「不要从反面来教。」留下这一次，因为它其实不算从反面教 ——
 *   学员跑的是一段【写得很正常】的脚本，他没做错任何事，
 *   只是观察到默认写法的真实行为。那不是反面教材，那是实验。
 *
 * 🔴 查的是【真东西】：学员自己那个产品仓的交付清单。
 *   原来数的是一个玩具 reports/ 目录 —— 讲师：「myops 里面一个 report 也没有，
 *   当然是 0」「没有意义」。0 只有在它是一句【业务结论】的时候才吓人。
 *
 * 🔴 2026-10-04 二改（讲师：「第15页是什么脚本，怎么写」）：
 *   原来这一页只有一句口头指令，**屏幕上什么代码都没有** ——
 *   学员不知道写什么、怎么写，而且正常写法多半直接抛异常，根本到不了那个 0。
 *   现在把脚本放上屏（deck 纪律原话就是「动手页只放指令【和代码】」）。
 *
 * 🚨 代码【不许高亮 catch 那一行】。高亮就等于提前把答案给了，翻车作废。
 *   指 catch 是 P15 揭晓之后的事（见 RUNSHEET）。
 */
export default function L14P14_MakeItFail() {
	return (
		<Page bg={colors.dark}>
			<motion.div
				initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}
			>
				<span style={{
					fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 2.5,
					padding: '7px 16px', borderRadius: radii.label,
					background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}`,
				}}>动手 · 慢慢来，这一格最重要</span>
				<span style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, color: colors.white, letterSpacing: -1.2 }}>
					跑一段很普通的代码
				</span>
			</motion.div>

			<div style={{ display: 'flex', gap: 26, flex: 1, minHeight: 0 }}>
				<Code
					style={{ flex: '0 0 700px' }}
					label="课前包 check-delivery.mjs —— 交付清单里还有几项没完成"
					size={19}
					code={`const PENDING = /needs-human|SIGNOFF[^=]*=\\s*false|^\\s*- \\[ \\]/;

async function openItems(dir) {
  try {
    const files = await mdFiles(dir);
    const hits = [];
    for (const f of files) {
      const text = await readFile(f, 'utf8');
      for (const line of text.split('\\n'))
        if (PENDING.test(line)) hits.push(line);
    }
    return hits;
  } catch {
    return [];
  }
}

const open = await openItems(process.argv[2]);
console.log(\`交付清单里还没完成的：\${open.length} 项\`);
if (open.length === 0) console.log(\`也就是说 —— 全都交付完了。\`);`}
				/>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
					<motion.div
						initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.4 }}
						style={{ fontSize: 22, lineHeight: 1.7, color: 'rgba(255,255,255,.8)' }}
					>
						它回答一个 <strong style={{ color: colors.white }}>CEO 真会问的问题</strong>：
						<strong style={{ color: colors.white }}>我们那个产品，交付清单里还有几项没完成？</strong>
						<br />
						用的是<strong style={{ color: colors.yellow }}>绝大多数人都会这么写</strong>的写法。
					</motion.div>

					<Code
						label="跑两次"
						size={18}
						hi={[1]}
						code={`node check-delivery.mjs ~/…/star-mansions/doc
node check-delivery.mjs ~/…/star-mansions/dco`}
					/>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
						style={{ fontSize: 20, lineHeight: 1.6, color: 'rgba(255,255,255,.62)' }}
					>
						第二条<strong style={{ color: colors.yellow }}>路径是故意写错的</strong> —— <code>doc</code> 打成了 <code>dco</code>。
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.45 }}
						style={{
							marginTop: 'auto', padding: '20px 24px', borderRadius: radii.panel,
							border: `2px solid ${colors.yellow}`, background: 'rgba(255,222,89,.12)',
							fontFamily: fonts.heading, fontSize: 30, fontWeight: 900,
							color: colors.white, lineHeight: 1.4, letterSpacing: -0.8,
						}}>
						把第二次的输出<br /><span style={{ color: colors.yellow }}>原样念出来</span>。
						<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 400, opacity: .66, marginTop: 10, letterSpacing: 0 }}>
							先别解释。下一页我们一起看那个数字。
						</div>
					</motion.div>
				</div>
			</div>
		</Page>
	);
}
