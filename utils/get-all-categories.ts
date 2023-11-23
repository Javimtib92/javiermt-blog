import 'server-only';

import { readdirSync } from 'fs';
import { ARTICLES_PATH } from '../constants';

export function getAllCategories() {
  const files = readdirSync(ARTICLES_PATH, { withFileTypes: true });

  return files.filter((file) => file.isDirectory()).map((file) => file.name);
}
