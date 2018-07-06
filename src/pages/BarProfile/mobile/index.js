import Vue from 'vue/dist/vue';
import BarProfile from './BarProfile.vue';
import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api.js';

if (Storage.getKey('access-token')){
  new Vue({
    el: '#barProfile',
    render: h => h(BarProfile)
  })
}else{
  window.location.href = 'login';
}