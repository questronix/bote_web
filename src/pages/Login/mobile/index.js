import Vue from 'vue/dist/vue';
import Login from './Login.vue';
import Api from '../../../lib/Api.js';
import Storage from '../../../lib/Storage';


if(Storage.getKey('access-token')){
  window.location.href = '/mobile/dashboard';
}else{
  new Vue({
    el: '#login',
    render: h => h(Login)
  });
}