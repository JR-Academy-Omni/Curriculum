import { Page, ActCover } from '../deck';

/** C5 · 幕五封面 · 作者走了之后（收口幕） */
export default function L15C5_Act5() {
	return (
		<Page bg="#1a1a2e" style={{ padding: 0 }}>
			<ActCover act={5} question="你走了之后，它还在吗？" outcome="一条「要收回什么」" />
		</Page>
	);
}
