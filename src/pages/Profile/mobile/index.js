import Vue from 'vue/dist/vue';
import Profile from './Profile.vue';

import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#profile',
    render: h => h(Profile)
  });
});