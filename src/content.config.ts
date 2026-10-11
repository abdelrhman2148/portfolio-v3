import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/work' }),
  schema: z.object({
    id: z.string(),
    sector: z.string(),
    redact: z.enum(['Client', 'Account']).optional(),
    title: z.string(),
    summary: z.string(),
    did: z.string(),
    resultStrong: z.string(),
    resultRest: z.string().optional(),
    stack: z.array(z.string()),
    figure: z.enum(['self-healing', 'timeline', 'bedrock', 'pipeline']),
    figCaption: z.string(),
    steps: z.array(z.string()).min(1),
    constraints: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

export const collections = { work };
