import Vue from 'vue/dist/vue';
import '../../css/profileuserinfocard.css';

let userInfo = Vue.component('user-info', {
  data: () => {
    return {
      name: 'MhizSx Jhemerlyn',
      username: '@jh3m3rlYn',
      address: 'Makati City',
      email: 'sw33tjhemerlyn16@gmail.com',
      nameEdit: '',
      usernameEdit: '',
      addressEdit: '',
      emailEdit: ''
    };
  },
  props: {
    isEditting: Boolean,
    save: Boolean,
    user: Object,
    edituser: Object,
    saveEdit: Function
  },
  template: `
    <div class="userinfo">
        
        <ul>
            
            <li> <div id="name"> 
                    <span v-if="isEditting === false"> {{user.name}} </span>
                    <input v-else="isEditting === true" type="text" :placeholder="name" v-model="edituser.nameEdit">
                    
                </div> </li>

            <li> <div id="username">
                    <span v-if="isEditting === false"> {{user.username}} </span>
                    <input v-else="isEditting === true" type="text" :placeholder="username" v-model="edituser.usernameEdit">
                </div></li>

            <li> <div id="address">
                    <span v-if="isEditting === false"> {{user.address}} </span>
                    <input v-else="isEditting === true" type="text" :placeholder="address" v-model="edituser.addressEdit">
                 </div></li>

            <li> <div id="email">
                        <span v-if="isEditting === false"> {{user.email}} </span>
                        <input v-else="isEditting === true" type="text" :placeholder="email" v-model="edituser.emailEdit">
                 </div> </li> 
        </ul>
    </div>
   `

});

export default userInfo;