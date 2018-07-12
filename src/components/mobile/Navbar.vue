<template>
  <div class="main_navbar">
    <nav> <!--SEARCHBAR-->
      <div class="nav-wrapper">
        <form>
          <div class="input-field">
            <input id="search" type="search" required>
            <label class="label-icon" for="search">
              <a href="#"><i class="material-icons">search</i></a>
            </label>
            <!-- <i class="material-icons">close</i> -->
          </div>
        </form>
        <div class="img-profile">
          <a href='/mobile/profile/me'><img src="https://i2-prod.mirror.co.uk/incoming/article10263400.ece/ALTERNATES/s1200/PROD-Kim-Jong-Un.jpg"></a>
        </div>
        <div class="notif-icon">
          <a href="/mobile/notifications"><i class="material-icons">notifications</i></a>
        </div>
      </div>
    </nav>

    <nav>
      <div class="icons-below">
        <a href="/mobile/dashboard"><i class="material-icons">home</i></a>
        <a href="/mobile/cart"><i class="material-icons">shopping_cart</i></a>
        <a href="/mobile/message"><i class="material-icons">message</i></a>
        <a href="/mobile/settings"><i class="material-icons">settings</i></a>
      </div>
    </nav>
  </div>
</template>

<script>

export default {

}

</script>

<style>
  .main_navbar {
    display: flex;
    flex-direction: column;
    height: inherit;
    width: 100%;
  }
  nav {
    background-color: #212121;
    width: 100%;
  }
  nav .nav-wrapper {
    display: flex;
    align-items: center;
    position: static !important;
  }
  nav form {
    padding-left: 20px;
    width: 80%;
    height: 50%;
  }
  .input-field {
    position: static !important;
  }
  .input-field input[type=search] {
    line-height: inherit;
    transition: .3s background-color;
    border-radius: 20px;
    background-color: #424242;
  }
  .input-field>label {
    padding-left: 10px !important;
  }
  .img-profile {
    display: flex;
    align-items: center;
    padding-left: 15px;
    width: 10%;
    height: inherit;
  }
  .img-profile img {
    border-radius: 50%;
    height: 50%;
    width: 80%;
    border: 2px solid #CD7D0B;
  }
  .notif-icon {
    display: flex;
    align-items: center;
    padding-left: 15px;
    width: 10%;
    height: inherit;
  }
  .notif-icon i {
    height: 50%;
    width: 100%;
  }
  nav i:hover {
    color: #CD7D0B;
  }
  nav .input-field label i:hover {
    color: #CD7D0B;
  }

  .icons-below {
    display: inline-flex;
    justify-content: space-around;
    height: inherit;
    width: 100%;
  }
</style>
