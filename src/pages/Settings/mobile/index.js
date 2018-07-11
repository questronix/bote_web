import Vue from 'vue/dist/vue';
import Settings from './Settings.vue';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#settings',
    render: h => h(Settings)
  });
});