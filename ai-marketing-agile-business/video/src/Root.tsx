import React from 'react';
import {Composition} from 'remotion';
import {AutomationPromo, Cover} from './composition';

export const FPS = 30;
export const DURATION = 48 * FPS;

export const Root: React.FC = () => (
  <>
    <Composition id="AiMarketingAutomationPromo" component={AutomationPromo} width={1080} height={1920} fps={FPS} durationInFrames={DURATION} />
    <Composition id="AiMarketingAutomationCover" component={Cover} width={1080} height={1350} fps={FPS} durationInFrames={1} />
  </>
);
