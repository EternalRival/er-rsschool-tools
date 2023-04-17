import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '../pages/NotFound.vue';

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', component: NotFound },
    { path: '/xcheck-calc', name: 'xcheck-calc', component: () => import('../pages/XCheckCalc.vue') },
    { path: '/deploy-finder', name: 'deploy-finder', component: () => import('../pages/DeployFinder.vue') },
  ],
});
