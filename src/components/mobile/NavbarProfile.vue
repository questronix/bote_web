<template>
    <div class="navbar-profile">
       <div class="row">
            <div class="">
            <ul class="tabs tabs-fixed-width swipeable">
                <li class="tab col s3"><a class="" href="#bottles">Bottles</a></li>
                <li class="tab col s3"><a href="#bars">Bars</a></li>
                <li class="tab col s3"><a href="#following">Following</a></li>
                <li class="tab col s3"><a href="#followers">Followers</a></li>
            </ul>
            </div>
            <div id="bottles" class="col s12">
                <profile-bottles />
            </div>
            <div id="bars" class="">
                <profile-card url="http://poolclub.thepalacemanila.com/Media/uploads/p19mru2gkj7o7ubldmfi2rjks5.jpg">Palace Pool Club</profile-card>
                <profile-card url="http://poolclub.thepalacemanila.com/Media/uploads/p19mru2gkj7o7ubldmfi2rjks5.jpg">Palace Pool Club</profile-card>
                <profile-card url="http://poolclub.thepalacemanila.com/Media/uploads/p19mru2gkj7o7ubldmfi2rjks5.jpg">Palace Pool Club</profile-card>
            </div>
            <div id="following" class="col s12">
                <profile-following />
            </div>
            <div id="followers" class="col s12">
                <profile-followers />
            </div>
        </div>
    </div>
</template>
<script>
    import ProfileCard from './ProfileCard.vue'
    import ProfileBottles from './ProfileBottles.vue'
    import ProfileFollowers from './ProfileFollowers.vue'
    import ProfileFollowing from './ProfileFollowing.vue'

    export default {
        components: {
            ProfileCard,
            ProfileBottles,
            ProfileFollowers,
            ProfileFollowing,
        }
    }
</script>

<style>
.tabs{
    background-color: #212121;
}
.tabs .tab a {
    color: #f2f2f2;
    
}
.tabs .tab a:hover, .tabs .tab a.active{
    color: #CD7D0B;
}

.tabs .indicator {
   
    background-color: #CD7D0B;
}

.tabs .tab a:focus, .tabs .tab a:focus.active {
    background-color: #212121;
    outline: none;
}
</style>