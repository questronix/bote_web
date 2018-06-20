import Vue from 'vue/dist/vue';
import '../css/searchbar.css';

let searchBar = Vue.component('search-bar',{
    
    template:
        `
        <div id="searchContainer">
            <a href="#"><i id="searchicon" class="material-icons"> search </i></a>
            <form id="search">
                
                <input type="text" placeholder="Search"/>

            </form>
        </div>
    `     
});

export default searchBar;
