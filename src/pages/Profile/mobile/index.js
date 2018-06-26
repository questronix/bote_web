import Vue from 'vue/dist/vue';
import Profile from './Profile.vue';

import Api from '../../../lib/Api.js';


new Vue({
  el: '#profile',
  render: h => h(Profile)
})