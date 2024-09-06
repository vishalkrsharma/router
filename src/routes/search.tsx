import { createFileRoute } from '@tanstack/react-router';

type ItemFilters = {
  query: string;
  hasDiscount: boolean;
  categories: Category[];
};

type Category = 'electronics' | 'clothing' | 'books' | 'toys';

export const Route = createFileRoute('/search')({
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    return {
      query: search.query as string,
      hasDiscount: search.hasDiscount === 'true',
      categories: (search.categories as string).split(',') as Category[],
    };
  },
  component: Search,
});

function Search() {
  const { query, hasDiscount, categories } = Route.useSearch();

  return (
    <div>
      <h1>Search</h1>
      <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
    </div>
  );
}
