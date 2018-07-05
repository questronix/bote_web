<template>
        <div id="beercard">
           <div id='image'> <img :src="img"/>   </div>
           <div id='caption'>
            <span id='name'>{{beername}}</span>

            
            <div id="quantity">
                <a href="#" id="quantityicon" v-on:click="decreaseQuantity"><i class="material-icons">remove_circle_outline</i></a>
                {{quantity}}
                <a href="#" id="quantityicon" v-on:click="increaseQuantity"><i class="material-icons">add_circle_outline</i></a>
                            
            </div>
             
         </div>
         
        </div>
</template>
        
<script>
import Vue from 'vue/dist/vue';
import '../../css/beercard.css';

let beercard = Vue.component('beer-card',{
    data: function(){
        return{
            modalOpen: false
        }
    },
    props: {
        category: String,
        beername: String,
        img: String,
        quantity: Number
    },
    methods: {
        increaseQuantity(){
            this.quantity++;
        },
        decreaseQuantity(){
            if(this.quantity > 0) this.quantity--;
            
        }
    }
});

export default beercard;
</script>