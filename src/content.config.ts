import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			// 글 숨기기 기능
			draft: z.boolean().default(false),
			// 카테고리와 태그
			category: z.string().optional(),
			tags: z.array(z.string()).default([]),
			// 읽기 시간
			readingTime: z.string().optional(),
			// 작성자 (익명 블로그용)
			author: z.string().default('유상훈'),
		}),
});

// 짧은 메모나 단상을 위한 컬렉션
const notes = defineCollection({
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string().optional(),
		date: z.coerce.date(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
	}),
});

// 일일 메모를 위한 컬렉션
const daily = defineCollection({
	loader: glob({ base: './src/content/daily', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		date: z.coerce.date(),
		mood: z.string().optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog, notes, daily };
