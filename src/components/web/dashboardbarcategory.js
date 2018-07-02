import Vue from 'vue/dist/vue';
import '../../css/dashboardmaincard.css';
import barcard from './dashboardbarcard';

let barcategory = Vue.component('bar-category',{
    props: {
        category: String,
        bars: Array
    },
    template:
        `
        <div id="categorycard">
           <h2 id="categoryname"> {{category}} </h2>
           <div class="bars">
            <bar-card v-for="(bar, index) in bars" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
           </div>

           <a href="#" id="next"><i class="material-icons">arrow_forward</i></a>
        </div>
        `     
        
});

export default barcategory;
