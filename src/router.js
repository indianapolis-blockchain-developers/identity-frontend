import Vue from 'vue';
import Router from 'vue-router';

import AppHeader from '@/layout/AppHeader.vue';
import AuthHeader from '@/layout/AuthHeader.vue';
import AppFooter from '@/layout/AppFooter.vue';
// import AuthFooter from '@/layout/AuthFooter.vue';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Roadmap from '@/views/Roadmap.vue';
import Features from '@/views/Features.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';

import Profile from '@/views/Profile.vue';
import Settings from '@/views/Settings.vue';
import Relationships from '@/views/Relationships.vue';
import Credentials from '@/views/Credentials.vue';
import Messages from '@/views/Messages.vue';

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
      path: '/roadmap',
      name: 'roadmap',
      components: {
        header: AppHeader,
        default: Roadmap,
        footer: AppFooter
      }
    },
    {
      path: '/features',
      name: 'features',
      components: {
        header: AppHeader,
        default: Features,
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
        header: AuthHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: '/settings',
      name: 'settings',
      components: {
        header: AuthHeader,
        default: Settings,
        footer: AppFooter
      }
    },
    {
      path: '/relationships',
      name: 'relationships',
      components: {
        header: AuthHeader,
        default: Relationships,
        footer: AppFooter
      }
    },
    {
      path: '/credentials',
      name: 'credentials',
      components: {
        header: AuthHeader,
        default: Credentials,
        footer: AppFooter
      }
    },
    {
      path: '/messages',
      name: 'messages',
      components: {
        header: AuthHeader,
        default: Messages,
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
