import Vue from 'vue/dist/vue';
import Notification from './Notification.vue';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#notification',
    render: h => h(Notification)
  });
});