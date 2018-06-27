import Vue from 'vue/dist/vue';
import '../../css/dashboardmaincard.css';

let barcard = Vue.component('bar-card',{
    props: {
        category: String,
        barname: String,
        bardetails: String,
        img: String
    },
    template:
        `
        <div id="barcard">
           <div id='image'> <img :src="img"/>   </div>
           <div id='caption'>
            <span id='name'>{{barname}}</span>
            <a href="#" id="dropdown"><i class="material-icons">more_vert</i></a>
            <p>{{bardetails}}</p>
           </div>

           

        </div>
        `     
        
});

export default barcard;
