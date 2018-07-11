import Vue from 'vue/dist/vue';
import Settings from './Settings.vue';
import Storage from '../../../lib/Storage';

if (Storage.getKey('access-token')){
  new Vue({
    el: '#settings',
    render: h => h(Settings)
  })
}else{
  window.location.href = 'login';
}