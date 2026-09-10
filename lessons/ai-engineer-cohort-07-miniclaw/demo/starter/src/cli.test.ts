import { expect, test } from 'bun:test';

test('starter test harness is ready', () => {
	expect(['provider', 'router', 'skill', 'memory', 'approval']).toHaveLength(5);
});
