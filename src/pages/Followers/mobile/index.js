import Vue from 'vue/dist/vue';
import Followers from './Followers.vue';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#followers',
    render: h => h(Followers)
  });
});