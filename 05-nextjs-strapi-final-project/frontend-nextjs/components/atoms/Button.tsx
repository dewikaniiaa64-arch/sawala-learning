import Link from 'next/link';

export function Button({ label, href }: { label: string; href?: string }) {
    const className = "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition";
    if (href) return <Link href={href} className={className}>{label}</Link>;
    return <button className={className}>{label}</button>;
}