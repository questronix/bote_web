<template>
  <div class="profile">
    <div class="container">
      <nav-bar isLoggedIn> </nav-bar>   
      
      <div class="cover_photo">
      <img src="https://i.imgur.com/zt2y9eB.gif">
      </div>

  
      <div class="navigation_container">
        <profile-nav :isEditting="isEditting" :toggleSave="toggleSave" :edit="edit" :edituser='edituser'  :user='user' :save ="save" > </profile-nav>    
      </div>
      
      
      
    </div>
  </div>
</template>

<script>
  import './index.js';
  import Api from '../../../lib/Api';
  import Storage from '../../../lib/Storage';
  export default{
    mounted(){
      this.viewUserInfo();
      // this.editInit();
    },
  
    data: function() {
      return{
        user: {
         
        },
        post_feeds:[
          {username: 'Kenster', post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`, img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster1', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster12', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster123', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster1234', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster12345', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster123456', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster1234567', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster12345678', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster123456789', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
          {username: 'Kenster1234567890', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
        ],
        edituser: {
          fnameEdit: '',
          lnameEdit: '',
          usernameEdit: '',
          addressEdit: '',
          emailEdit: ''
        },
        isEditting: false,
        save: false        
      }
    },
    methods: {
      edit() {
        this.isEditting = !this.isEditting;
        this.save = false;
      },
      toggleSave(){
        this.save = true;
        this.isEditting = false;
        this.saveEdit();
      },
      // editInit(){
      //     this.edituser.fnameEdit = this.user.fn;
      //     this.edituser.lnameEdit = this.user.ln;
      //     this.edituser.usernameEdit = this.user.username;
      //     this.edituser.addressEdit = this.user.address;
      //     this.edituser.emailEdit = this.user.email
      // },
      saveEdit(){
        console.log(`Hello` + this.edituser.lnameEdit);
        this.user.user.fn = this.edituser.fnameEdit;
        this.user.user.ln = this.edituser.lnameEdit;
        this.user.user.username = this.edituser.usernameEdit;
        this.user.user.address = this.edituser.addressEdit;
        this.user.user.email= this.edituser.emailEdit;
      },
      viewUserInfo(){
        let session = Storage.getKey('access-token');
        Api.get(`/profile/me`, {                        
                'x-access-token': session.token,                
        })
        .then(data=>{
                let user=JSON.parse(data.body);
                console.log(JSON.parse(data.body));
                
                this.user=(user);
                console.log(this.user.user);
                
        })
        .catch(error=>{
                console.log(error);
        })
      }
    }
  }  

    
</script>
