import es from './data/es.json';
import en from './data/en.json';

export const languages = {
  es: {
    code: 'es',
    name: 'Español',
    flag: 'flags/es-flag',
  },
  en: {
    code: 'en',
    name: 'English',
    flag: 'flags/uk-flag',
  },
};

export const defaultLang = 'es';

/**
 * Devuelve el objeto de traducción basado en la configuración regional actual.
 * Si la configuración regional actual es 'es', devuelve el objeto de traducción para el español.
 * Si la configuración regional actual es 'en' o cualquier otro valor, devuelve el objeto de traducción para el inglés.
 * @param currentLocale La cadena de configuración regional actual.
 * @returns El objeto de traducción para la configuración regional actual.
 */
export const getLocaleTranslation = (currentLocale: string | undefined) => {
  return currentLocale && currentLocale === 'es' ? es : en;
};
