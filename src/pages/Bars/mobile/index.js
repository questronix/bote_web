import Vue from 'vue/dist/vue';
import Bars from './Bars.vue';
import Storage from '../../../lib/Storage'
import Api from '../../../lib/Api.js';

if (Storage.getKey('access-token')){
  new Vue({
    el: '#bars',
    render: h => h(Bars)
  })
}else{
  window.location.href = 'login';
}