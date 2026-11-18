import type { Language } from './dictionary';

export function formatDate(value: string | Date | undefined, lang: Language): string {
  if (!value) return '';

  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';

  return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
