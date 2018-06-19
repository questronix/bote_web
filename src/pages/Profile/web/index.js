import Vue from 'vue/dist/vue';
import Profile from './Profile.vue';
import button from '../../../components/button';
import navigationBar from '../../../components/navigationBar';
import '../../../css/background.css';
 new Vue({
  el: '#profile',
  render: h => h(Profile)
})