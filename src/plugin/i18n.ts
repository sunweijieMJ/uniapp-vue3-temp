import { createI18n } from 'vue-i18n';
import enLocale from '@/locale/en-US.json';
import zhLocale from '@/locale/zh-CN.json';
import storage from '@/utils/storage';

const messages = {
  'zh-CN': {
    name: 'zh-CN',
    ...zhLocale,
  },
  'en-US': {
    name: 'en-US',
    ...enLocale,
  },
};

// 使用本地化语言
const curLanguage = storage.get('curLanguage');
const i18n = createI18n({
  legacy: false,
  locale: curLanguage,
  messages,
});

export default i18n;
