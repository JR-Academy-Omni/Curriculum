import { colors } from '../ui';
import { Mono, Page, Say, Tbl } from './_parts';

export default function S30_RosterTable() {
	return (
		<Page part="第 5 部分" at={['carekind.py · PERMISSIONS']} title="CareKind 的 roster：谁拿什么钥匙">
		  <Tbl size={21} widths="200px 190px 1fr 150px" head={['Agent', 'Model', '工具', '能写']} rows={[
		    ['Shift lead', 'Sonnet 5.5', <><Mono>flag_for_rn_review</Mono> + 派活工具 + Opus advisor</>, '只能交给 RN'],
		    ['Note drafter', 'Sonnet 5.5', <><Mono>get_resident_context</Mono> <Mono>search_policy</Mono> <Mono>create_progress_note_draft</Mono></>, '只写 Draft'],
		    ['Policy checker', 'Haiku 5.5', <><Mono>get_draft</Mono> <Mono>search_policy</Mono></>, '否'],
		    ['Handover agent（基线）', 'Sonnet 5.5', '以上全部', 'Draft + RN'],
		  ]} />
		  <Say bg={colors.green}>协调者读不到住户记录。它只看回报，所以它的上下文不会被六份记录塞满。</Say>
		</Page>
	);
}
