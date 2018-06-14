import Vue from 'vue/dist/vue';
import Dashboard from './Dashboard.vue';
import Api from '../../../lib/Api.js';

Api.post('logout', {
}).then(data=>{
  console.log(data);
}).catch(error=>{
  console.log(error);
});

new Vue({
  el: '#dashboard',
  render: h => h(Dashboard)
})
