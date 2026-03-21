import { defineCollection, z } from 'astro:content';

const gigs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string(),
    venue: z.string(),
    youtube_id: z.string().optional(),
    setlist: z.array(z.string()).optional(),
    notes: z.string().optional(),
    contributor: z.string().optional(),
    source: z.string().optional(),
  }),
});

const discography = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    date: z.string(),
    label: z.string().optional(),
    tracks: z.array(z.string()).optional(),
    streaming_url: z.string().optional(),
    description: z.string().optional(),
  }),
});

const media = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    media_type: z.string(),
    outlet: z.string(),
    url: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { gigs, discography, media };
