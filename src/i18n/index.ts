import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import testEn from './en/test.json';
import testZh from './zh/test.json';
import privacyTermsEn from './en/privacyTerms.json';
import privacyTermsZh from './zh/privacyTerms.json';
import commonEn from './en/common.json';
import commonZh from './zh/common.json';

export const defaultNS = 'test'; // default namespace
export const resources = {
  en: {
    test: testEn, // namespace
    common: commonEn,
    privacyTerms: privacyTermsEn,
  },
  zh: {
    test: testZh,
    common: commonZh,
    privacyTerms: privacyTermsZh,
  },
} as const;

export const initI18nConfig = (language = 'en') => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      compatibilityJSON: 'v3',
      // the translations
      resources,
      ns: ['test', 'privacyTerms'], // namespace
      // defaultNS: 'test', // defaults namespace
      lng: language, // if you're using a language detector, do not define the lng option
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
};
