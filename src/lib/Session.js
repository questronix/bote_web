import Storage from './Storage';
import Api from './Api';

module.exports.sessionReady = (onReady)=>{
  let session = Storage.getKey('access-token');
  if(session){
    Api.get('/profile/me', {
      'x-access-token': session.token,
    }).then(data=>{
      if(data.response.statusCode == 200){
        console.log('USER AUTHORIZED');
        Storage.setKey('user-details', data.body);
      }else if(data.response.statusCode == 401){
        console.log('USER UNAUTHORIZED');
        Storage.deleteKey('access-token');
        Storage.deleteKey('user-details');
        window.location.href = 'login';
        onReady();
      }
    }).catch(error=>{
      console.log('ERROR USER UNAUTHORIZED', error);
      Storage.deleteKey('access-token');
      Storage.deleteKey('user-details');
      window.location.href = 'login';
    });
  }else{
    console.log('USER NOTOKEN');
    Storage.deleteKey('access-token');
    Storage.deleteKey('user-details');
    window.location.href = 'login';
  }
};