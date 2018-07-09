import Vue from 'vue/dist/vue';
import Profile from './Profile.vue';
import navigationBar from '../../../components/web/navigationBar';
import profileNavigationBarComponent from '../../../components/web/profileNavigationBar';
import coverPhoto from '../../../components/web/coverPhoto';
import '../../../css/background.css';
import '../../../css/profile.css';
import feed from '../../../components/web/feed';


import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api';


if (Storage.getKey('access-token')){
  new Vue({
    el: '#profile',
    render: h => h(Profile)
  })
}else{
  window.location.href = 'login';
}