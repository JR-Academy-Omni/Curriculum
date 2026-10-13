import { Page, ActCover } from '../deck';

/** C1 · 幕一封面 · 它现在活在哪 */
export default function L15C1_Act1() {
	return (
		<Page bg="#1a1a2e" style={{ padding: 0 }}>
			<ActCover act={1} question="它现在活在哪？" outcome="一张标好了的资产表" />
		</Page>
	);
}
