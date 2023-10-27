'use client';

import dynamic from "next/dynamic";

// TODO: Change to be imported directly on the RSC when they fix the following issue:
// 
export async function MarkdownPage({ slug }: { slug:string }) {
    const Page = await dynamic(() => import(`@/_articles/${slug}.mdx`));

    return (
        <div>
            <Page />
        </div>
    )
}