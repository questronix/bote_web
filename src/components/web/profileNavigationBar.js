import Vue from 'vue/dist/vue';
import '../../css/profilenavbar.css';

let profileNavigationBar = Vue.component('profile-nav', {
  data: () => {
    return {
        bars: 10,
        beers: 230,
        followers: 456,
        following: 349,
        avatar: "https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"

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
                                        <input v-else="isEditting === true" type="text" :placeholder="user.name" v-model="edituser.nameEdit" class="validate">        
                                        
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
                        <div class="editing">
                                <a v-if="isEditting === false" id="editprofile" v-on:click="edit" class="btn waves-effect waves-light "><i class="material-icons right">settings</i>Edit Profile</a>
                                
                                <div v-else="isEditting === true">
                                <a id="editprofile" v-on:click="toggleSave" class="btn wave-effect waves-light" >Save</a>
                                <a id="editcancel" v-on:click="edit" class="btn wave-effect waves-light" >Cancel</a>
                        </div>
                        <div class="tabs">
                                <div>
                                        <a href="#"> 
                                                <span> {{bars}} </span>        
                                                Bars 
                                        </a>
                                </div>

                                <div>
                                        <a href="#"> 
                                                <span> {{beers}} </span>
                                                Beers 
                                        </a>
                                </div>
                        
                                <div>
                                        <a href="#"> 
                                                <span> {{followers}} </span>
                                                Followers 
                                        
                                        </a>
                                </div>

                                <div>
                                <a href="#"> 
                                        <span> {{following}} </span>        
                                        Following                                        
                                </a>
                                </div>
                        </div>        
                        </div>
                </div>
        </div>
   `

});

export default profileNavigationBar;