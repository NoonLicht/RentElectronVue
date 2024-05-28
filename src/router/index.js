import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/pages/indexpage/IndexPage.vue';
import MapPage from '@/pages/mappage/MapPage.vue';
import LoginPage from '@/pages/loginpage/LoginPage.vue';
import ProfilePage from '@/pages/profilepage/ProfilePage.vue';
import EstatePage from '@/pages/estatepage/EstatePage.vue';

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  },
  {
    path: '/map',
    name: 'Map',
    component: MapPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/estate',
    name: 'Estate',
    component: EstatePage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
