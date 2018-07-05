import Vue from 'vue/dist/vue';
import Cart from './CartWindow.vue';
import Api from '../../../lib/Api.js';

new Vue({
  el: '#cart',
  render: h => h(Cart)
})
