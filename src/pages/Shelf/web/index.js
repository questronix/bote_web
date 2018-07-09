import Vue from 'vue/dist/vue';
import Shelf from './Shelf.vue';
import navigationBar from '../../../components/web/navigationBar';
import shelf from '../../../components/web/shelfmaincard.vue';
import '../../../css/background.css';
import Storage from '../../../lib/Storage';
import Api from '../../../lib/Api';


let session = Storage.getKey('access-token');
if(session){
  Api.get('/profile/me', {
    'x-access-token': session.token,
  }).then(data=>{
    if(data.response.statusCode == 200){
      Storage.setKey('user-details', data.body);
    }
  }).catch(error=>{
    console.log(error);
  });

  new Vue({
    el: '#shelf',
    render: h => h(Shelf)
  });
}else{
  window.location.href = 'login';
}
