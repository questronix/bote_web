import Vue from 'vue/dist/vue';
import '../../css/profilenavbar.css';

let profileNavigationBar = Vue.component('profile-nav', {
  data: () => {
    return {
        bars: 10,
        beers: 230,
        followers: 456,
        following: 349,
        avatar: "https://avatars3.githubusercontent.com/u/5698765?s=460&v=4",
        post_feeds:[
                {username: 'Kenster', post: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`, img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster1', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster12', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster123', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster1234', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster12345', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster123456', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster1234567', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster12345678', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster123456789', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
                {username: 'Kenster1234567890', post: 'This is a sample post. Bote app dabest. Wooooh hello world.', img:"https://avatars3.githubusercontent.com/u/5698765?s=460&v=4"},
        ],

        card_bars:[
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'},
                {barname: 'Valkyrie', content: `This is the sample content of something. Lorem ipsum dolor amet.`, img:'https://media.cntraveler.com/photos/5a7c68c88ea5f04e2cf7733a/4:3/w_420,c_limit/Ada-St__2018_Ada-St.--Bar-.jpg'}
        ],
        card_followers:[
                {name:'Jhemastone',username:'@jhemStone_26',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'},
                {name:'Jhemastone',username:'@jhemStone_26',img:'http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png'}
        ],
        card_followings:[
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`},
                {name:'Papables', username:'@papables25',img:`http://gololy.ph/wp-content/uploads/2018/02/enrique-gil7.png`},
                {name:'Papables', username:'@papables25',img:`http://entertainment.inquirer.net/files/2017/05/Screen-Shot-2017-05-23-at-5.44.53-PM.png`}

        ]
        
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
  <div> 
        <div class="profile_all">
                <div class="profilenav">
                        <img :src="avatar" class="circle responsive-img"/>

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
                                <a id="editsave" v-on:click="toggleSave" class="btn wave-effect waves-light" >Save</a>
                                <a id="editcancel" v-on:click="edit" class="btn wave-effect waves-light" >Cancel</a>
                        </div>
                </div>
        
                        
        </div>   
        <div class="tabs">
                <li class="tab">
                        <a class="active" href="#posts"> 
                                Posts
                        </a>
                </li>
                <li class="tab">
                        <a href="#bars"> 
                                <span> {{bars}} </span>        
                                Bars 
                        </a>
                </li>

                <li class="tab">
                        <a href="#beers"> 
                                <span>{{beers}} </span>
                                Beers 
                        </a>
                </li>
        
                <li class="tab">
                        <a href="#followers"> 
                                <span> {{followers}} </span>
                                Followers 
                        
                        </a>
                </li>

                <li class="tab">
                <a href="#following"> 
                        <span> {{following}} </span>        
                        Following                                        
                </a>
                </li>
        </div>  
        <div id="posts">
                <div class="col s12 m8 offset-m2 l6 offset-l3" v-for="(post_feed,index) in post_feeds" :key="index">
                        <div class="card-panel grey lighten-5 z-depth-1">
                                <div class="row valign-wrapper">
                        
                                        <div class="col s2">
                                                <img :src="post_feed.img" alt="" class="circle responsive-img"> 
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
        </div>        
        <div id="bars" class="bar_card">
                <div class="row">
                        <div class="col s12 m4" v-for="(card_bar,index) in card_bars" :key="index">
                                <div class="card">
                                        <div class="card-image waves-effect waves-block waves-light">
                                                <img class="activator" :src="card_bar.img">
                                        </div>
                                        <div class="card-content">
                                                <span class="card-title activator grey-text text-darken-4">{{card_bar.barname}}<i class="material-icons right">more_vert</i></span>
                                        </div>
                                        <div class="card-reveal">
                                                <span class="card-title grey-text text-darken-4">{{card_bar.barname}}<i class="material-icons right">close</i></span>
                                                <p>{{card_bar.content}}</p>
                                        </div>
                                </div>
                        </div>
                </div>

        </div>

        <div id="beers">
                <h1>beers</h1>
        </div>
        <div class="profile_container">
                <div id="followers">
                        <div class="row">
                                <div class="col s12 m3" v-for="(card_follower,index) in card_followers" :key="index">
                                        <div class="card">
                                                <div class="card-image waves-effect waves-block waves-light">
                                                        <img :src="card_follower.img">
                                                </div>
                                                <div class="card-content">
                                                        <span class="card-title grey-text text-darken-4">{{card_follower.name}}</span>
                                                        {{card_follower.username}}
                                                </div>                                        
                                        </div>
                                </div>
                        </div>

                </div>
        </div>
        <div id="following">
                <div class="row">
                        <div class="col s12 m3" v-for="(card_following,index) in card_followings" :key="index">
                                <div class="card">
                                        <div class="card-image waves-effect waves-block waves-light">
                                                <img class="activator" :src="card_following.img">
                                        </div>
                                        <div class="card-content">
                                                <span class="card-title grey-text text-darken-4">{{card_following.name}}</span>
                                                {{card_following.username}}
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        
        </div>
        </div>

   `

});

export default profileNavigationBar;