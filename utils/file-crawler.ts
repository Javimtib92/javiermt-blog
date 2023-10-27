import { readdirSync } from 'fs'
import { join } from 'path'

export function* fileCrawler(dir: string, path: string[] = []): Generator<{ path: string[]; fileName: string }> {
    const files = readdirSync(dir, { withFileTypes: true })
    for (const file of files) {
        if (file.isDirectory()) {
            yield* fileCrawler(join(dir, file.name), [...path, file.name])
        } else {
            yield { path, fileName: file.name }
        }
    }
}