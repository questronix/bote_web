import Vue from 'vue/dist/vue';
import Cart from './CartWindow.vue';
import Api from '../../../lib/Api.js';

import Storage from '../../../lib/Storage';

if (Storage.getKey('access-token')){
  new Vue({
    el: '#cart',
    render: h => h(Cart)
  })
}else {
  window.location.href = 'login';
}