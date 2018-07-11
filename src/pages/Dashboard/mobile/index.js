import Vue from 'vue/dist/vue';
import Dashboard from './Dashboard.vue';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#dashboard',
    render: h => h(Dashboard)
  });
});