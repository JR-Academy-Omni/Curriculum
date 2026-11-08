import { Code, Page, Say, Tbl } from './_parts';

export default function S37_ErrorTypes() {
	return (
		<Page part="第 6 部分" at={["errors.py · category_of()"]} title="错误分四类，处理方式完全不同">
		  <Tbl size={18} widths="210px 1.2fr 1.5fr" head={['类型', '例子', '循环里怎么做']} rows={[
		    [<span>Transient<br />临时</span>, '读超时、429、5xx、断线', '代码按退避重试几次。模型不用花回合。'],
		    [<span>Fixable<br />模型能修</span>, '参数格式错、schema 校验失败', '作为 Observation 交回模型，允许改一次。'],
		    [<span>Permanent<br />永久</span>, 'not_found、forbidden、政策不允许', '不重试。告知客户，或停下来。'],
		    [<span>Unknown outcome<br />结果未知</span>, '写操作超时：可能已经成功了', '绝不盲目重试。先查状态，重试要带幂等键，否则升级。'],
		  ]} />
		  <Code file="demo/errors.py" size={15} code={"TRANSIENT = {\"timeout\", \"rate_limited\", \"server_error\", \"connection_error\"}\nFIXABLE = {\"invalid_argument\"}\nUNKNOWN_OUTCOME = {\"write_timeout\"}\n# 永久错误里，这些要人来判断；其余（如 not_found）直接告诉客户即可\nNEEDS_HUMAN = {\"forbidden\", \"policy_denied\", \"approval_required\", \"amount_mismatch\"}\nPERMANENT = {\"not_found\"} | NEEDS_HUMAN"} />
		  <Say>判断依据是：再试一次，结果会不会不同？会不会造成额外伤害？</Say>
		</Page>
	);
}
