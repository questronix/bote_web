<template>
  <ul class="collection">
    <li id="stretch" class="collection-item"><Navbar/></li>
    <li class="collection-item"><CartCard></CartCard></li>
    <li class="collection-item"><CartCard></CartCard></li>
    <li class="collection-item"><CartCard></CartCard></li>
    <li class="collection-item">
      <div class="totals-box">
        <div class="subtotal-line">
          <h6> Subtotal </h6>
          <h6 id="change-color"> P95 </h6>
        </div>

        <div class="hr"> </div>

        <div class="tax-line">
          <h6> Taxes </h6>
          <h6 id="change-color"> P95 </h6>
        </div>

        <div class="hr"> </div>

        <div class="total-line">
          <h5> Total </h5>
          <h5 id="change-color"> P95 </h5>
        </div>
      </div>
    </li>
    <li class="collection-item">
      <div class="checkout-btn">
        <a class="waves-effect waves-light btn">Checkout</a>
      </div>
    </li>
  </ul>
</template>

<script>
  import Navbar from '../../../components/mobile/Navbar.vue';
  import CartCard from '../../../components/mobile/CartCard.vue';

  export default {
    components: {
      Navbar,
      CartCard
    }
  }
</script>

<style>
body {
  background-color: #212121;
  font-family: 'Montserrat', sans-serif;
}
body, html {
  margin: 0;
  height: 100%;
}
.collection {
  margin: 0;
  border: none;
}
.collection .collection-item {
  background-color: #212121;
  border-bottom: none;
  padding: 10px 10px;
}
.totals-box {
  display: flex;
  flex-direction: column;
  width: inherit;
  height: auto;
  background-color: #424242;
}
.subtotal-line {
  display: inherit;
  flex-direction: row !important;
  width: inherit;
  height: inherit;
  justify-content: space-between;
}
.tax-line {
  display: inherit;
  flex-direction: row !important;
  width: inherit;
  height: inherit;
  justify-content: space-between;
}
.total-line {
  display: inherit;
  flex-direction: row !important;
  width: inherit;
  height: inherit;
  justify-content: space-between;
}
.hr {
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    border-color: white;
    border-width: 0.5px;
    width: 100%;
}
.checkout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  background-color: #CD7D0B;
  border-radius: 25px;
  height: auto;
  width: 25%;
  font-weight: bold;
}
.btn:hover {
  background-color: #CD7D0B;
  color: white;
}
#stretch {
  padding: 0px 0px !important;
}
h6 {
  color: white;
  font-weight: bold;
}
h5 {
  color: white;
  font-weight: bold;
}
#change-color {
  color: #CD7D0B;
}
</style>
