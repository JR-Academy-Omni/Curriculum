"""Business workflow reference: field checks and routing, no external actions or model calls."""
from decimal import Decimal, ROUND_HALF_UP, InvalidOperation
from pathlib import Path
import json

def invoice_register(records):
    seen=set();results=[]
    for row in records:
        key=(row.get('supplierRef'),row.get('invoiceRef'))
        issues=[]
        if not all(key):issues.append('missing-identity')
        elif key in seen:issues.append('duplicate')
        else:seen.add(key)
        if row.get('currency')!='AUD':issues.append('review-currency')
        expected=None
        if row.get('taxStatus')!='standard-taxable-inclusive':issues.append('review-tax-status')
        else:
            try:
                total=Decimal(row['total']); gst=Decimal(row['gst'])
                if not total.is_finite() or not gst.is_finite() or total<0 or gst<0:raise ValueError('invalid amount')
                expected=(total/Decimal(11)).quantize(Decimal('0.01'),rounding=ROUND_HALF_UP)
                if abs(gst-expected)>Decimal('0.01'):issues.append('gst-arithmetic-mismatch')
            except (ValueError,TypeError,KeyError,InvalidOperation):issues.append('review-amount')
        results.append({'source':row['source'],'invoiceRef':row.get('invoiceRef'),'originalTotal':row.get('total'),'originalGST':row.get('gst'),'expectedGST':str(expected) if expected is not None else None,'status':'review-ready' if not issues else 'exception','issues':issues,'approvalOwner':'finance','paymentExecuted':False})
    return results

def customer_queue(events):
    leads={};notes=[]
    for event in events:
        key=event.get('enquiryId')
        if not key:notes.append({'eventId':event['eventId'],'status':'missing-information'});continue
        current=leads.get(key)
        if current and event['revision']<=current['revision']:
            notes.append({'eventId':event['eventId'],'status':'duplicate-or-stale'});continue
        leads[key]={'enquiryId':key,'revision':event['revision'],'preferredWindow':event['preferredWindow'],'draftApproval':'required','draftText':'Thanks for your request. We have noted '+event['preferredWindow']+' as your preferred window. Our team will check availability before confirming a visit.','messageSent':False}
        notes.append({'eventId':event['eventId'],'status':'updated-review-required' if current else 'draft-review-required'})
    return {'leads':list(leads.values()),'events':notes}

def onboarding(row):
    if not row['contractConfirmed']:status='HR-confirmation-required'
    elif not row['managerAssigned']:status='manager-required'
    elif row['accessApprovedRevision']!=row['roleRevision']:status='IT-reapproval-required'
    elif not row['accessFulfilmentEvidence']:status='IT-fulfilment-evidence-required'
    else:status='ready-for-owner-review'
    return {'starterRef':row['starterRef'],'status':status,'accessGranted':False}

def run():
    cases={c['id']:c for c in json.loads(Path(__file__).with_name('outline.json').read_text())['cases']}
    rows=invoice_register(cases['finance']['records']);customers=customer_queue(cases['customer']['records']);people=[onboarding(r) for r in cases['people']['records']]
    assert rows[0]['status']=='review-ready' and rows[0]['expectedGST']=='100.00'
    assert 'gst-arithmetic-mismatch' in rows[1]['issues'] and rows[1]['expectedGST']=='50.00'
    assert 'duplicate' in rows[2]['issues']
    assert 'review-currency' in rows[3]['issues'] and 'review-tax-status' in rows[3]['issues']
    assert len(customers['leads'])==1 and customers['leads'][0]['revision']==2 and not customers['leads'][0]['messageSent']
    assert people[0]['status']=='IT-fulfilment-evidence-required' and people[1]['status']=='HR-confirmation-required' and people[2]['status']=='IT-reapproval-required'
    return {'invoiceRegister':rows,'customerFollowUp':customers,'onboarding':people,'planning':{'monthlyCapacityHours':300*.8*5/60,'capacityValueAUD':300*.8*5/60*60,'operatingAssumptionAUD':200+2*80}}
if __name__=='__main__':print(json.dumps(run(),indent=2))
