

<template>
        <div class="barprofile container">
            <div class="cover_photo">
                <img src="https://i.imgur.com/zt2y9eB.gif">
            </div>
            <div class="header white">
                <div class="section">
                    <h5> {{bardetails.name}} </h5>
                    {{bardetails.address}} <br/>
                    {{bardetails.opening}} - {{bardetails.closing}}<br/>
                    {{bardetails.days}}
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
                
                <div id="home" class="white section">
                    <div class="container">
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
                                
                                <a class="btn orange white-text secondary-content">ADD TO CART</a>
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
import Storage from '../../lib/Storage';

 
let main = Vue.component('main-content', {
    mounted(){
        this.viewSpecificBar();
    },
    data: function(){
        return{
            bardetails: { barname: "Bar ni Gemma", beercount: 20, followers: 250, rating: 4.5, openhours: "12NN-3AM", location: "Makati City"},
            confirmModal: 'close',
            img : 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg',
            beers: {}
        }
    },
    methods: {
        viewSpecificBar(){
            let session = Storage.getKey('access-token');
            Api.get(window.location.pathname,{
                'x-access-token': session.token
            }).then(data=>{    
                console.log(data.body.items);
                this.bardetails = data.body;
                this.beers = data.body.items;
            }).catch(error=>{
                console.log(error);
            });
        }
    }
});

export default main;

</script>