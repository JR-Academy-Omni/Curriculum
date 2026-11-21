#!/usr/bin/env python3
"""Render the lesson's approved Markdown quote into its printable HTML."""
from decimal import Decimal, ROUND_HALF_UP
from html import escape
from pathlib import Path
from string import Template

ROOT = Path(__file__).resolve().parent.parent
QUOTE = ROOT / 'public' / 'quote'

def rows(section):
    return [
        [cell.strip() for cell in line.strip('|').split('|')]
        for line in section.splitlines() if line.startswith('|')
    ][2:]

def money(amount):
    return f'{amount.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP):,.2f}'

def render():
    source = (QUOTE / 'quote-sot.md').read_text()
    metadata, base, change, _ = source.split('\n## ', 3)
    fields = dict(line[2:].split('：', 1) for line in metadata.splitlines() if line.startswith('- '))
    base_lines = {code: (name, Decimal(quantity), unit, Decimal(price))
                  for code, name, quantity, unit, price in rows(base)}
    revised_lines = base_lines.copy()
    for code, quantity in rows(change):
        name, _, unit, price = revised_lines[code]
        revised_lines[code] = (name, Decimal(quantity), unit, price)

    tax_rate = Decimal(fields['税率（%）'])
    deposit_rate = Decimal(fields['订金（%）'])
    currency = escape(fields['币种'])
    heading = escape(fields['标题'])
    customer = escape(fields['客户'])

    versions = []
    for number, lines in enumerate((base_lines, revised_lines), start=1):
        line_items = []
        subtotal = Decimal('0.00')
        for name, quantity, unit, price in lines.values():
            amount = (quantity * price).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
            subtotal += amount
            line_items.append(f'<tr><th scope="row">{escape(name)}</th><td>{quantity} {escape(unit)}</td>'
                              f'<td>{money(price)}</td><td>{money(amount)}</td></tr>')
        tax = (subtotal * tax_rate / 100).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
        total = subtotal + tax
        deposit = (total * deposit_rate / 100).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
        visibility = '' if number == 1 else ' hidden'
        versions.append(f'''<main data-version="V{number}"{visibility}>
<header><div><small>WORKSHOP SERVICES</small><h1>{heading}</h1><p>致 {customer}</p></div>
<dl><div><dt>报价编号</dt><dd>{escape(fields['编号'])} · V{number}</dd></div>
<div><dt>出具日期</dt><dd>{escape(fields['出具日期'])}</dd></div>
<div><dt>有效期至</dt><dd>{escape(fields['有效期至'])}</dd></div></dl></header>
<section><h2>服务范围</h2><p>{escape(fields['服务范围'])}</p></section>
<table aria-label="报价明细，币种为 {currency}">
<thead><tr><th scope="col">交付项</th><th scope="col">数量</th><th scope="col">单价</th><th scope="col">金额</th></tr></thead>
<tbody>{''.join(line_items)}</tbody>
<tfoot>
<tr><th scope="row" colspan="3">小计（{currency}）</th><td>{money(subtotal)}</td></tr>
<tr><th scope="row" colspan="3">税额（{tax_rate}%）</th><td>{money(tax)}</td></tr>
<tr><th scope="row" colspan="3">总计（{currency}）</th><td data-total>{money(total)}</td></tr>
</tfoot></table>
<section><h2>排除项</h2><p>{escape(fields['排除项'])}</p></section>
<section><h2>付款条件</h2><p>书面接受报价后支付 {deposit_rate}% 订金（{currency} {money(deposit)}），余款（{currency} {money(total - deposit)}）于交付后 {escape(fields['余款期限（天）'])} 日内支付。</p></section>
<section><h2>接受报价</h2><p>{escape(fields['接受方式'])}</p></section>
</main>''')
    return Template((ROOT / 'scripts' / 'quote.template.html').read_text()).substitute(
        title=f'{customer} · {heading}',
        options='<option>V1</option><option>V2</option>',
        versions='\n'.join(versions),
    )

if __name__ == '__main__':
    (QUOTE / 'quote.html').write_text(render())
