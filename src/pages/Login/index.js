import Vue from 'vue/dist/vue';
import Login from './Login.vue';

import Api from '../../lib/Api';

Api.post('login', {
  username: 'kenster',
  password: 'P@ssw0rd'
}).then(data=>{
  console.log(data);
}).catch(error=>{
  console.log(error);
});

new Vue({
  el: '#login',
  render: h => h(Login)
})