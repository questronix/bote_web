import Vue from 'vue/dist/vue';
import '../../css/dashboardmaincard.css';

let barcard = Vue.component('bar-card',{
    data: function(){
        return{
            modalOpen: false
        }
    },
    props: {
        category: String,
        barname: String,
        bardetails: String,
        img: String
    },
    methods: {
        toggleModal(){
            this.modalOpen = !this.modalOpen;
        },
        toggleModalExit(){
            
                this.modalOpen = false;

        }
    },
    template:
        `
        <div id="barcard">
           <div id='image'> <img :src="img"/>   </div>
           <div id='caption'>
            <span id='name'>{{barname}}</span>

            <a href="#" id="dropdown" v-on:click="toggleModal"><i class="material-icons">more_vert</i></a>
        
            <p>{{bardetails}}</p>
           </div>

           <div v-if="modalOpen" class="dropdownmodal">

           <a href="#" id="closeicon" v-on:click="toggleModalExit"><i  class="material-icons">close</i></a>
           <ul>
             <li> Option 1</li>
             <li> Option 2</li>
             <li> Option 3</li>
           </ul>
             
         </div>
         
        </div>
        `     
        
});

export default barcard;
