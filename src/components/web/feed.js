import Vue from 'vue/dist/vue';
import '../../css/feeds.css';

let feed = Vue.component('feeds', {
    data: () => {
      return {
        user_icon: "http://webiconspng.com/wp-content/uploads/2016/11/avatar_business_costume_male_man_office_user_icon_403022.png"
      };
    },
    props:{
      user: Object
      
    },
    template: 
    `
    <div class="post">
      <img :src="user_icon" class="user_icon">
      <span id="name">{{user.name}}</span>
      <span id="username">{{user.username}}</span>
      <span>henlo, this is a trial post</span>
    </div>
    
    `
    
  }
);
export default feed;