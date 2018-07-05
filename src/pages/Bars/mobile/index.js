import Vue from 'vue/dist/vue';
import Bars from './Bars.vue';

import Api from '../../../lib/Api.js';


new Vue({
  el: '#bars',
  render: h => h(Bars)
})