import Vue from 'vue/dist/vue';
import Cart from './CartWindow.vue';

import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#cart',
    render: h => h(Cart)
  });
});