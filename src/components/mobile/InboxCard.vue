<template>
    <div class="inbox-card">
        <ul class="collection">
    <li class="collection-item avatar">
      <img src="https://i2.wp.com/www.philnews.ph/wp-content/uploads/2011/06/willie-revillame-new-show-TV5-willing-willie-copyright-infringement-lawsuit-abs-cbn-275x300.jpg?resize=275%2C300" alt="" class="circle">
      <span class="title">Willie Revillame</span> <i class="material-icons">brightness_1</i>
      <p>If you want to drink hit me up!<br>
      </p>
    </li>
  </ul>
  
    </div>
</template>

<script>

    export default {
        components: {
        }
    }
</script>

<style>

.collection .collection-item {
    background-color: #424242;
    line-height: 1.5rem;
    padding: 10px 20px;
    margin: 0;
    border-bottom: none;
}

.collection{
    border: 0;
    margin: 10px;

}

.collection .material-icons{
    color: #cd7d08;
}

p{
    color: #9B9B9B;
    font-size: 10px;
}

.title{
    color: #f2f2f2;
}
.category{
    height: 8vh;
}

.collection .material-icons {
    color: #cd7d08;
    font-size: 10px !important;
}
</style>