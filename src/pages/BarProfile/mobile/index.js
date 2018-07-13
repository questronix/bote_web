import Vue from 'vue/dist/vue';
import BarProfile from './BarProfile.vue';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#barProfile',
    render: h => h(BarProfile)
  });
});