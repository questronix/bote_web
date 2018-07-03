<template>
    <div class="infocard">
        <div id="title">{{title}}</div>
        <div id="desc">{{description}}</div>
    </div>
</template>


<script>
import Vue from 'vue/dist/vue';
import Api from '../../lib/Api.js';
import '../../css/index.css';

let infocard = Vue.component('info-card', {
  props: {
      title: String,
      description: String
  }
});

export default infocard;
</script>