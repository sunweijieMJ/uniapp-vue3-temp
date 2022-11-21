import { createSSRApp } from 'vue';
import App from './App.vue';
import i18n from './plugin/i18n';
import store from './store';

export function createApp() {
  const app = createSSRApp(App);
  app.use(i18n);
  app.use(store);

  return {
    app,
  };
}
