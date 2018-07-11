import Vue from 'vue/dist/vue';
import Shelf from './Shelf.vue';
import navigationBar from '../../../components/web/navigationBar';
import shelf from '../../../components/web/shelfmaincard.vue';
import '../../../css/background.css';

import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#shelf',
    render: h => h(Shelf)
  });
});