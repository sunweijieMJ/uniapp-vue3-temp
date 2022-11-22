import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import { App } from 'vue';
import storage from '@/utils/storage';
import 'dayjs/locale/zh-cn';

// 使用插件
dayjs.extend(RelativeTime);

// 使用本地化语言
const curLanguage = storage.get('curLanguage');
dayjs.locale(curLanguage);

export default {
  install: (app: App<Element>) => {
    app.config.globalProperties.$dayjs = dayjs;
  },
};
