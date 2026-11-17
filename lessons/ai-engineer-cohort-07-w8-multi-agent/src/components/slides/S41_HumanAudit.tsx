import { Code, Page, Say } from './_parts';

export default function S41_HumanAudit() {
	return (
		<Page part="第 7 部分" at={['carekind.py · _flag_for_rn_review()', 'runtime/audit.jsonl']} title="交给人，并且留下记录">
		  <Code file="runtime/audit.jsonl（示意，一次工具调用一行）" size={16} code={`{"session": "sesn_…", "thread": "sthr_…", "agent": "Note drafter",
 "tool": "get_resident_context", "args": {"resident_id": "R-103", …},
 "status": "error", "error": "Care record system unavailable … not covered."}
{"session": "sesn_…", "thread": null, "agent": "Shift lead",
 "tool": "flag_for_rn_review", "args": {"resident_id": "R-106",
 "reason": "Possible reportable incident (P-INC-5)", "observation_ids": ["O-106-1"]},
 "status": "ok"}`} />
		  <Say>每一行都知道是哪个 session、哪个线程、哪个 Agent。被拒绝的调用也要记。出了事，能拼回“谁在什么时候根据什么做了什么”。</Say>
		</Page>
	);
}
