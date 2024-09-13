import { z, defineCollection } from 'astro:content';

const allContent = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['draft', 'done']),
    creationDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    description:  z.string().optional(),
  }),
});

export const collections = {
  all: allContent
};