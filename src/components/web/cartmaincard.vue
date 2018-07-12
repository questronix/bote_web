

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
                                <th> Subtotal </th>
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
                                    <h6>{{beer.brand_name}}</h6>(Php {{beer.amount}})</td>
                                <td> Php {{beer.amount}} </td>
                                <td>
                                    <i class="orange-text material-icons" v-on:click="decreaseQuantity(beer.qty,index)">remove_circle_outline</i>
                                    {{beer.qty}}
                                    <i class="orange-text material-icons" v-on:click="increaseQuantity(beer.qty,index)">add_circle_outline</i>
                                </td>
                                <td> Php {{beer.amount * beer.qty}} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col s4 grey darken-3">
                    <div class="section"> <span class="col s5" > TOTAL </span> <span class="col s7 right-align"> Php {{total}} </span> </div>
                    <div class="secion "> 
                        <div class="input-field col s6">
                            <input type="text" id="promocode" class="grey darken-1" placeholder="Enter Promo Code">
                        </div>
                        <div class="voucher section right-align orange-text">Enter Voucher</div>
                    </div>

                    <!-- Confirm Modal Trigger -->
                    <div class="row"> <a class="col s12 waves-effect orange btn modal-trigger" href="#confirm"> Proceed to Checkout</a></div>

                    <!-- Confirm Modal Structure -->
                    <div id="confirm" class="grey darken-3 modal">
                        <div class="modal-content">
                        <h4 class="orange-text center-align">Choose Bill Payment</h4>
                        

                            <div class="row">
                                <div class="col s3">
                                <div class="card">
                                    <div class="card-image">
                                    <img src="/static/img/paymaya.jpg">
                                    </div>
                                </div>
                                </div>

                                <div class="col s3">
                                <div class="card">
                                    <div class="card-image">
                                    <img src="/static/img/paymaya.jpg">
                                    </div>
                                </div>
                                </div>

                                

                                <div class="col s3">
                                <div class="card">
                                    <div class="card-image">
                                    <img src="/static/img/paymaya.jpg">
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat orange-text">Next</a>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
import Vue from 'vue/dist/vue';
import Api from '../../lib/Api.js';
import '../../css/cart.css';
import Storage from '../../lib/Storage';
import { sessionReady } from '../../lib/Session';
 
let main = Vue.component('main-content', {
    mounted(){
        this.viewCart();
    },
   data: function(){
        return{
            confirmModal: 'close',
            total: 1000.00,
            img : 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg',
            beers: {}
        }
    },
    methods: {
        increaseQuantity(qty,key){
            qty++;
           this.beers[key].qty = qty;
           this.updateTotal(this.total+this.beers[key].amount);
        },
        decreaseQuantity(qty,key){
            if(qty > 0){qty--;
            this.beers[key].qty = qty;
            this.updateTotal(this.total-this.beers[key].amount);
            }
        },
        updateTotal(updated){
            this.total = updated;
        },
        toggleModal(){
            if(this.confirmModal === 'close'){
                console.log('close');
            }
        },
        viewCart() {
        let session = Storage.getKey('access-token');
           Api.get('/cart',{
               'x-access-token': session.token
            }).then(data=>{    
                console.log(JSON.parse(data.body));
                let beers = JSON.parse(data.body);
            
                this.beers = beers.data;
            }).catch(error=>{
                console.log(error);
            });
        }
    }
});

export default main;

</script>