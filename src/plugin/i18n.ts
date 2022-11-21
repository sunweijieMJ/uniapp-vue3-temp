import { createI18n } from 'vue-i18n';
import enLocale from '@/locale/en-US.json';
import zhLocale from '@/locale/zh-CN.json';

const messages = {
  en: {
    name: 'en',
    ...enLocale,
  },
  'zh-CN': {
    name: 'zh-CN',
    ...zhLocale,
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
});

export default i18n;
