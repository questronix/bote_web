<template>
  <div class="navbar-section">
    <div class="upper-section">
      <div class="searchbar">
        <a href="#" class="active"><i class="material-icons">search</i></a>
        <input id="searchbartext" type="text" placeholder="Search for places, drinks, bars, people, etc."/>
      </div>
      <img :src="require('../../img/sample-profile.jpg')"/>
      <a href="#" class="active"><i id="strict" class="material-icons">notifications</i></a>
    </div>
    <div class="lower-section">
      <a href="#" class="active"><i class="material-icons">home</i></a>
      <a href="#"><i class="material-icons">shopping_cart</i></a>
      <a href="#"><i class="material-icons">chat_bubble</i></a>
      <a href="#"><i class="material-icons toggle-button">settings</i></a>
    </div>

  </div>
</template>

<script>

</script>

<style scoped>
  .navbar-section {
    background-color: #212121;
    height: 20vh;
    width: 100%;
  }
  .upper-section {
    height: 50%;
    display: flex;
  }
  .searchbar {
    width: 65%;
  }
  .searchbar a {
    width: 10%;
    height: 50%;
    transition: all 0.3s ease; /* Add transition for hover effects */
  }
  .searchbar i {
    position: absolute;
    padding-left: 70px;
    padding-top: 55px;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
  }
  #searchbartext {
    width: 105%;
    height: 50%;
    margin-top: 16px;
    margin-left: 20px;
    padding-left: 35px;
    font-size: 15px;
    border: none;
    border-radius: 30px;
    color: white;
    background-color: #303030;
  }
  .upper-section img {
    width: 10%;
    border-radius: 50%;
    padding-left: 16%;
    padding-top: 20px;
  }
  .upper-section a {
    width: 10%;
    padding: 12px 0; /* Some top and bottom padding */
    transition: all 0.3s ease; /* Add transition for hover effects */
    color: white; /* White text color */
  }
  #strict{
    padding-top: 5px;
  }
  .upper-section i:hover {
    color: #CD7D0B;
  }
  .lower-section {
    height: 50%;
  }
  .lower-section a {
      float: left; /* Float links side by side */
      text-align: center; /* Center-align text */
      width: 25%; /* Equal width (5 icons with 20% width each = 100%) */
      padding: 10px 0; /* Some top and bottom padding */
      transition: all 0.3s ease; /* Add transition for hover effects */
      color: white; /* White text color */
      font-size: 25px; /* Increased font size */
  }
  .lower-section i:hover {
      color: #CD7D0B;
  }
</style scoped>
