import Vue from 'vue';
import Router from 'vue-router';
import AppHeader from '@/layout/AppHeader.vue';
import AppFooter from '@/layout/AppFooter.vue';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/settings',
      name: 'settings',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/relationships',
      name: 'relationships',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/credentials',
      name: 'credentials',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/messages',
      name: 'messages',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '*', // TODO: catch all 404 page
      name: '404',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
