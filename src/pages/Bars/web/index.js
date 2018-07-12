import Vue from 'vue/dist/vue';
import Bars from './Bars.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/barsmaincard.vue';
import '../../../css/background.css';
import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  let session  = Storage.getKey('access-token');

  Api.get('/cart', {
    'x-access-token': session.token
  })
  .then(data=>{
    console.log(JSON.parse(data.body));
  })
  .catch(error=>{
    console.log("aaa");
  });

  new Vue({
    el: '#bars',
    render: h => h(Bars)
  });
});