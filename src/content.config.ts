import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const material = defineCollection({
	// Load Markdown and MDX files in the `src/content/material/` directory.
	loader: glob({ base: './src/content/material', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		vocabulary: z.record(z.string(), z.string()).optional()
	}),
});

export const collections = { material };
