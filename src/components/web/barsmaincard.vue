<template>
    <div class="bars container"> 
        <div class="header row">
            <a class="btn-large circular waves-effect waves-light prefix" ><i class="material-icons">filter_list</i></a>

            <h3 id="title">BARS</h3>
        </div>
        
        <div class="grey darken-3 section">

            <div class="row">
                <div class="col s3 m4" v-for="(bar, index) in bars" :key="index">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                    <img src="/static/img/barimage.jpg">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">{{bar.name}}</span>
                                <p><a :href="'/bars/'+bar.name">Bar Profile</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Bar Details<i class="material-icons right">close</i></span>
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
import Storage from '../../lib/Storage';
import Api from '../../lib/Api.js';


let main = Vue.component('main-content',{
    mounted(){
        this.viewBars();
    },
    data: function(){
        return{
            loadmore: false,
            img : 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg',
            bars: {}
        }
    },
    methods: {
        toggleLoadMore(){
            this.loadmore = !this.loadmore;
        },
        viewBars() {
            console.log("AAAAAAAAAAAAAAAAAURL" +window.location.href.split('?')[1]);
                let session = Storage.getKey('access-token');
                   Api.get('/bars?'+(window.location.href).split('?')[1],{
                       'x-access-token': session.token
                    }).then(data=>{
                        this.bars = data.body;
                        console.log(data.body)
                    }).catch(error=>{
                        console.log(error);
                    });
            }
    }
        
});

export default main;
</script>