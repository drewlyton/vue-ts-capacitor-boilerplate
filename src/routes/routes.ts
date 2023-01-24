// FOR_PLOP: LayoutImports
import MainLayout from 'layouts/MainLayout.vue';
// FOR_PLOP: PageImports
import HomePage from 'pages/HomePage.vue';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    redirect: () => {
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
  // FOR_PLOP: Pages
];
