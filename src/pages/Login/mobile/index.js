import Vue from 'vue/dist/vue';
import Login from './Login.vue';

import Api from '../../../lib/Api.js';


new Vue({
  el: '#login',
  render: h => h(Login)
})