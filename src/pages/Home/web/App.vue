<template>
  <div id="index">
    
    <nav-bar :isLoggedIn="isLoggedIn"> </nav-bar>
    <div id="bote_landing"></div>
    
    <div class="card_container">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="https://i.imgur.com/Q0dvQJ6.png">
        </div>
        <div class="card-content">
          <span class="card-title activator"> Share a Bottle<i class="material-icons right">more_vert</i></span>
          
        </div>
        <div class="card-reveal">
          <span class="card-title">Share a Bottle<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="https://i.imgur.com/W3m051Q.png">
        </div>
        
        <div class="card-content">
          <span class="card-title activator">Find Cheapest Drink<i class="material-icons right">more_vert</i></span>          
        </div>
        <div class="card-reveal">
          <span class="card-title">Find Cheapest Drink<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>


      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="https://i.imgur.com/T6MjN0k.png">
        </div>
        
        <div class="card-content">
          <span class="card-title activator">Invite Friends<i class="material-icons right">more_vert</i></span>          
        </div>
        <div class="card-reveal">
          <span class="card-title">Invite Friends<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
      

    
    </div>
    <div id="bote_landing"></div>
    
    

     <footer class="page-footer">
          <div class="container">
            <div class="logo">
                
            </div>
            <div class="row">
              
              <div class="col l6 s12">

                <img src="https://i.imgur.com/LIjxAK3.png">
                <p>First beer sharing application</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Follow Us</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2018 Copyright Questronix Corporation
            
            </div>
          </div>
        </footer>
    
    
  </div>
</template>

<script>
import Storage from '../../../lib/Storage';
  export default{
    mounted(){
        this.checkIfLoggedIn();
    },
    data: function(){
                return {
                    username: '',
                    password:'',
                    isLoggedIn: false
                }
        },
        methods: {
            checkIfLoggedIn(){
                if(Storage.getKey('access-token')){
                    this.isLoggedIn = true;
                }else{
                    this.isLoggedIn = false;
                }
                console.log(this.isLoggedIn);
            }
        }
  }
</script>
