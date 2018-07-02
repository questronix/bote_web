import Vue from 'vue/dist/vue';
import Bars from './Bars.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/barsmaincard';
import '../../../css/background.css';
 new Vue({
  el: '#bars',
  render: h => h(Bars)
})