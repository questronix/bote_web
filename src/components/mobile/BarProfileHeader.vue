<template>
     <div v-bind:src="url" class="bar-profile-header">
        <img :src="url"/>
        <div class="bar-title"><slot></slot></div>
        <i id ="fire" class="material-icons">whatshot</i>
        <a href="/mobile/bars"><i id="back" class="material-icons">arrow_back</i></a>

        <div class="details-bg"></div>
    </div>
</template>

<script>
   export default {
        props: ['url'],
        data: () => {
            
            return {
                data: 0
            };
        },
        methods: {
            
        }
    }
</script>

<style scoped>
.bar-profile-header{
    height: 40vh;
    width: 100%;
    color: #f2f2f2;
    position: relative;
}

.bar-profile-header img{
    filter: brightness(0.5);
    max-width: 100%;
    min-height: 40vh;
    max-height: 100vh;
    position: absolute;
}

.details-bg{
    opacity: 0.5;
    background: black;
    width: 100%;
    height: 10vh;
    position: absolute;
    bottom: 0;
    filter: blur(5px);
    filter: brightness(0.5);
}


.bar-title{
    float: left;
    position: absolute;
    margin-top: 33vh;
    z-index: 2;
    padding: 5px;
    font-size: 1.5em;
}
#fire{
    color: #CD7D0B;
    font-size: 30px;
    float: right;
    position: relative;
    z-index: 3;
    margin-top: 33vh;
    padding-right: 5px;
}

#back{
    float:left;
    position: relative;
    z-index: 3;
    color: #f2f2f2;
    padding-top: 20px;
    padding-left: 5px;
    font-size: 30px;
}
</style>