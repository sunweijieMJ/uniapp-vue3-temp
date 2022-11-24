import { createSSRApp } from 'vue';
import App from './App.vue';
import dayjs from './plugin/dayjs';
import i18n from './plugin/i18n';
import store from './store';

export function createApp() {
  const app = createSSRApp(App);

  app.use(i18n);
  app.use(dayjs);
  app.use(store);

  return {
    app,
  };
}
