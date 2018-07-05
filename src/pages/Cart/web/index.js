import Vue from 'vue/dist/vue';
import Api from '../../../lib/Api.js';
import Cart from './Cart.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/cartmaincard.vue';
import '../../../css/background.css';

let index = new Vue({
  el: '#cart',
  render: h => h(Cart),
  data: function(){
    return{
      isLoggedIn: true
    }
  }
})

export default index;