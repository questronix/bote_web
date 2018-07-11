import Vue from 'vue/dist/vue';
import Cart from './CartWindow.vue';
import { sessionReady } from '../../../lib/Session';
import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api';

sessionReady(function(){
  let session = Storage.getKey('access-token');

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