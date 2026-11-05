"""FDE course reference: deterministic control logic, no model or external writes."""
import json
from pathlib import Path

def retrieve(records, department, evidence_id):
    return [r for r in records if r['id']==evidence_id and r['department']==department and r['current']]

def booking_decision(request, approval, committed):
    key=(request['requestId'], request['revision'], 'book')
    if key in committed:return 'already-committed'
    if approval is None or approval.get('requestId')!=request['requestId'] or approval.get('revision')!=request['revision'] or approval.get('preferredWindow')!=request['preferredWindow']:return 'review-required'
    committed.add(key)
    return 'commit-once'

def procurement_route(request, threshold, policy_version):
    if not request['supplierVerified'] or not request['requesterKnown']:return {'route':'review','policyVersion':policy_version}
    return {'route':'finance' if request['amountAUD']>threshold else 'normal-approver','policyVersion':policy_version}

def run():
    cases={c['id']:c for c in json.loads(Path(__file__).with_name('outline.json').read_text())['cases']}
    docs=cases['knowledge']['records']; request=cases['dispatch']['records'][0]; changed=cases['dispatch']['records'][2]
    approval={k:request[k] for k in ['requestId','revision','preferredWindow']}; committed=set()
    results={
      'authorisedCurrentEvidence':[r['id'] for r in retrieve(docs,'operations','POL-01')],
      'deniedFinanceEvidence':retrieve(docs,'operations','POL-02'),
      'excludedOldEvidence':retrieve(docs,'operations','POL-03'),
      'unapprovedBooking':booking_decision(request,None,committed),
      'approvedBooking':booking_decision(request,approval,committed),
      'duplicateBooking':booking_decision(request,approval,committed),
      'staleApproval':booking_decision(changed,approval,committed),
      'procurementBefore':[procurement_route(r,5000,1) for r in cases['procurement']['records']],
      'procurementAfter':[procurement_route(r,3000,2) for r in cases['procurement']['records']],
      'knowledgePlanning':{'capacityHours':4000*.8*6/60,'capacityValueAUD':4000*.8*6/60*60,'monthlyOperatingAUD':4000*.04+300+10*60}
    }
    assert results['authorisedCurrentEvidence']==['POL-01']
    assert not results['deniedFinanceEvidence'] and not results['excludedOldEvidence']
    assert results['unapprovedBooking']=='review-required'
    assert results['approvedBooking']=='commit-once' and results['duplicateBooking']=='already-committed'
    assert results['staleApproval']=='review-required'
    assert results['procurementBefore'][0]['route']=='normal-approver'
    assert results['procurementAfter'][0]['route']=='finance'
    return results
if __name__=='__main__':print(json.dumps(run(),indent=2))
