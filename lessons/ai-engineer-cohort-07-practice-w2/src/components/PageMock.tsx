import type { ReactNode } from 'react';
import { colors, fonts, border, shadow } from './courseUi';
// 通用页面线框图 · 点开卡片时用来"看例子"，不是真的可交互原型
export type MockKind = 'list' | 'grid' | 'form' | 'detail' | 'accordion' | 'search' | 'error' | 'cart' | 'delete';
function Chrome({ children }: {
    children: ReactNode;
}) {
    return (<div style={{ borderRadius: 18, width: 340, background: colors.white, border, boxShadow: shadow, flexShrink: 0 }}>
			<div style={{ display: 'flex', gap: 6, padding: '8px 10px', borderBottom: `2px solid ${colors.black}`, background: '#f4f4f4' }}>
				<span style={{ width: 9, height: 9, borderRadius: 99, background: colors.red, display: 'inline-block' }}/>
				<span style={{ width: 9, height: 9, borderRadius: 99, background: colors.yellow, display: 'inline-block' }}/>
				<span style={{ width: 9, height: 9, borderRadius: 99, background: colors.green, display: 'inline-block' }}/>
			</div>
			<div style={{ padding: 14, minHeight: 190 }}>{children}</div>
		</div>);
}
function Bar({ w = '100%', h = 10, bg = '#e5e7eb' }: {
    w?: number | string;
    h?: number;
    bg?: string;
}) {
    return <div style={{ width: w, height: h, background: bg }}/>;
}
export function PageMock({ kind }: {
    kind: MockKind;
}) {
    switch (kind) {
        case 'list':
            return (<Chrome>
					<div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
						<div style={{ borderRadius: 18, background: colors.green, border, padding: '4px 10px', fontSize: 11, fontWeight: 900 }}>+ 新建</div>
					</div>
					{[0, 1, 2].map((i) => (<div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #eee' }}>
							<Bar w={90}/>
							<Bar w={60}/>
							<div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
								<span style={{ fontSize: 10, color: colors.blue, fontWeight: 800 }}>编辑</span>
								<span style={{ fontSize: 10, color: colors.red, fontWeight: 800 }}>删除</span>
							</div>
						</div>))}
				</Chrome>);
        case 'detail':
            return (<Chrome>
					<Bar w={130} h={16} bg={colors.dark}/>
					{['姓名', '电话', '备注'].map((l) => (<div key={l} style={{ display: 'flex', gap: 10, marginTop: 10, fontSize: 11, alignItems: 'center' }}>
							<span style={{ color: '#999', fontFamily: fonts.mono, width: 40 }}>{l}</span>
							<Bar w={150}/>
						</div>))}
					<div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
						<div style={{ borderRadius: 18, background: colors.blue, border, padding: '4px 10px', fontSize: 11, fontWeight: 900, color: colors.white }}>编辑</div>
						<div style={{ borderRadius: 18, background: colors.red, border, padding: '4px 10px', fontSize: 11, fontWeight: 900, color: colors.white }}>删除</div>
					</div>
				</Chrome>);
        case 'form':
            return (<Chrome>
					{['姓名', '电话', '邮箱'].map((l) => (<div key={l} style={{ marginBottom: 12 }}>
							<div style={{ fontSize: 10, color: '#999', fontFamily: fonts.mono, marginBottom: 4 }}>{l}</div>
							<Bar h={20} bg="#f0f0f0"/>
						</div>))}
					<div style={{ borderRadius: 18, background: colors.green, border, padding: '7px 14px', fontSize: 12, fontWeight: 900, textAlign: 'center' }}>保存</div>
				</Chrome>);
        case 'grid':
            return (<Chrome>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
						{[0, 1, 2, 3].map((i) => (<div key={i} style={{ borderRadius: 18, border, padding: 8 }}>
								<div style={{ width: '100%', height: 36, background: '#eee', marginBottom: 8 }}/>
								<Bar w="80%"/>
							</div>))}
					</div>
				</Chrome>);
        case 'accordion':
            return (<Chrome>
					{['这个多少钱？', '怎么退款？', '支持发票吗？'].map((q, i) => (<div key={q} style={{ borderRadius: 18, border, marginBottom: 7 }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 11px', background: i === 0 ? colors.yellow : '#fff', fontWeight: 800, fontSize: 12 }}>
								<span>{q}</span>
								<span>{i === 0 ? '−' : '+'}</span>
							</div>
							{i === 0 && (<div style={{ padding: '9px 11px', fontSize: 11, color: '#555', borderTop: '1px solid #eee' }}>
									点开才展开——这就是 Accordion，省空间、一次只看一条。
								</div>)}
						</div>))}
				</Chrome>);
        case 'search':
            return (<Chrome>
					<div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
						<Bar h={22} bg="#f0f0f0"/>
						<div style={{ background: colors.dark, color: colors.white, padding: '4px 12px', fontSize: 11, fontWeight: 900, flexShrink: 0 }}>搜</div>
					</div>
					{[0, 1].map((i) => (<div key={i} style={{ padding: '7px 0', borderBottom: '1px solid #eee' }}>
							<Bar w="70%"/>
							<div style={{ height: 6 }}/>
							<Bar w="50%" h={8} bg="#f4f4f4"/>
						</div>))}
				</Chrome>);
        case 'error':
            return (<Chrome>
					<div style={{ textAlign: 'center', paddingTop: 30 }}>
						<div style={{ fontSize: 40 }}>🚫</div>
						<div style={{ fontWeight: 900, marginTop: 10 }}>404 Not Found</div>
						<div style={{ marginTop: 12, display: 'inline-block', background: colors.dark, color: colors.white, padding: '5px 14px', fontSize: 11, fontWeight: 900 }}>
							返回首页
						</div>
					</div>
				</Chrome>);
        case 'cart':
            return (<Chrome>
					{[1, 2].map((i) => (<div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #eee' }}>
							<Bar w={110}/>
							<span style={{ fontSize: 11, fontWeight: 800 }}>¥{99 * i}</span>
						</div>))}
					<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontWeight: 900, fontSize: 13 }}>
						<span>合计</span>
						<span>¥297</span>
					</div>
					<div style={{ marginTop: 10, background: colors.red, color: colors.white, padding: '7px 14px', fontSize: 12, fontWeight: 900, textAlign: 'center' }}>去结算</div>
				</Chrome>);
        case 'delete':
            return (<Chrome>
					<div style={{ position: 'relative' }}>
						{[0, 1, 2].map((i) => (<div key={i} style={{ display: 'flex', gap: 8, padding: '7px 0', borderBottom: '1px solid #eee', background: i === 1 ? '#ffe5e5' : 'transparent' }}>
								<Bar w={90}/>
								<Bar w={60}/>
							</div>))}
						<div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<div style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '13px 18px', textAlign: 'center' }}>
								<div style={{ fontSize: 12, fontWeight: 900 }}>确定删除？</div>
								<div style={{ display: 'flex', gap: 8, marginTop: 9, justifyContent: 'center' }}>
									<div style={{ borderRadius: 18, border, padding: '3px 11px', fontSize: 11, fontWeight: 800 }}>取消</div>
									<div style={{ borderRadius: 18, background: colors.red, color: colors.white, border, padding: '3px 11px', fontSize: 11, fontWeight: 900 }}>确定</div>
								</div>
							</div>
						</div>
					</div>
				</Chrome>);
    }
}
