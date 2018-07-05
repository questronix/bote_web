import Vue from 'vue/dist/vue';
import Login from './Login.vue';
import Storage from '../../../lib/Storage';
import '../../../css/login.css';
import '../../../css/background.css';
import navigationBar from '../../../components/web/navigationBar';

if(Storage.getKey('access-token')){
    window.location.href = '/mobile/dashboard';
}else {
    new Vue ({
    el: '#login',
    render: h => h(Login)

        
    });
}

