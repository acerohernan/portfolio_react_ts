export async function fetchLocale(
  locale: string
): Promise<Record<string, string> | null> {
  /* const response = await fetch(`/locales/${locale}.json`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } */
  const json = await require(`./languages/${locale}.json`);

  if (json) return json;

  return null;
}
export function getLocaleFromLocalStorage(locale: string) {}
