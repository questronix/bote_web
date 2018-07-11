import Vue from 'vue/dist/vue';
import Bars from './Bars.vue';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#bars',
    render: h => h(Bars)
  });
});