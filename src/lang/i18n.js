import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './translation.en';
import translationKo from './translation.ko';

// i18
const resources = {
    en: {
      translation: translationEn
    },
    ko: {
      translation: translationKo
    }
  }

  i18n
    .use(initReactI18next)
    .init({
        resources: resources,

        // 브라우저 언어 정보 가져와서 적용
        // userLanguage 는 IE 인 경우 적용
        lng: `${navigator.language.toLocaleLowerCase().split('-')[0] || navigator.userLanguage.toLocaleLowerCase().split('-')[0]}`,
        debug: true,
        keySeparator: false,
    });

export default i18n;