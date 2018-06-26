import Vue from 'vue/dist/vue';
import Profile from './Profile.vue';
import navigationBar from '../../../components/web/navigationBar';
import profileNavigationBar from '../../../components/web/profileNavigationBar';
import userInfo from '../../../components/web/profileUserInfoCard';
import coverPhoto from '../../../components/web/coverPhoto';
import '../../../css/background.css';
import picture from './bottlecap.png';

 new Vue({
  el: '#profile',
  render: h => h(Profile)
})