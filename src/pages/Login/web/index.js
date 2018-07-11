import Vue from 'vue/dist/vue';
import Login from './Login.vue';
import '../../../css/login.css';
import '../../../css/background.css';
import navigationBar from '../../../components/web/navigationBar';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#login',
    render: h => h(Login)
  });
});