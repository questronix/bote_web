import Vue from 'vue/dist/vue';
import '../../css/navbar.css';
import searchbar from './searchBar';
import loginbutton from './loginButton.vue';
import logoutbutton from './logoutButton';

let navigationBar = Vue.component('nav-bar',{
    props: {
        isLoggedIn: Boolean
    },
    template:
        `
        <ul class="pages">
            <li style="float:left; color:yellow;"><a href="#home"><strong>BOTE</strong></a></li>            
            <search-bar placeholder="Search"> </search-bar>
            <li v-if="isLoggedIn === false"> <login-button> </login-button></li>
            <li v-else="isLoggedIn === true"> <logout-button> </logout-button></li>         
            <li v-if="isLoggedIn === false"><a href="#signup">Sign Up</a></li>            
            <li style="border-right: 0.2px solid #2c2828"><a href="#news">News</a></li>            
            <li><a href="#drinks">Drinks</a></li>
            <li><a href="#bars">Bars</a></li>
            <li><a href="#home">Home</a></li>
        </ul>  
        `     
});

export default navigationBar;
