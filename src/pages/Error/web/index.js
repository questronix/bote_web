import Vue from 'vue/dist/vue';
import Error from './Error.vue';
import navigationBar from '../../../components/web/navigationBar';
import '../../../css/background.css';

new Vue({
  el: '#error',
  render: h => h(Error)
})
