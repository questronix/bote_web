import Vue from 'vue/dist/vue';
import Profile from './Profile.vue';
import navigationBar from '../../../components/web/navigationBar';
import profileNavigationBar from '../../../components/web/profileNavigationBar';
import '../../../css/background.css';
 new Vue({
  el: '#profile',
  render: h => h(Profile)
})