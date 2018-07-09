

<template>
        <div class="cart container">
            <div class="row">
                <div class="col s8">
                    <table class="centered">
                        <thead class="grey darken-3">
                            <tr>
                                <th> <label> <input type="checkbox"> <span> </span></label> </th>
                                <th> Select All Items </th>
                                <th> Price </th>
                                <th> Quantity </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="grey darken-3" v-for="(beer, index) in beers" :key="index" >
                                <td> <label> <input type="checkbox"> <span> </span></label> </td>
                                <td class="row" id="details">
                                    <div class="drinkimg col s3 card orange"> 
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>
                                    <h6>{{beer.beername}}</h6>{{beer.amount}} (Php {{beer.price}})</td>
                                <td> Php {{beer.price * beer.quantity}} </td>
                                <td>
                                    <i class="orange-text material-icons" v-on:click="decreaseQuantity(beer.quantity,index)">remove_circle_outline</i>
                                    {{beer.quantity}}
                                    <i class="orange-text material-icons" v-on:click="increaseQuantity(beer.quantity,index)">add_circle_outline</i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col s4 grey darken-3">
                    <div class="section"> <span class="col s5" > SUBTOTAL </span> <span class="col s7 right-align"> Php {{total}} </span> </div>
                    <div class="secion "> 
                        <div class="input-field col s6">
                            <input type="text" id="promocode" class="grey darken-1" placeholder="Enter Promo Code">
                        </div>
                        <div class="voucher section right-align orange-text">Enter Voucher</div>
                    </div>
                    <div class="row"> <a class="col s12 waves-effect orange btn"> Proceed to Checkout</a></div>
                </div>
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