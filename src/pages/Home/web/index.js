import Vue from 'vue/dist/vue';
import App from './App.vue';
import button from '../../../components/button';
import navigationBar from '../../../components/navigationBar';
import '../../../css/background.css';
 new Vue({
  el: '#app',
  render: h => h(App)
})