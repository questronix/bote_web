import Vue from 'vue/dist/vue';
import Login from './Login.vue';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#login',
    render: h => h(Login)
  });
});