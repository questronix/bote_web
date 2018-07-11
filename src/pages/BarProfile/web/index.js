import Vue from 'vue/dist/vue';
import BarProfile from './BarProfile.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/barprofilemaincard.vue';
import '../../../css/background.css';
import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api';


if (Storage.getKey('access-token')){
  new Vue({
    el: '#barprofile',
    render: h => h(BarProfile)
  })
}else{
  window.location.href = 'login';
}