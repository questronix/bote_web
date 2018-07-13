import Vue from 'vue/dist/vue';
import Login from './Login.vue';
import { sessionReady } from '../../../lib/Session';
import storage from '../../../lib/Storage';

if(storage.getKey('access-token')){
  window.location.href='dashboard';
}else{
  new Vue({
    el: '#login',
    render: h => h(Login)
  });
}