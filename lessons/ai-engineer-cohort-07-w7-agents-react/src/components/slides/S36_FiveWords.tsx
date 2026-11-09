import { Code, Page, Say, Tbl } from './_parts';

export default function S36_FiveWords() {
	return (
		<Page part="第 6 部分" at={["errors.py · with_retry()", "handoff.py · side_effect_state()"]} title="五个词，先分清">
		  <Tbl size={20} widths="220px 1fr" head={['词', '意思']} rows={[
		    ['Timeout', '等太久，放弃这次调用'],
		    ['Retry', '再试一次同样的操作'],
		    ['Fallback', '换一条路：备用模型、备用流程或人工'],
		    ['Interrupt', '由外部叫停，比如操作员或超时'],
		    ['Partial failure', '一部分成功，一部分失败：退了款，邮件没发'],
		  ]} />
		  <Code file="demo/errors.py" size={15} code={"attempt = 1\nwhile True:\n    result = call()\n    if decide(result, attempt=attempt, max_attempts=max_attempts) is not Decision.RETRY:\n        return result, attempt\n    sleep(base_delay * (2 ** (attempt - 1)))\n    attempt += 1"} />
		  <Say>最难的是 partial failure：要知道哪些已经做了，不能当成全都没发生。</Say>
		</Page>
	);
}
