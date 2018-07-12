<template>
  <ul class="collection">
    <li id="stretch" class="collection-item"><Navbar/></li>
    <li class="collection-item"><CartCard :usercart="usercart[0]" :beerdata="beerdata[0]" :isAdd="isAdd" :isSubtract="isSubtract"></CartCard></li>
    <li class="collection-item"><CartCard :usercart="usercart[1]" :beerdata="beerdata[1]" :isAdd="isAdd" :isSubtract="isSubtract"></CartCard></li>
    <li class="collection-item"><CartCard :usercart="usercart[2]" :beerdata="beerdata[2]" :isAdd="isAdd" :isSubtract="isSubtract"></CartCard></li>
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
        <!-- Modal Trigger -->
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Checkout</a>
        <!-- Modal Structure -->
        <div id="modal1" class="modal">
          <div class="flex-end-close-modal">
           <button id="layout_closebutton_modal" class="modal-close"><i class="material-icons">close</i></button>
          </div> 
          <div class="modal-content">
            <span id="change-color"> THANK YOU FOR PURCHASING! </span>
            <img src="/static/img/bottlecap-logo.png">
            <span id="change-color"> Total Cost: Php {{this.fullcost}} </span>
            <span id="change-color"> YOU NOW HAVE: </span>
          </div>
          <div class="modal-footer">
            <a href="#undo" class="modal-close waves-effect waves-green btn-flat"><span id="modal-button">Undo</span></a>
            <a href="#confirm" class="modal-close waves-effect waves-green btn-flat"><span id="modal-button">Confirm</span></a>
          </div>
        </div>
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
    },
    data: () => { /*SAMPLE DATA*/
      return {
        isAdd: false,
        isSubtract: false,
        beerdata: [
          { beercode: '1', img: "/static/img/beerimage-1.jpg", beername: 'Red Horse Beer', beercost: 95, beerdesc: 'Extra strong beer that brings you that pure alcoholic experience'},
          { beercode: '2', img: "/static/img/beerimage-2.png", beername: 'San Miguel Pale Pilsen', beercost: 95, beerdesc: 'Soothing and refreshing beer for batak people'},
          { beercode: '3', img: "/static/img/beerimage-3.png", beername: 'San Mig Light', beercost: 95, beerdesc: 'Beer for chill people who just want to feel those marvelous city lights'}
        ],
        usercart: [
          {
            userid: 10015,
            beercode: '1',
            quantity: 1,
            totalcost: 95
          },
          {
            userid: 10015,
            beercode: '2',
            quantity: 1,
            totalcost: 95
          },
          {
            userid: 10015,
            beercode: '3',
            quantity: 1,
            totalcost: 95
          }
        ],
        fullcost: 285
        // fullcost: this.calculateTotalCost()
      }
    },
    methods: {
      // calculateTotalCost: function () {
      //   let temp = 0;
      //   this.usercart.forEach(function(individual_cost) {
      //     temp += individual_cost.totalcost;
      //   });
      //   return temp;
      // }
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems);
  });
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
.modal .modal-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212121;
  color: white;
}
.modal-content img {
  height: 10vh;
  width: 10vh;
}
.flex-end-close-modal {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #212121;
}
#modal1 {
  background-color: #212121;
  border-radius: 25px;
}
.modal .modal-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;
}
#modal-button {
  color: white;
}
#layout_closebutton_modal {
    background-color: #212121;
    height: 25px;
    width: 25px;
    color: white;
    border-style: none;
    outline: none;
    padding-right: 6% !important;
}
#change-color {
  color: #CD7D0B;
  font-weight: bold;
}
</style>
