import Vue from 'vue/dist/vue';
import Settings from './Settings.vue';

import Api from '../../../lib/Api.js';

new Vue({
  el: '#settings',
  render: h => h(Settings)
})