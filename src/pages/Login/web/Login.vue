<template>
  <div id="app" class="flex-container">
    <h1 id=logo_name>LOGIN FORM</h1>
    
    <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
    <div id="id01" class="modal">
        <form @submit.prevent="login" class="modal-content animate">
            <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            </div>
            <br />
            <br />
            <h1 class="bote_name">BOTE</h1>
            <br />         
            
            <input v-model="username" type="text" placeholder="Username or Email Address" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <label>
                <input type="checkbox" checked="unchecked" name="remember" /> Remember me
            </label>
            <button class="login_button" v-on:click="login"> LOG IN </button>
            
            <div class="container" >
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                <span class="psw"> <a href="#"> Forgot password?</a></span>
            </div>
        </form>
    </div>
  </div>
</template>

<script>

import Api from '../../../lib/Api.js';
    
export default{
    data: function(){
        return {
            username: '',
            password:''
        }
    },
    methods: {
        login() {
            Api.post('login/send', {
                username: this.username,
                password: this.password
            })
            .then(data=>{
                if(data.body.status === 1) window.location.href = '/dashboard';
                else alert(data.body.msg);
            })
            .catch(error=>{
                console.log(error);
            });
            console.log(this.username);
            console.log(this.password);
        }
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

<style>
#app {
  align-items: center;
  justify-content: center;
}

.flex-container{
  display: flex;
  flex-direction: column;
}
html{
  background: linear-gradient(#221d42, #5c1c4f);
  background-repeat: no-repeat;
  height: 100%
  
}
#logo_name{
    color:#ff2a60;
    text-align:center;   
}
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius:20px;
}

button {
    background-color: #ff2a60;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius:25px;
    cursor: pointer;
    width: 100%;
}
body{
    font-family: "Montserrat", "sans-serif";
    font-size: 12px;
}
button:hover {
    opacity: 0.8;
}
.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: gray;
}
/* Center the image and position the close button */
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}
.container {
    padding: 10px;
}
.bote_name{
    color:#ff2a60;
    text-align:center;
    font-size:30px;
}



/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding: 30px;
    
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 50%; /* Could be more or less, depending on screen size */
    padding:20px;
    border-radius:20px;
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 30px;
    font-weight: bold;
}
.close:hover,
.close:focus {
    color: 5c1c4f;
    cursor: pointer;
}
.login_button{
    border-radius:10px;
    font-size:15px;
}
.psw{
        float: right;
        padding-top:20px;
    }

/* Add Zoom Animation */
.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)} 
    to {-webkit-transform: scale(1)}
}
    
@keyframes animatezoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: right;
    }
    .cancelbtn {
       width: 100%;
    }
    
}

</style>