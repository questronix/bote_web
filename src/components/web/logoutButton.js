import Api from '../../lib/Api.js';
import Vue from 'vue/dist/vue';
import Storage from '../../lib/Storage';

let logout = Vue.component('logout-button', {
    template: `<a v-on:click="logout" href="javascript:void(0)">Log Out</a>`,
    methods: {
      logout: function(){
          Storage.deleteKey('access-token');
          Storage.deleteKey('user-details');
          window.location.href = '/login';        
      }
    }
  }
);
export default logout;