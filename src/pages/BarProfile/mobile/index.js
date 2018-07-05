import Vue from 'vue/dist/vue';
import BarProfile from './BarProfile.vue';

import Api from '../../../lib/Api.js';


new Vue({
  el: '#barProfile',
  render: h => h(BarProfile)
})