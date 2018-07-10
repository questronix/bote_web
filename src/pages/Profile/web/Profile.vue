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
      
      
      <div class="col s12 m8 offset-m2 l6 offset-l3" v-for="(post_feed,index) in post_feeds" :key="index">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            
            <div class="col s2">
              <img :src="post_feed.img" alt="" class="circle responsive-img"> 
            </div>
          
            <div class="col s11">
              <span id="feed_name">{{post_feed.username}}</span>
              <br/>
              <span class="black-text">
                {{post_feed.post}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
  
      
    data: function() {
      return{
        user: {
         name: 'MhizSx Jhemerlyn',
         username: '@jh3m3rlYn',
         address: 'Makati City',
         email: 'sw33tjhemerlyn16@gmail.com',
         
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
          nameEdit: 'MhizSx Jhemerlyn',
          usernameEdit: '@jh3m3rlYn',
          addressEdit: 'Makati City',
          emailEdit: 'sw33tjhemerlyn16@gmail.com'
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
      saveEdit(){
        this.user.name = this.edituser.nameEdit;
        this.user.username = this.edituser.usernameEdit;
        this.user.address = this.edituser.addressEdit;
        this.user.email= this.edituser.emailEdit;
      }
    }
  }  

    
</script>
