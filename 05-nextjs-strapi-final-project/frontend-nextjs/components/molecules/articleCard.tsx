import Link from 'next/link';

export function ArticleCard({ title, category, slug }: { title: string; category: string; slug: string }) {
    return (
        <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
            <span className="text-sm font-bold text-purple-600">{category}</span>
            <h2 className="text-xl font-semibold my-2">{title}</h2>
            <Link href={`/articles/${slug}`} className="text-blue-500 hover:underline">
                Baca selenkapnya &rarr;
            </Link>
        </div>
    );
}