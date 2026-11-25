import { useState } from 'react';
import { DeckFrame, Panel, colors } from '../kit';
import { Interactive, Slider, Stat, fmtBytes } from '../labkit';

export default function S05b_CapacityLab() {
	const [perHour, setPerHour] = useState(1200);
	const [perDay, setPerDay] = useState(10000);
	const [sizeMb, setSizeMb] = useState(200);
	const [seconds, setSeconds] = useState(90);

	const concurrency = (perHour / 3600) * seconds;
	const dailyMb = perDay * sizeMb;
	const uploadMBps = (perHour * sizeMb) / 3600;
	const hints = [
		seconds > 10 ? `处理要 ${seconds} 秒，用户不该一直等 → 消息队列 + Worker（P12）` : `处理只要 ${seconds} 秒，可以同步返回`,
		dailyMb > 100_000 ? `每天 ${fmtBytes(dailyMb)} 文件 → 放对象存储，数据库只存元数据（P09）` : `每天 ${fmtBytes(dailyMb)}，存储压力不大`,
		uploadMBps * 8 > 1000 ? `高峰上传超过 1 Gb/s → 浏览器直传对象存储，不经过 Web 服务` : `高峰上传 ${Math.round(uploadMBps * 8)} Mb/s，一台机器的网卡还扛得住`,
	];

	return <DeckFrame tag="P06 · 第 2 步 · 互动" title="容量计算器：改假设，看数字怎么变" subtitle="拖动左边的假设，右边实时算出并发、存储和带宽，以及它们指向哪个组件。">
		<Interactive style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 26 }}>
			<Panel style={{ display: 'grid', gap: 18, padding: 24 }}>
				<Slider label="高峰每小时上传" value={perHour} min={100} max={20000} step={100} unit="个" onChange={setPerHour} />
				<Slider label="每天上传总量" value={perDay} min={1000} max={200000} step={1000} unit="个" onChange={setPerDay} />
				<Slider label="平均文件大小" value={sizeMb} min={10} max={2000} step={10} unit="MB" onChange={setSizeMb} />
				<Slider label="平均处理时长" value={seconds} min={1} max={600} unit="秒" onChange={setSeconds} />
			</Panel>
			<div style={{ display: 'grid', gap: 14, alignContent: 'start' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
					<Stat label="同时在处理的任务" value={`≈ ${concurrency < 10 ? concurrency.toFixed(1) : Math.round(concurrency).toLocaleString('en-US')} 个`} note="每小时数 ÷ 3,600 × 处理秒数" hot />
					<Stat label="每天新增文件" value={fmtBytes(dailyMb)} note={`一年约 ${fmtBytes(dailyMb * 365)}`} />
					<Stat label="高峰上传带宽" value={`${Math.round(uploadMBps).toLocaleString('en-US')} MB/s`} note={`≈ ${Math.round(uploadMBps * 8).toLocaleString('en-US')} Mb/s`} />
					<Stat label="每天新增元数据" value={fmtBytes(perDay * 0.001)} note="每条约 1 KB" />
				</div>
				<div style={{ background: colors.dark, color: colors.white, borderRadius: 18, padding: '14px 20px', display: 'grid', gap: 8 }}>
					{hints.map(h => <div key={h} style={{ fontSize: 20, lineHeight: 1.4 }}>→ {h}</div>)}
				</div>
			</div>
		</Interactive>
	</DeckFrame>;
}
