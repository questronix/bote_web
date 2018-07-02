import Vue from 'vue/dist/vue';
import '../../css/profilenavbar.css';

let profileNavigationBar = Vue.component('profile-nav', {
  data: () => {
    return {
        bars: 10,
        beers: 230,
        followers: 456,
        following: 349,
        avatar: "https://materiell.com/wp-content/uploads/2015/03/doug_full1.png"       

    };
  },
  props: {
        isEditting: Boolean,
        save: Boolean,
        user: Object,
        edituser: Object,
        saveEdit: Function,
        edit: Function,
        toggleSave: Function,
        isEditting: Boolean
    },
  template: `
        <div class="profile_all">
                <div class="profilenav">
                        <img :src="avatar" class="avatar"/>

                        <ul>
                        
                                <li id="name"> 
                                        
                                        <span v-if="isEditting === false"> {{user.name}} </span>
                                        <input v-else="isEditting === true" type="text" :placeholder="user.name" v-model="edituser.nameEdit">        
                                </li>
                                <br/>
                                <li>    
                                        <i class="material-icons"> fingerprint </i>                                    
                                        <span v-if="isEditting === false"> {{user.username}} </span>
                                        <input v-else="isEditting === true" type="text" :placeholder="user.username" v-model="edituser.usernameEdit">
                                </li>

                                <li>
                                        <i class="material-icons"> room </i>
                                        <span v-if="isEditting === false"> {{user.address}} </span>
                                        <input v-else="isEditting === true" type="text" :placeholder="user.address" v-model="edituser.addressEdit">
                                </li>

                                <li>
                                        <i class="material-icons"> email </i>
                                        <span v-if="isEditting === false"> {{user.email}} </span>
                                        <input v-else="isEditting === true" type="text" :placeholder="user.email" v-model="edituser.emailEdit">
                                </li> 
                        </ul>
                        
                        <a href="#"> 
                                <span> {{bars}} </span>        
                                Bars 
                        </a>

                
                        <a href="#"> 
                                <span> {{beers}} </span>
                                Beers 
                        </a>

                
                        <a href="#"> 
                                <span> {{followers}} </span>
                                Followers 
                        
                        </a>
                
                        <a href="#"> 
                                <span> {{following}} </span>        
                                Following                                        
                        </a>
                
                        <button v-if="isEditting === false" id="editprofile" v-on:click="edit" > Edit Profile</button>
                        <div v-else="isEditting === true">
                        <button id="editprofile" v-on:click="toggleSave" >Save</button>
                        <button id="editcancel" v-on:click="edit" >Cancel</button>
                        </div>
                </div>
        </div>
   `

});

export default profileNavigationBar;