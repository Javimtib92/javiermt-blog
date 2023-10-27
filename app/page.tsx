import { ArticlesList } from '@/components/articles-list'

export default async function Home() {
    return (
        <main className="overflow-x-hidden bg-neutral">
            <ArticlesList></ArticlesList>
        </main>
    )
}
