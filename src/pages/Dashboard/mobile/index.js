import Vue from 'vue/dist/vue';
import Dashboard from './Dashboard.vue';

import Api from '../../../lib/Api';
import Storage from '../../../lib/Storage';

let session = Storage.getKey('access-token');
if(session){
  Api.get('/profile/me', {
    'x-access-token': session.token,
  }).then(data=>{
    if(data.response.statusCode == 200){
      Storage.setKey('user-details', data.body);
    }
  }).catch(error=>{
    console.log(error);
  });

  new Vue({
    el: '#dashboard',
    render: h => h(Dashboard)
  });
}else{
  window.location.href = 'login';
}
