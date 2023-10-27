import matter from 'gray-matter'
import { join } from 'path'

export function getParsedFileContentByPath(postsPath: string) {
    const { data, content } = matter.read(postsPath)

    return {
        frontMatter: data,
        content,
    }
}

export function getParsedFileContentBySlug(fileName: string, postsPath: string) {
    const { data, content } = matter.read(join(postsPath, `${fileName}.mdx`))

    return {
        frontMatter: data,
        content,
    }
}