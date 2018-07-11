import Vue from 'vue/dist/vue';
import BarProfile from './BarProfile.vue';
import navigationBar from '../../../components/web/navigationBar';
import main from '../../../components/web/barprofilemaincard.vue';
import '../../../css/background.css';
import { sessionReady } from '../../../lib/Session';

sessionReady(function(){
  new Vue({
    el: '#barprofile',
    render: h => h(BarProfile)
  });
});