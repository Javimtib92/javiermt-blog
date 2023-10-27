export function removeMdxExtension(filename: string) {
    return filename.replace(/\.mdx?$/, '')
}
