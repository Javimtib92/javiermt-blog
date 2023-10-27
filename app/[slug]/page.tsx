import { MarkdownPage } from '@/components/markdown-page';
import { getAllArticles } from '@/utils/get-all-articles'

export async function generateStaticParams() {
    return getAllArticles()
}

export default async function ArticlePage({
    params,
}: {
    params: { slug: string; }
}) {
    const { slug } = params

    return (
        <div>
            <MarkdownPage slug={slug}/>
        </div>
    )
}
