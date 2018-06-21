<template>
    <div v-bind:src="url" class="profile-card">
        <img :src="url"/>
        <div class="Bar-title"><slot></slot></div>   <!--- used for something that is passed-->
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
.profile-card{
    position: relative;
    height: 30vh;
    width: 100%;
    color: #f2f2f2;
    overflow: hidden;
}

.profile-card img{
    filter: brightness(0.5);
    width: 100%;
    /* max-height: 100%; */
}
.profile-card .Bar-title{
    position: absolute;
    bottom: 0;
    left: 0;
    padding-left: 5px;
    padding-bottom: 5px;
}
</style>