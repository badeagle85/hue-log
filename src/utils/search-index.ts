import { getCollection } from 'astro:content';

export async function generateSearchIndex() {
  const posts = await getCollection('blog');

  const searchIndex = posts
    .filter(post => !post.data.draft)
    .map(post => ({
      id: post.id,
      title: post.data.title,
      description: post.data.description,
      content: post.body.slice(0, 500), // First 500 characters of content
      tags: post.data.tags || [],
      category: post.data.category || '',
      date: post.data.createdAt,
      url: `/hue-log/blog/${post.id}/`,
    }));

  return searchIndex;
}