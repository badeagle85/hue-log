import type { APIRoute } from 'astro';
import { generateSearchIndex } from '../utils/search-index';

export const GET: APIRoute = async () => {
  const searchIndex = await generateSearchIndex();

  return new Response(JSON.stringify(searchIndex), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};