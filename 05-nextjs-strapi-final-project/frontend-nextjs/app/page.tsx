import { getArticles } from '@/lib/strapi';
import { ArticleList } from '@/components/organisms/articleList';

export default async function HomePage() {
  const articles = await getArticles();

  return (
    <main className="container mx-auto p-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Artikel Terbaru</h1>
      <ArticleList articles={articles} />
    </main>
  );
}