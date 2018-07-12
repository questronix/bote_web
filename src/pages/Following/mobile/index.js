import Vue from 'vue/dist/vue';
import Following from './Following.vue';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#following',
    render: h => h(Following)
  });
});