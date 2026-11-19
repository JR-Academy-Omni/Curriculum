import { Code, Cols, Page, Say } from './_parts';

export default function S31_TwoLayers() {
	return (
		<Page part="第 5 部分" at={['carekind.py · Backend.call()', 'tests/test_handover.py']} title="两层：配置里没有，后台也不认">
		  <Cols n={2} gap={20}>
		    <Code file="carekind.py" size={17} code={`PERMISSIONS = {
    "Shift lead":     {"flag_for_rn_review"},
    "Note drafter":   {"get_resident_context",
                       "search_policy",
                       "create_progress_note_draft"},
    "Policy checker": {"search_policy", "get_draft"},
}

def call(self, agent_name, tool, args, thread_id):
    if tool not in PERMISSIONS.get(agent_name, set()):
        raise ToolError(f"{agent_name} is not allowed ...")`} />
		    <Code file="tests/test_handover.py" size={17} code={`def test_checker_cannot_write_even_if_it_tries(b):
    """配置里没有这个工具；
    就算调用被伪造出来，后台也拒绝。"""
    with pytest.raises(ToolError, match="not allowed"):
        draft(b, agent=POLICY_CHECKER)
    assert b.drafts == {}
    assert b.audit[-1]["status"] == "error"`} />
		  </Cols>
		  <Say>第一层：Agent 配置里只放它的工具。第二层：后台按调用者再查一次。和 W7 一样，prompt 是请求，代码是保证。</Say>
		</Page>
	);
}
