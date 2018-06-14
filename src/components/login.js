import Vue from 'vue/dist/vue';

let login = Vue.component('login', {
  data: () => {
    return {
      username: '',
      password:'',
      credentials:{'user':'pass'}
    };
  },
  methods: {
    addCredential: function(username, password){
        if(!(this.credentials.hasOwnProperty(username))){
            this.credentials[username] = password;
            console.log(this.credentials);
        }else{
        alert(`Credentials of ${username} already exist`);
        }
    },
    validateCredential: function(username, password){
        //wrong credentials or nonexistent username, prompt error
        if(!(this.credentials.hasOwnProperty(username))){
          alert(`Wrong credentials`);
        }else if(this.credentials[username] !== password){
          alert(`Wrong password`);
        }else{
          alert(`${username} has successfully logged in`);
        }
    }
  },
  template: `
    <div>
    <input v-model="username" type="text" placeholder="Username"/></br>
    <input v-model="password" type="password" placeholder="Password"/> </br>
    <button v-on:click="validateCredential(username,password)"> Log In </button>
    </div>
    `
});

export default login;