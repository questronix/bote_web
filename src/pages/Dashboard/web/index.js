import Vue from 'vue/dist/vue';
import Dashboard from './Dashboard.vue';
import button from '../../../components/button';
import navigationBar from '../../../components/navigationBar';
import '../../../css/background.css';
 new Vue({
  el: '#dashboard',
  render: h => h(Dashboard)
})