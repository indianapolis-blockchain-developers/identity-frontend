import Vue from 'vue';

import App from './App.vue';
import Argon from './plugins/argon-kit';
import router from './router';
import store from './store';
import './registerServiceWorker';

import './assets/sass/index.sass';

Vue.use(Argon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
