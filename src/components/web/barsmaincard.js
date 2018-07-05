import Vue from 'vue/dist/vue';
import '../../css/barsmaincard.css';
import barcard from './barcard';
let main = Vue.component('main-content',{
    data: function(){
        return{
            loadmore: false,
            img : 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg',
            bars: [{barname:"Bar ", bardetails: "mura d2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname: "Bar 2", bardetails: "try mo 2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                   {barname: "Bar ni Gemma", bardetails: "bar ito ni gemma", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"}]
        }
    },
    methods: {
        toggleLoadMore(){
            this.loadmore = !this.loadmore;
        }
    }, 
    template:
        `
        <div class="bars"> 
            <a href="#" id="filter" ><i class="material-icons">filter_list</i></a>
            <h1>BARS</h1>
                
            <div class="maincontent">
                <div id="barcards">
                <bar-card v-for="(bar, index) in bars" :key="index" :barname="bar.barname" :bardetails="bar.bardetails" :img="bar.img"> </bar-card>
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
        </div>
        `     
        
});

export default main;
