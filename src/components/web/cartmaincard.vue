

<template>
    <div class="cart">
        <div class="drinkslist">
            <div id="header">
               <div>
                    <input type="checkbox">
                    <span> Select all items </span>
               </div>
               <span> Price </span>
               <span> Quantity </span>
                
            </div>

            <div id="drink" v-for="(beer, index) in beers" :key="index">
                <div id="firstrow">
                    <input type="checkbox">
                    <div id="drinkimage">
                    </div>
                    <div id="info">
                        <div> {{beer.beername}} </div>
                        <div> {{beer.amount}} </div>
                    </div>
                </div>
                <div> 
                    Php {{beer.price}} </div>
                <div id="quantity"> 
                    <a href="#" id="quantityicon" v-on:click="decreaseQuantity(beer.quantity,index)"><i class="material-icons">remove_circle_outline</i></a>
                    {{beer.quantity}}
                    <a href="#" id="quantityicon" v-on:click="increaseQuantity(beer.quantity,index)"><i class="material-icons">add_circle_outline</i></a></div>
            </div>
        </div>
        <div id="summary">
            <span> Total: {{total}} </span>
        </div>
            
    </div>
</template>

<script>
import Vue from 'vue/dist/vue';
import Api from '../../lib/Api.js';
import '../../css/cart.css'

let main = Vue.component('main-content', {
   data: function(){
        return{
            loadmore: false,
            total: 1000.00,
            img : 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg',
            beers: [{beername:"beer ", amount: "500mL", price:500.00, quantity:1, img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {beername: "beer 2", amount: "300mL", price:300.00, quantity:1, img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {beername: "beer ni Gemma", amount: "800mL", price:200.00, quantity:1, img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"}]
        }
    },
    methods: {
        increaseQuantity(quantity,key){
            quantity++;
           this.beers[key].quantity = quantity;
           this.updateTotal(this.total+this.beers[key].price);
        },
        decreaseQuantity(quantity,key){
            if(quantity > 0){quantity--;
            this.beers[key].quantity = quantity;
            this.updateTotal(this.total-this.beers[key].price);
            }
        },
        updateTotal(updated){
            this.total = updated;
        }
    }
});

export default main;

</script>