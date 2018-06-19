import Vue from 'vue/dist/vue';

let navigationBar = Vue.component('nav-bar',{
    
    template:
        `
        <ul class="pages">
            <li style="float:left; color:yellow;"><a href="#home"><strong>BOTE</strong></a></li>            
            <input type="text" placeholder="Search">
            <li><a href="#login">Login</a></li>            
            <li ><a href="#signup">Sign Up</a></li>            
            <li style="border-right: 0.2px solid #2c2828"><a href="#news">News</a></li>            
            <li><a href="#drinks">Drinks</a></li>
            <li><a href="#bars">Bars</a></li>
            <li><a href="#home">Home</a></li>
        </ul>a
        `     
});

export default navigationBar;
