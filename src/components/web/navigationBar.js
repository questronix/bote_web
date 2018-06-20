import Vue from 'vue/dist/vue';
import '../../css/navbar.css';
import searchbar from './searchBar';
import loginbutton from './loginButton.vue';

let navigationBar = Vue.component('nav-bar',{
    
    template:
        `
        <ul class="pages">
            <li style="float:left; color:yellow;"><a href="#home"><strong>BOTE</strong></a></li>            
            <search-bar v-bind:placeholder="Search"> </search-bar>
            <li><login-button> </login-button></li>            
            <li ><a href="#signup">Sign Up</a></li>            
            <li style="border-right: 0.2px solid #2c2828"><a href="#news">News</a></li>            
            <li><a href="#drinks">Drinks</a></li>
            <li><a href="#bars">Bars</a></li>
            <li><a href="#home">Home</a></li>
        </ul>
        `     
});

export default navigationBar;
