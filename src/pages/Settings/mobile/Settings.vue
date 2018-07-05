<template>
    <div id="settings">
        <Navbar />
        <div class="title">
            <h1>SETTINGS</h1>
        </div>
        <div class="collection">
        <a href="#!" class="collection-item">Account Settings</a>
        <a href="#!" class="collection-item">Privacy Settings</a>
        <a href="#!" class="collection-item">Payment Settings</a>
        <a href="#!" class="collection-item">Log out</a>
      </div>
    </div>
</template>

<script>

import Navbar from '../../../components/mobile/Navbar.vue';
export default {
    components: {
      Navbar,
    }
}
</script>

<style>
body {
  background-color: #303030;
  font-family: 'Montserrat', sans-serif;
}
body, html {
  margin: 0;
  height: 100%;
}
.settings{
    position: relative;
}
.collection{
    position: absolute;
    bottom: 0;
    border: none;
}

.collection .collection-item {
    width: 100%;
    background-color: #424242;
    line-height: 4rem;
    padding: 10px 20px;
    margin: 0;
    border-bottom: 1px solid #212121;
}

.collection a.collection-item {
    display: block;
    -webkit-transition: .25s;
    transition: .25s;
    color: #f2f2f2;
    text-align: center;
}

.collection a.collection-item:not(.active):hover {
    color: #cd7d08;
    background-color: #424242;
}
.title{
    height: 8vh;
}

.title h1{
    text-align: center;
    color: #cd7d08;
    font-size: 25px;
}

</style>

