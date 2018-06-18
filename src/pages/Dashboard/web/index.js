import Vue from 'vue/dist/vue';
import Dashboard from './Dashboard.vue';
import button from '../../../components/button';

 new Vue({
  el: '#dashboard',
  render: h => h(Dashboard)
})