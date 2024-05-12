// Importa las utilidades de `astro:content`
import { z, defineCollection, reference } from 'astro:content';

// Define un `type` y un `schema` para cada colección
const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    englishTitle: z.string().optional(),
    type: z.enum(['project', 'sector']),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.date(),
    web: z.string().optional(),
    images: z.string().optional(),
    videoUrl: z.string().optional(),
    type: reference('categories'),
    sector: reference('categories'),
    inProgress: z.boolean(),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.date(),
    images: z.array(z.string()).optional(),
    imageUrls: z.string().optional(),
    videoUrl: z.string().optional(),
    project: z.string(),
  }),
});

// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
  categories: categoriesCollection,
  projects: projectsCollection,
  posts: postsCollection,
};
