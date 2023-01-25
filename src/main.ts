import { createApp } from 'vue';
// Import CSS for Ionic and Tailwind
import '@ionic/vue/css/core.css';

import 'css/tailwind-base.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/display.css';
import '@ionic/vue/css/padding.css';
import 'css/tailwind-utils.css';

import './css/theme.css';

import App from './App.vue';
import { IonicVue } from '@ionic/vue';
import router from './router';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
