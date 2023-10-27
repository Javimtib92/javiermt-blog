import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export function* fileCrawler(
  dir: string,
  path: string[] = []
): Generator<{
  path: string[];
  fileName: string;
  createdAt: Date;
  modifiedAt: Date;
}> {
  const files = readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* fileCrawler(join(dir, file.name), [...path, file.name]);
    } else {
      const stat = statSync(join(dir, file.name));

      yield {
        path,
        fileName: file.name,
        createdAt: stat.ctime,
        modifiedAt: stat.mtime,
      };
    }
  }
}
