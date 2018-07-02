import Vue from 'vue/dist/vue';
import Login from './Login.vue';

import Api from '../../../lib/Api.js';
import '../../../css/styles.scss';

new Vue({
  el: '#login',
  render: h => h(Login)
})