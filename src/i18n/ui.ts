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

export const getLocaleTranslation = (currentLocale: string | undefined) => {
  return currentLocale && currentLocale === 'es' ? es : en;
};
