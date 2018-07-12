import Vue from 'vue/dist/vue';
import Cart from './Cart.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/cartmaincard.vue';
import '../../../css/background.css';

import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#cart',
    render: h => h(Cart)
  });
});