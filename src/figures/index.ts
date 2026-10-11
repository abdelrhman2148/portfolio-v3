import Fig1SelfHealing from './Fig1SelfHealing.astro';
import Fig2Timeline from './Fig2Timeline.astro';
import Fig3Bedrock from './Fig3Bedrock.astro';
import Fig4Pipeline from './Fig4Pipeline.astro';

export const figures = {
  'self-healing': Fig1SelfHealing,
  timeline: Fig2Timeline,
  bedrock: Fig3Bedrock,
  pipeline: Fig4Pipeline,
} as const;

export type FigureKey = keyof typeof figures;
