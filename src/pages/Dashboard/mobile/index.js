import Vue from 'vue/dist/vue';
import Dashboard from './Dashboard.vue';
import Api from '../../../lib/Api.js';

new Vue({
  el: '#dashboard',
  render: h => h(Dashboard)
})
