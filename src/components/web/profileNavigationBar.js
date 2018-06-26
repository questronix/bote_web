import Vue from 'vue/dist/vue';
import '../../css/profilenavbar.css';

let profileNavigationBar = Vue.component('profile-nav', {
  data: () => {
    return {
      bars: 10,
      beers: 230,
      followers: 456,
      following: 349
    };
  },
  template: `
    <div class="profilenav">
        
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