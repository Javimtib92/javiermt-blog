import { CSS_PATH } from '@/constants';
import fs from 'fs';

export function getAccentBaseValue() {
  // Read the file synchronously
  const fileContent = fs.readFileSync(CSS_PATH, 'utf8');

  // Find the line containing --color-accent-base and extract its value
  const match = fileContent.match(/--color-accent-base:\s*([^;]+)/);
  const accentBaseValue = match ? match[1].trim() : null;

  return accentBaseValue;
}
