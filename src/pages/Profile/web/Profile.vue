<template>
  <div id="profile">
      <nav-bar isLoggedIn> </nav-bar>    
      <profile-nav :isEditting="isEditting" :toggleSave="toggleSave" :edit="edit" :edituser='edituser'  :user='user' :save ="save" > </profile-nav>    
      <feeds :user='user'></feeds>
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
