import Vue from 'vue/dist/vue';
import Profile from './Profile.vue';

import Api from '../../../lib/Api.js';
import Storage from '../../../lib/Storage';

if (Storage.getKey('access-token')){
  new Vue({
    el: '#profile',
    render: h => h(Profile)
  })
}else{
  window.location.href = 'login';
}