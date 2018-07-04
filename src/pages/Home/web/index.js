import Vue from 'vue/dist/vue';
import App from './App.vue';
import navigationBar from '../../../components/web/navigationBar';
import footer from '../../../components/web/footer.vue';
import infocard from '../../../components/web/homeinfocard.vue';
import '../../../css/background.css';
import '../../../css/index.css';

 new Vue({
  el: '#app',
  render: h => h(App)
})