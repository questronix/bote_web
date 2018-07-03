import Vue from 'vue/dist/vue';
import Shelf from './Shelf.vue';
import navigationBar from '../../../components/web/navigationBar';
import shelf from '../../../components/web/shelfmaincard.vue';
import '../../../css/background.css';

 new Vue({
  el: '#shelf',
  render: h => h(Shelf)
})