import Vue from 'vue/dist/vue';
import Inbox from './Inbox.vue';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#inbox',
    render: h => h(Inbox)
  });
});