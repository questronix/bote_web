import Vue from 'vue/dist/vue';
import '../../css/profilenavbar.css';

let profileNavigationBar = Vue.component('profile-nav', {
  data: () => {
    return {
      bars: 10,
      beers: 230,
      followers: 456,
      following: 349,
      avatar: "https://materiell.com/wp-content/uploads/2015/03/doug_full1.png",
      

    };
  },
  template: `
    <div class="profilenav">
        <img class="avatar" :src="avatar"/>
        
        <ul>
            <li> <span id="image"> IMAGE </span> </li>
            <li> <div id="navitem">
                    <a href="#"> 
                        Bars <br/> 
                            <span> {{bars}} </span>
                    </a> </div> </li>

            <li> <div id="navitem">
                    <a href="#"> Beers <br/> <span> {{beers}} </span>
                    </a></div></li>

            <li> <div id="navitem">
                    <a href="#"> Followers <br/> 
                    <span> {{followers}} </span>
                    </a></div></li>
            <li> <div id="navitem">
                    <a href="#"> Following <br/>
                        <span> {{following}} </span>
                    </a> </div> </li> 
            <li> <button id="editprofile"> Edit Profile</button></li>
        </ul>
    </div>
   `

});

export default profileNavigationBar;