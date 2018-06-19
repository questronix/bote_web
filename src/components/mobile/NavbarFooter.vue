<template>
    <div class="icon-bar">
        <a href="#" class="active"><i class="material-icons">home</i></a> 
        <a href="#"><i class="material-icons">face</i></a> 
        <a href="#"><i class="material-icons">shopping_cart</i></a>
        <a href="#"><i class="material-icons">chat_bubble</i></a> 
        <a href="#"><i class="material-icons toggle-button">settings</i></a> 
    </div>
</template>

<script>
    export default {
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
.icon-bar i{
    font-size: 30px;
}
.icon-bar {
    width: 100%; /* Full-width */
    background-color: #804174; 
    overflow: hidden;
    position: fixed;
    bottom: 0;
}

.icon-bar a {
    float: left; /* Float links side by side */
    text-align: center; /* Center-align text */
    width: 20%; /* Equal width (5 icons with 20% width each = 100%) */
    padding: 12px 0; /* Some top and bottom padding */
    transition: all 0.3s ease; /* Add transition for hover effects */
    color: white; /* White text color */
    font-size: 25px; /* Increased font size */
}

.icon-bar i:hover {
    /* background-color: #000;  */
    color: #FC2D62;
}
</style>