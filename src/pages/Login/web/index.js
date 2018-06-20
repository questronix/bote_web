import Vue from 'vue/dist/vue';
import Router from 'vue-router/dist/vue-router';
import Login from './Login.vue';
import navigationBar from '../../../components/web/navigationBar';
import '../../../css/background.css';

Vue.use(Router)

new Vue({
  el: '#login',
  render: h => h(Login)
})
