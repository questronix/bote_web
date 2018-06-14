<template>
    <div id="dashboard">
    <Slideout menu="#menu" panel="#panel" side="right" :toggleSelectors="['.toggle-button']" @on-open="open" easing="ease-in-out" duration="0">
        <nav id="menu">
            <div>
                <p class="menu-items">Menu</p>
                <p class="menu-items" >Log out</p>
            </div>
            
        </nav>
        <main id="panel">
            <div class="page-title-bar">
            <h1>Dashboard</h1>
            </div>
            <div class="icon-bar">
                <a href="#" class="active"><i class="material-icons">home</i></a> 
                <a href="#"><i class="material-icons">face</i></a> 
                <a href="#"><i class="material-icons">shopping_cart</i></a>
                <a href="#"><i class="material-icons">chat_bubble</i></a> 
                <a href="#"><i class="material-icons toggle-button">settings</i></a> 
            </div>
        </main>
    </Slideout>
    </div>   
</template>

<script>

import Slideout from 'vue-slideout'

export default {
  components: {
      Slideout
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
    background: linear-gradient( #2A1B43,#5C1C4F);
    font-family: 'Montserrat', sans-serif;
    background-repeat: no-repeat;
}
body,html {
  margin: 0;
  height: 93%;
}
.page-title-bar {
    width: 100%; /* Full-width */
    background-color: #483860; 
    overflow: hidden;
    position: absolute;
    top: 0;
}
h1{
    text-align: center;
    color: #f2f2f2;
    text-transform: uppercase;
    font-size: 25px;
}
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

.active {
    /* background-color: #4CAF50; Add an active/current color */
}

.menu-items {
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.menu-items:hover, .menu-items:active {
    color: #f1f1f1;
}

.slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 2;
    display: none;
    background-color: #230F2A;
    color: white;
  }
 
.slideout-menu-left {
    left: 0;
}

.slideout-menu-right {
    right: 0;
}

.slideout-panel {
    color: white;
    position: relative;
    z-index: 1;
    will-change: transform;
    min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
}

.slideout-open .slideout-menu {
display: block;
}

.panel:before {
  content: '';
  display: block;
  background-color: rgba(0,0,0,0);
  transition: background-color 0.5s ease-in-out;
}

.panel-open:before {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 99;
}
</style>

