import Vue from 'vue/dist/vue';
import Dashboard from './Dashboard.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/dashboardmaincard';
import '../../../css/background.css';
 new Vue({
  el: '#dashboard',
  render: h => h(Dashboard)
})