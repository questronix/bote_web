<template>
    <div id="bars">
        <Navbar/>
        <div class="category">
            <h1>NEAREST BARS</h1>
        </div>
    <ul class="collection">
    
    <a href="/mobile/barprofile/"><li class="collection-item avatar">
      <img src="http://valkyrie.thepalacemanila.com/Media/uploads/p19hvas3ruvbv6q0m061h401jd44.jpg" alt="" class="circle">
      <span class="title">Valkyrie Manila</span>
      <p>36 9th Avenue, Taguig, Metro Manila <br>
         0.3 km
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">place</i></a>
    </li></a>
    <li class="collection-item avatar">
      <img src="http://valkyrie.thepalacemanila.com/Media/uploads/p19hvas3ruvbv6q0m061h401jd44.jpg" alt="" class="circle">
      <span class="title">Valkyrie Manila</span>
      <p>36 9th Avenue, Taguig, Metro Manila</p>
      <p> Line</p>
      <a href="#!" class="secondary-content"><i class="material-icons">place</i></a>
    </li>
    <li class="collection-item avatar">
       <img src="http://valkyrie.thepalacemanila.com/Media/uploads/p19hvas3ruvbv6q0m061h401jd44.jpg" alt="" class="circle">
      <span class="title">Valkyrie Manila</span>
      <p>36 9th Avenue, Taguig, Metro Manila <br>
         0.3 km
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">place</i></a>
    </li>
    <li class="collection-item avatar">
       <img src="http://valkyrie.thepalacemanila.com/Media/uploads/p19hvas3ruvbv6q0m061h401jd44.jpg" alt="" class="circle">
      <span class="title">Valkyrie Manila</span>
      <p>36 9th Avenue, Taguig, Metro Manila <br>
         0.3 km
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">place</i></a>
    </li>
    <li class="collection-item avatar">
       <img src="http://valkyrie.thepalacemanila.com/Media/uploads/p19hvas3ruvbv6q0m061h401jd44.jpg" alt="" class="circle">
      <span class="title">Valkyrie Manila</span>
      <p>36 9th Avenue, Taguig, Metro Manila <br>
         0.3 km
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">place</i></a>
    </li>
    <li class="collection-item avatar">
       <img src="http://valkyrie.thepalacemanila.com/Media/uploads/p19hvas3ruvbv6q0m061h401jd44.jpg" alt="" class="circle">
      <span class="title">Valkyrie Manila</span>
      <p>36 9th Avenue, Taguig, Metro Manila <br>
         0.3 km
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">place</i></a>
    </li>
  </ul>
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

.collection .collection-item {
    background-color: #424242;
    line-height: 1.5rem;
    padding: 10px 20px;
    margin: 0;
    border-bottom: none;
    margin-bottom: 10px;
}

.collection{
    border: 0;
    margin: 10px;

}

.collection .material-icons{
    color: #cd7d08;
}

p{
    color: #f2f2f2;
}

.title{
    color: #f2f2f2;
}
.category{
    height: 8vh;
}
h1{
    text-align: center;
    color: #cd7d08;
    font-size: 25px;
}
</style>
