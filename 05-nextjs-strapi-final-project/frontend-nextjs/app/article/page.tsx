import { getArticleBySlug } from '@/lib/strapi';
import { Button } from '@/components/atoms/Button';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ArticleDetail({ params }: Props) {
    const resolvedParams = await params;
    const article = await getArticleBySlug(resolvedParams.slug);

    // Jika artikel tidak ditemukan, tampilkan 404
    if (!article) {
        return notFound();
    }

    return (
        <main className="container mx-auto p-8 max-w-3xl">
            <Button label="← Kembali" href="/" />
            <span className="block mt-6 text-sm font-bold text-purple-600">
                {article.category}
            </span>
            <h1 className="text-4xl font-bold mt-2 mb-6">{article.title}</h1>
            <p className="text-gray-700 leading-relaxed">{article.content}</p>
        </main>
    );
}