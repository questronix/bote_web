import Vue from 'vue/dist/vue';
import Api from '../../../lib/Api.js';
import Cart from './Cart.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/cartmaincard.vue';
import '../../../css/background.css';

import { sessionReady } from '../../../lib/Session';
import Storage from '../../../lib/Storage';

sessionReady(function(){
  let session = Storage.getKey('access-token'); //returns {msg: ..., token: ...}
  let user = Storage.getKey('user-details'); //returns {status: ..., user: { ... }}

  /*Api call to web server http://localhost:PORT/cart (GET)
  * its core counterpart is http://locahost:CORE_PORT/users/:username/cart
  * a. subsequent requests must contain the header 'x-access-token'
  * b. since this Api call is get, it can't contain a body
  * instead, 'username' was added to the headers
  * c. parse the data obtained since they are stringified
  */
  Api.get('/cart', {
    'x-access-token': session.token,
    'username': user.user.username
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