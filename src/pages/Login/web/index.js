import Vue from 'vue/dist/vue';
import Router from 'vue-router/dist/vue-router';
import Login from './Login.vue';

Vue.use(Router)

new Vue({
  el: '#login',
  render: h => h(Login)
})

// export default new Router({

// })