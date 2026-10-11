import { Page, ActCover } from '../deck';

/** C4 · 幕四封面 · 你交出去的是默认值（反转幕） */
export default function L15C4_Act4() {
	return (
		<Page bg="#1a1a2e" style={{ padding: 0 }}>
			<ActCover act={4} question="你交出去的到底是什么？" outcome="一份四格交接说明" />
		</Page>
	);
}
