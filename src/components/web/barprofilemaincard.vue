

<template>
        <div class="barprofile container">
            <!-- Cover Photo -->
            <div class="row cover_photo">
                <img src="https://i.imgur.com/zt2y9eB.gif">
            </div>
            <div class="header white">
                <div class="section">
                    <h5> {{bardetails.barname}} </h5>
                    {{bardetails.location}} <br/>
                    {{bardetails.openhours}}
                </div>

                <div class="row">
                    <!-- Tabs -->
                    <div class="tabs">
                            <li class="tab">
                                <a class="active" href="#home"> 
                                    <span> Home </span>
                                </a>
                            </li>

                            <li class="tab">
                                <a href="#drinks"> 
                                    <span> All Drinks </span>
                                        </a>
                            </li>
                            
                            <li class="tab">
                                <a href="#photos"> 
                                    <span> Photos  </span>
                                        
                                </a>
                            </li>

                            <li class="tab">
                                <a href="#reviews"> 
                                    <span> Reviews </span>                           
                                </a>
                            </li>
                    </div>              
                </div>
            </div>
                
                <div id="home">
                    <div class="white section">
                        <h5> Featured Drinks </h5>
                        <div class="row">
                            <div class="col s4">
                                <div class="card">
                                    <div class="card-image">
                                    <img src="/static/img/sanmiguel.jpeg">
                                    </div>
                                </div>
                            </div>

                            <div class="col s4">
                                <div class="card">
                                    <div class="card-image">
                                    <img src="/static/img/sanmiguel.jpeg">
                                    </div>
                                </div>
                            </div>

                            <div class="col s4">
                                <div class="card">
                                    <div class="card-image">
                                    <img src="/static/img/sanmiguel.jpeg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>

                <div id="drinks">
                     <div class="section">
                        <ul class="collection">
                            <li v-for="(beer, index) in beers" :key="index" class="collection-item avatar">
                                <img src="/static/img/sanmiguel.jpeg" alt="" class="circle">
                                <span class="title">{{beer.beername}}</span>
                                <p>{{beer.beeramount}} <br>
                                    {{beer.price}}
                                </p>
                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                            </li>
                        </ul>
                                    
                    </div>
                </div>

                <div id="photos">
                    
                </div>

                <div id="reviews">
                    
                </div>
        </div>
</template>

<script>
import Vue from 'vue/dist/vue';
import Api from '../../lib/Api.js';
import '../../css/barprofile.css';

 
let main = Vue.component('main-content', {
    
   data: function(){
        return{
            bardetails: { barname: "Bar ni Gemma", beercount: 20, followers: 250, rating: 4.5, openhours: "12NN-3AM", location: "Makati City"},
            confirmModal: 'close',
            img : 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg',
            beers: [{beername:"beer ", amount: "500mL", price:500.00, quantity:1, img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {beername: "beer 2", amount: "300mL", price:300.00, quantity:1, img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {beername: "beer ni Gemma", amount: "800mL", price:200.00, quantity:1, img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"}]
        }
    }
});

export default main;

</script>