import Vue from 'vue/dist/vue';
import '../css/searchbar.css';

let searchBar = Vue.component('search-bar',{
    
    template:
        `
        <input type="text" placeholder="Search" id="search"/>
        `     
});

export default searchBar;
