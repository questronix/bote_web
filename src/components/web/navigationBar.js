import Vue from 'vue/dist/vue';
import '../../css/navbar.css';
import searchbar from './searchBar';
import loginbutton from './loginButton.vue';
import logout from './logoutButton';

let navigationBar = Vue.component('nav-bar',{
    props: {
        isLoggedIn: Boolean
    },
    template:
        `
        <div class="navigation">
            <img src="https://i.imgur.com/LIjxAK3.png">
            <search-bar placeholder="Search"> </search-bar>
            <div class="pages">
                <a href="dashboard"><strong>Home</strong></a>                
                <a href="bars"><strong>Bars</strong></a>
                <a href="shelf"><strong>Shelf</strong></a>
                <a href="cart" style="border-right: 0.2px solid #2c2828"><strong>Cart</strong></a>
                <a v-if="isLoggedIn === false" href="signup" ><strong>Sign Up</strong></a>
                <a v-if="isLoggedIn === false"><strong><login-button> </login-button></strong></a>

                <a href="profile/me" v-if="isLoggedIn === true"> <strong>Profile</strong></a>

                <a v-if="isLoggedIn === true" style="padding:0; padding-right:10px"> <strong><logout-button> </logout-button> </strong></a>
            </div>
        </div>
        `     
        
});

export default navigationBar;
