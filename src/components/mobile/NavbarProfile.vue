<template>
    <div class="navbar-profile">
        <a href="">
            <div id="bottle" class="navbar-profile">
                <span> Bottles </span>
                <span> {{bottles}} </span>
            </div>
        </a>
        <a href="#">
        <div id="bar" class="navbar-profile">
            <span> Bars </span>
            <span> {{bars}} </span>
        </div>
        </a>
        <a href="#">
        <div id="following" class="navbar-profile">
            <span> Following </span>
            <span> {{following}} </span>
        </div>
        </a>
        <a href="#">
        <div id="follower" class="navbar-profile">
            <span> Followers </span>
            <span> {{followers}} </span>
        </div>
        </a>
    </div>
</template>
<script>
    export default {
        data: () => {
            return {
                bottles: 15,
                bars: 15,
                following: 100,
                followers: 2500
            };
        },
        methods: {
            
        }
    }
</script>
<style scoped>
    .navbar-profile {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
    }
    #bottle {
        display: inline-grid;
        text-align: center;
        width: 22%;
        padding-left: 10px;
        
    }
    #bar {
        display: inline-grid;
        text-align: center;
        width: 18%;
    }
    #following {
        display: inline-grid;
        text-align: center;
        width: 27%;
    }
    #follower {
        display: inline-grid;
        text-align: center;
        width: 22%;
    }
    a {
        color: #f2f2f2;
        text-decoration: none;
    }
    a:hover {
        color: #CD7D0B;
    }
    a:active {
        color: #CD7D0B;
    }
</style>