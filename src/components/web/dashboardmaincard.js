import Vue from 'vue/dist/vue';
import '../../css/dashboardmaincard.css';
import barcategory from './dashboardbarcategory';

let main = Vue.component('main-content',{
    data: function(){
        return{
            img : 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg'
        }
    },
    template:
        `
        <div class="main">
           <bar-category category='Top Rated Bars' :bars='[{barname:"Bar ", bardetails: "mura d2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                                                           {barname: "Bar 2", bardetails: "try mo 2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                                                           {barname: "Bar ni Gemma", bardetails: "bar ito ni gemma", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"}]'>
          </bar-category>
           <bar-category category='Nearest Bars' :bars='[{barname:"Bar Rat", bardetails: "mura d2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                                                         {barname: "Bar 2", bardetails: "try mo 2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                                                         {barname: "Bar ni Gemma", bardetails: "bar ito ni gemma"}]'>
                                                         
                                                         
          </bar-category>
           <bar-category category='Cheapest Bars' :bars='[{barname:"Bar Rat", bardetails: "mura d2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                                                          {barname: "Bar 2", bardetails: "try mo 2", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"},
                                                          {barname: "Bar ni Gemma", bardetails: "bar ito ni gemma", img:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/uws-bar-es.w710.h473.jpg"}]'> </bar-category>
            
          
        </div>
        `     
        
});

export default main;
