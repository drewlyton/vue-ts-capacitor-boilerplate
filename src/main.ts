import { createApp } from 'vue';
import './css/index.css';
import App from './App.vue';
import { IonicVue } from '@ionic/vue';
import router from './router';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
