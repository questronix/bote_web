<template>
  <div class="profile">
    <div class="container">
      <nav-bar isLoggedIn> </nav-bar>   
      <div class="cover_photo">
      <img src="https://i.imgur.com/zt2y9eB.gif">
      </div>

  <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s3"><a href="#test1">Test 1</a></li>
        <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
        <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
        <li class="tab col s3"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
    <div id="test1" class="col s12">Test 1</div>
    <div id="test2" class="col s12">Test 2</div>
    <div id="test3" class="col s12">Test 3</div>
    <div id="test4" class="col s12">Test 4</div>
  </div>
      <div class="navigation_container">
        <profile-nav :isEditting="isEditting" :toggleSave="toggleSave" :edit="edit" :edituser='edituser'  :user='user' :save ="save" > </profile-nav>    
      </div>
      
      
      <feeds :user='user'></feeds>
    </div>
  </div>
</template>

<script>
  import 'materialize-css';

  export default{
    mounted(){
      let el = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(el,{});
      console.log(instance);
    },
    data: function() {
      return{
        user: {
         name: 'MhizSx Jhemerlyn',
         username: '@jh3m3rlYn',
         address: 'Makati City',
         email: 'sw33tjhemerlyn16@gmail.com' 
        },
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
