import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, SourceNote } from '../DeckTable';

export default function S11_DSChecklist() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§2 · 品牌清单"
					tagBg={colors.purple}
					title="品牌要定的就六样，不用做 VI 手册"
					sub="不是几十页的 VI 手册。是六行你自己能背下来、每次都发给 AI 的话。"
				/>

				<DeckTable
					fontSize={19}
					cols={[
						{ label: '要定的', w: '150px' },
						{ label: '写成什么样才算合格', w: '1.5fr' },
						{ label: '不合格的写法', w: '1fr' },
					]}
					rows={[
						[
							<b>名字 + 一句话</b>,
							<span>活动名 + 一句谁都听得懂的说明</span>,
							<span style={{ color: '#a33' }}>只有名字，没人知道是干嘛的</span>,
						],
						[
							<b>颜色</b>,
							<span>
								主色 1 个 + 辅色 1–2 个 + 中性色 1 组，<b style={{ background: colors.yellow, padding: '0 5px' }}>全部给 hex</b>
							</span>,
							<span style={{ color: '#a33' }}>「暖色调」「科技蓝」</span>,
						],
						[
							<b>字体</b>,
							<span>标题一款 + 正文一款，写出字体名</span>,
							<span style={{ color: '#a33' }}>「现代无衬线」</span>,
						],
						[
							<b>语气</b>,
							<span>
								三个形容词 + <b>三个禁用词</b>
							</span>,
							<span style={{ color: '#a33' }}>「专业又亲切」——等于没说</span>,
						],
						[
							<b>图片风格</b>,
							<span>真实照片 / 抽象氛围 / 插画，<b>选一种</b>，别都要</span>,
							<span style={{ color: '#a33' }}>「高级感」</span>,
						],
						[
							<b>logo 怎么用</b>,
							<span>放哪、留多少白、深色底用哪个版本</span>,
							<span style={{ color: '#a33' }}>只有一个文件，没说怎么用</span>,
						],
					]}
				/>

				<SourceNote>
					检验方法很硬：把这六行发给 AI，它出的东西你能不能一眼认出是同一个活动。认不出，就是有一行写得太虚。
				</SourceNote>
			</Body>
		</Slide>
	);
}
