import { createRouter, createWebHistory } from '@ionic/vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
