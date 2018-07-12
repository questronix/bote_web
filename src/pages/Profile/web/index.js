import Vue from 'vue/dist/vue';
import Profile from './Profile.vue';
import navigationBar from '../../../components/web/navigationBar';
import profileNavigationBarComponent from '../../../components/web/profileNavigationBar';
import coverPhoto from '../../../components/web/coverPhoto';
import '../../../css/background.css';
import '../../../css/profile.css';
// import feed from '../../../components/web/feed';


import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#profile',
    render: h => h(Profile)
  });
});