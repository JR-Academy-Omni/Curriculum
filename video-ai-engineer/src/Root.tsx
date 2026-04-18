import React from 'react';
import { Composition } from 'remotion';
import { ShortVideo } from './ShortVideo';
import { FPS, WIDTH, HEIGHT, scenes, COVER_DURATION } from './data/scenes';

const TOTAL = COVER_DURATION + scenes.reduce((s, x) => s + x.durationInFrames, 0);

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="ShortVideo"
				component={ShortVideo}
				durationInFrames={TOTAL}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
			/>
		</>
	);
};
