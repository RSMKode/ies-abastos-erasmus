// Importa las utilidades de `astro:content`
import { z, defineCollection, reference } from 'astro:content';

// Define un `type` y un `schema` para cada colección
const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    type: z.enum(['project', 'tag']),
  }),
});
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.date(),
    images: z.string().optional(),
    videoUrl: z.string().optional(),
    type: reference('categories'),
    tag: reference('categories'),
  }),
});

// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
  categories: categoriesCollection,
  projects: projectsCollection,
};
