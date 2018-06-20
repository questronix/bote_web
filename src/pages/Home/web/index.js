import Vue from 'vue/dist/vue';
import App from './App.vue';
import navigationBar from '../../../components/web/navigationBar';
import '../../../css/background.css';
 new Vue({
  el: '#app',
  render: h => h(App)
})