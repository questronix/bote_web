<template>
    <div class="bars container"> 
        <div class="header row">
            <a class="btn-large circular waves-effect waves-light prefix" ><i class="material-icons">filter_list</i></a>

            <h3 id="title">BARS</h3>
        </div>
        
        <div class="grey darken-3 section">

                        <div class="row">
                            <div class="col s6 m4" v-for="(bar, index) in bars" :key="index">
                                    <div class="card">
                                            <div class="card-image waves-effect waves-block waves-light">
                                                    <img src="/static/img/barimage.jpg">
                                            </div>
                                            <div class="card-content">
                                                <span class="card-title activator grey-text text-darken-4">{{bar.barname}}</span>
                                                <p><a href="#">This is a link</a></p>
                                            </div>
                                            <div class="card-reveal">
                                                <span class="card-title grey-text text-darken-4">Visit Bar Profile<i class="material-icons right">close</i></span>
                                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                            </div>
                                    </div>
                            </div>
                        </div>
        </div>
           <!-- <a href="#" id="filter" ><i class="material-icons">filter_list</i></a>
            <h1>BARS</h1>
                
            <div class="maincontent">
                <div id="barcards">
                <bar- card v-for="(bar, index) in bars" :key="index" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
                <bar-card v-for="(bar, index) in bars" :key="index" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
                <bar-card v-for="(bar, index) in bars" :key="index" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
                <bar-card v-for="(bar, index) in bars" :key="index" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
                </div>
                <div id="loadmore" v-if="loadmore === false">
                    <a href="#"><button v-on:click="toggleLoadMore">LOAD MORE</button> </a>
                </div>
                <div v-else>
                    <div id="barcards">
                    <bar-card v-for="(bar, index) in bars" :key="index" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
                    <bar-card v-for="(bar, index) in bars" :key="index" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
                    <bar-card v-for="(bar, index) in bars" :key="index" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
                    <bar-card v-for="(bar, index) in bars" :key="index" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
                    </div>
                    <div id="loadmore">
                        <a href="#"><button v-on:click="toggleLoadMore">SHOW LESS</button> </a>
                    </div>
                </div>
            </div>
            -->
    </div>
</template>

<script>
import Vue from 'vue/dist/vue';
import '../../css/barsmaincard.css';

let main = Vue.component('main-content',{
    data: function(){
        return{
            loadmore: false,
            img : 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg',
            bars: [{barname:"Bar Ni Jemma W0w", bardetails: "mura d2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname: "Bar 2", bardetails: "try mo 2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname: "Barz", bardetails: "bar ito ni gemma", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname: "Barz", bardetails: "bar ito ni gemma", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname: "Bar 2", bardetails: "try mo 2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname: "Barz", bardetails: "bar ito ni gemma", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname: "Barz", bardetails: "bar ito ni gemma", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname: "Barz", bardetails: "bar ito ni gemma", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname:"Bar Ni Jemma W0w", bardetails: "mura d2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"}]
        }
    },
    methods: {
        toggleLoadMore(){
            this.loadmore = !this.loadmore;
        }
    }
        
});

export default main;
</script>