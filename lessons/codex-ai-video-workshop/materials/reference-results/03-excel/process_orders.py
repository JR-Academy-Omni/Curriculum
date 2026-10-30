"""Reusable offline XLSX-to-CSV/HTML workflow. Python 3 standard library only."""
import argparse, csv, datetime as dt, html, json, zipfile
from pathlib import Path
import xml.etree.ElementTree as ET
from collections import defaultdict

NS={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
def read_xlsx(p):
    with zipfile.ZipFile(p) as z:
        strings=[]
        if 'xl/sharedStrings.xml' in z.namelist():
            strings=[''.join(n.itertext()) for n in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('s:si',NS)]
        rows=[]
        for node in ET.fromstring(z.read('xl/worksheets/sheet1.xml')).findall('s:sheetData/s:row',NS):
            cells={}
            for c in node.findall('s:c',NS):
                v=c.find('s:v',NS);value=v.text if v is not None else ''
                if c.get('t')=='s':value=strings[int(value)]
                elif c.get('t')=='inlineStr':value=''.join(c.find('s:is',NS).itertext())
                cells[''.join(x for x in c.get('r') if x.isalpha())]=value
            rows.append((int(node.get('r')),[cells.get(x,'') for x in 'ABCDEFG']))
        if rows[0][1]!=['order_id','date','city','product','quantity','unit_price_AUD','status']:
            raise ValueError('Unexpected headers. This workflow accepts only the course Orders template.')
        return rows[1:]
def process(source):
    raw=read_xlsx(source);groups=defaultdict(list);exceptions=[];clean=[]
    for row,r in raw:
        oid,date,city,product,quantity,price,status=[x.strip() for x in r]
        error=[]
        try:
            date=dt.datetime.strptime(date,'%d/%m/%Y' if '/' in date else '%Y-%m-%d').date().isoformat()
        except ValueError:error.append('Invalid date')
        city=city.title();status=status.title()
        try:
            q=float(quantity)
            if not q.is_integer() or q==0 or (q<0 and status!='Refunded'):raise ValueError()
            q=int(q)
        except ValueError:q=None;error.append('Missing or invalid quantity')
        try:
            price=float(price)
            if price<=0:raise ValueError()
        except ValueError:price=None;error.append('Missing or invalid unit price')
        if not oid:error.append('Missing order ID')
        if city not in ['Brisbane','Sydney','Melbourne']:error.append('Unknown city')
        if status not in ['Paid','Pending','Refunded']:error.append('Unknown status')
        groups[oid].append((row,[oid,date,city,product,q,price,status],error))
    for oid,entries in groups.items():
        if len({json.dumps(e[1]) for e in entries})>1:
            exceptions.extend([row,oid,'Quarantine','Conflicting order ID'] for row,r,e in entries);continue
        row,r,errors=entries[0]
        if errors:exceptions.append([row,oid,'Quarantine','; '.join(errors)])
        else:clean.append(r+[row,round(r[4]*r[5],2)])
        for row,r,e in entries[1:]:exceptions.append([row,oid,'Duplicate removed','Matches first normalized row'])
    totals=defaultdict(float);cities=defaultdict(float)
    for r in clean:totals[r[6]]+=r[8];cities[r[2]]+=r[8]
    return raw,clean,exceptions,dict(totals),dict(cities)
def main():
    a=argparse.ArgumentParser(description=__doc__);a.add_argument('input',type=Path);a.add_argument('--out',type=Path,required=True);args=a.parse_args()
    raw,clean,exceptions,totals,cities=process(args.input)
    # Exclusive new directory: a repeat run cannot overwrite a previous result.
    args.out.mkdir(parents=True,exist_ok=False)
    def output(name,headers,rows):
        with (args.out/name).open('w',encoding='utf-8-sig',newline='') as f:
            w=csv.writer(f);w.writerow(headers);w.writerows(rows)
    output('clean-orders.csv',['order_id','date','city','product','quantity','unit_price_AUD','status','source_row','amount_AUD'],clean)
    output('exceptions.csv',['source_row','order_id','disposition','reason'],exceptions)
    output('summary.csv',['group','label','amount_AUD'],[['status',k,v] for k,v in totals.items()]+[['city',k,v] for k,v in cities.items()]+[['total','Signed total',sum(totals.values())]])
    report={'source':args.input.name,'raw_rows':len(raw),'accepted_rows':len(clean),'removed_duplicates':sum(e[2]=='Duplicate removed' for e in exceptions),'quarantined_rows':sum(e[2]=='Quarantine' for e in exceptions),'signed_total_AUD':sum(totals.values()),'by_status':totals,'by_city':cities}
    assert report['raw_rows']==report['accepted_rows']+report['removed_duplicates']+report['quarantined_rows']
    (args.out/'reconciliation.json').write_text(json.dumps(report,indent=2),encoding='utf8')
    rows=''.join('<tr><td>'+html.escape(str(k))+'</td><td>'+html.escape(str(v))+'</td></tr>' for k,v in report.items() if not isinstance(v,dict))
    (args.out/'report.html').write_text('<!doctype html><meta charset="utf-8"><title>Order processing result</title><style>body{font:17px/1.7 system-ui;max-width:900px;margin:40px auto;padding:20px;background:#fffef7;color:#1f1b2d}td{padding:10px;border-bottom:1px solid #efe8da}</style><h1>Order processing result</h1><p>Fictional training data. Signed order values in AUD.</p><table>'+rows+'</table><p><a href="clean-orders.csv">Clean orders</a> · <a href="exceptions.csv">Exceptions</a> · <a href="summary.csv">Summary</a></p>',encoding='utf8')
    print(json.dumps(report))
if __name__=='__main__':main()
