"""Deterministic arithmetic checks for fictional teaching fixtures. No network or model calls."""
from pathlib import Path
import csv
import json
from datetime import datetime, timedelta

ROOT = Path(__file__).resolve().parent

def read_csv(name):
    with (ROOT / name).open(encoding='utf-8', newline='') as stream:
        return list(csv.DictReader(stream))

results = []
for row in read_csv('time-display-fixture.csv'):
    utc_value = datetime.fromisoformat(row['utc_time'])
    expected = (utc_value + timedelta(hours=10)).strftime('%Y-%m-%d %H:%M')
    assert expected == row['expected_brisbane'], row['record_id']
    results.append({'record_id': row['record_id'], 'expected': expected,
                    'synthetic_observed': row['synthetic_observed'],
                    'matches': expected == row['synthetic_observed']})
assert [r['record_id'] for r in results if not r['matches']] == ['A-003']

windows = []
for row in read_csv('measurement-scenario.csv'):
    impressions, clicks, sessions = [int(row[k]) for k in ['search_impressions','search_clicks','p2_sessions']]
    complete, p3, p1 = [int(row[k]) for k in ['checklist_complete_sessions','p3_entry_sessions','p1_entry_sessions']]
    assert 0 <= clicks <= impressions
    assert all(0 <= v <= sessions for v in [complete, p3, p1])
    assert row['successful_leads'] == '' and row['qualified_leads'] == '' and row['payments'] == ''
    windows.append({'window': row['window'], 'ctr_percent': round(clicks/impressions*100,2),
                    'checklist_share_percent': round(complete/sessions*100,2),
                    'p1_entry_share_percent': round(p1/sessions*100,2),
                    'lead_status': row['lead_status'], 'payment_status': row['payment_status']})
assert len(read_csv('demand-map.csv')) == 10
report = {'nature': 'fictional teaching fixtures only; not product QA or live analytics',
          'time_records': results, 'intentional_time_mismatches': 1,
          'measurement_windows': windows}
(ROOT / 'verification-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
lines=['# Practice fixture verification report','',
       'This report checks fictional teaching data and arithmetic only. It does not verify a product, website, search ranking, or business result.','',
       '## Time display fixture','', '| Record | Expected Brisbane | Synthetic observation | Match |','|---|---|---|---|']
for r in results: lines.append(f"| {r['record_id']} | {r['expected']} | {r['synthetic_observed']} | {r['matches']} |")
lines += ['', 'Three records checked; A-003 is the single intentional mismatch.', '',
          '## Synthetic measurement calculations','',
          '| Window | Search CTR | Checklist share | P1 entry share | Leads | Payments |',
          '|---|---|---|---|---|---|']
for w in windows: lines.append(f"| {w['window']} | {w['ctr_percent']}% | {w['checklist_share_percent']}% | {w['p1_entry_share_percent']}% | {w['lead_status']} | {w['payment_status']} |")
(ROOT / 'verification-report.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
print('Checked 10 fictional demand rows, 3 time records (1 intentional mismatch), and 2 synthetic measurement windows.')
