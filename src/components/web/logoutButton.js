import Api from '../../lib/Api.js';
import Vue from 'vue/dist/vue';

let loginbutton = Vue.component('logout-button', {
    template: `<a v-on:click="logout">Log Out</a>`,
    methods: {
      logout: function(){
        Api.post('logout', {
        }).then(data=>{
          console.log(data);
          window.location.href = '/';
        }).catch(error=>{
          console.log(error);
        });
      }
    }
  }
);
export default loginbutton;