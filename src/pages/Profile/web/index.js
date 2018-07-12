import Vue from 'vue/dist/vue';
import Profile from './Profile.vue';
import navigationBar from '../../../components/web/navigationBar';
import profileNavigationBarComponent from '../../../components/web/profileNavigationBar';
import coverPhoto from '../../../components/web/coverPhoto';
import '../../../css/background.css';
import '../../../css/profile.css';

import { sessionReady } from '../../../lib/Session';
import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api';

sessionReady(function(){
  let session = Storage.getKey('access-token');
  
  Api.get(`/profile/me`, {
    'x-access-token': session.token,
  })
  .then(data=>{
    console.log(JSON.parse(data.body));
  })
  .catch(error=>{
    console.log(error);
  })

  new Vue({
    el: '#profile',
    render: h => h(Profile)
  })
});