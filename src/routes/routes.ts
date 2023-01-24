import MainLayout from 'layouts/MainLayout.vue';
import HomePage from 'pages/HomePage.vue';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    redirect: () => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { name: 'Home' };
    },
    children: [
      {
        name: 'Home',
        path: '',
        component: HomePage,
      },
    ],
  },
];
