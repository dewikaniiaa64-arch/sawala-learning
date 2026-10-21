import { ArticleCard } from '../molecules/articleCard';

export function ArticleList({ articles }: { articles: any[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    title={article.title}
                    category={article.category}
                    slug={article.slug}
                />
            ))}
        </div>
    );
}