import Vue from 'vue/dist/vue';
import Api from '../../../lib/Api.js';
import Cart from './Cart.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/cartmaincard.vue';
import '../../../css/background.css';

import Storage from '../../../lib/Storage';


if (Storage.getKey('access-token')){
  new Vue({
    el: '#cart',
    render: h => h(Cart)
  })
}else{
  window.location.href = 'login';
}

