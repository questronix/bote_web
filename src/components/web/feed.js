import Vue from 'vue/dist/vue';
import '../../css/feeds.css';

let feed = Vue.component('feeds', {
    data: () => {
      return {
        user_icon: "https://avatars3.githubusercontent.com/u/5698765?s=460&v=4 "
      };
    },
    props:{
      user: Object
      
    },
    template: 
    `
      <div class="col s12 m8 offset-m2 l6 offset-l3" v-for="(post_feed,index) in post_feeds" :key="index">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            
            <div class="col s2">
              <img src="post_feed.img" alt="" class="circle responsive-img"> 
            </div>
          
            <div class="col s11">
              <span id="feed_name">{{post_feed.username}}</span>
              <br/>
              <span class="black-text">
                {{post_feed.post}}
              </span>
            </div>
          </div>
        </div>
      </div>
      


        
    
    `
    
  }
);
export default feed;