import Vue from 'vue/dist/vue';
import Dashboard from './Dashboard.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/dashboardmaincard';
import '../../../css/background.css';

import Storage from '../../../lib/Storage';

if (Storage.getKey('access-token')){
  new Vue({
    el: '#dashboard',
    render: h => h(Dashboard)
  })
}else{
  window.location.href = '/';
}