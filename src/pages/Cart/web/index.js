import Vue from 'vue/dist/vue';
import Cart from './Cart.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/cartmaincard.vue';
import '../../../css/background.css';

import { sessionReady } from '../../../lib/Session';
import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api';

sessionReady(function(){
  let session = Storage.getKey('access-token'); //returns {msg: ..., token: ...}

  /*Api call to web server http://localhost:PORT/cart (GET)
  * its core counterpart is http://locahost:CORE_PORT/users/me/cart
  * a. subsequent requests must contain the header 'x-access-token'
  * b. parse the data obtained since they are stringified
  */
  Api.get('/cart', {
    'x-access-token': session.token,
  })
  .then(data=>{
    console.log(JSON.parse(data.body));
  })
  .catch(error=>{
    console.log(error);
  })

  new Vue({
    el: '#cart',
    render: h => h(Cart)
  })
});
