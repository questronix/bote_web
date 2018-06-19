<template>

    <div class="navbar-profile">
        <div id="bottle" class="navbar-profile">
            <span> Bottles </span>
            <span> {{bottles}} </span>
        </div>
        <div id="bar" class="navbar-profile">
            <span> Bars </span>
            <span> {{bars}} </span>
        </div>
        <div id="following" class="navbar-profile">
            <span> Following </span>
            <span> {{following}} </span>
        </div>

        <div id="follower" class="navbar-profile">
            <span> Followers </span>
            <span> {{followers}} </span>
        </div>
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
        height: 50px;
        letter-spacing: 3px;
        padding-top: 100px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
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
</style>