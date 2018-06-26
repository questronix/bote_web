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
        <div class="navigation">
            <a href="Home" classs="bote_logo"><strong>BOTE</strong></a>
            <search-bar placeholder="Search"> </search-bar>
            <div class="pages">
                <a href="home"><strong>Home</strong></a>                
                <a href="bars"><strong>Bars</strong></a>
                <a href="drinks"><strong>Drinks</strong></a>
                <a href="news" style="border-right: 0.2px solid #2c2828"><strong>News</strong></a>
                <a v-if="isLoggedIn === false" href="signup" ><strong>Sign Up</strong></a>
                <a v-if="isLoggedIn === false"><strong><login-button> </login-button></strong></a>
                <a v-else="isLoggedIn === true" style="padding:0; padding-right:10px"> <strong><logout-button> </logout-button> </strong></a>
            </div>
        </div>
        `     
        
});

export default navigationBar;
