import Vue from 'vue/dist/vue';
import Bars from './Bars.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/barsmaincard';
import '../../../css/background.css';
import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api';


if (Storage.getKey('access-token')){
  new Vue({
    el: '#bars',
    render: h => h(Bars)
  })
}else{
  window.location.href = 'login';
}