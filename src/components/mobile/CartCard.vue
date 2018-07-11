<template>
  <div v-if="stay" class="col s12 m7">
   <div class="card horizontal">
     <div class="card-image">
       <img src="/static/img/beerimage-1.jpg">
     </div>
     <div class="card-stacked">
       <div class="card-content">
         <div class="flex-end-close">
           <button id="layout_closebutton" v-on:click="removeCartCard"><i class="material-icons">close</i></button>
         </div>
         <span id="beername">{{this.beerdata[0].beername}}</span>
         <span id="description">{{this.beerdata[0].beerdesc}}</span>
       </div>
       <div class="card-action">
         <span id="quantity_text"> Quantity: </span>
         <a class="btn-floating btn-small waves-effect waves-light" v-on:click="subtract"><i class="material-icons">remove</i></a>
         <span id="quantity_data_1"> {{this.usercart[0].quantity}}</span>
         <a class="btn-floating btn-small waves-effect waves-light" v-on:click="add"><i class="material-icons">add</i></a>
         <span id="quantity_data_2"> {{this.usercart[0].totalcost}}</span>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  export default {
    data: () => { /*SAMPLE DATA*/
      return {
        stay: true,
        beerdata: [
          { beercode: '1', beername: 'Red Horse Beer', beercost: 95, beerdesc: 'extra strong beer that brings you that pure alcoholic experience'},
          { beercode: '2', beername: 'San Miguel Beer', beercost: 90, beerdesc: 'nice beer'}
        ],
        usercart: [
          {
            userid: 10015,
            beercode: '1',
            quantity: 1,
            totalcost: 95
          }
        ]
      }
    },
    props: ['url'],
    methods: {  /*Trial Methods*/
      add: function() {
        this.usercart[0].quantity = this.usercart[0].quantity + 1;
        this.usercart[0].totalcost = this.usercart[0].totalcost + 95;
      },
      subtract: function () {
        if(this.usercart[0].quantity != 0){
          this.usercart[0].quantity--;
          this.usercart[0].totalcost-=95;
        }
      },
      removeCartCard: function(){
        this.stay = false;
      }
    }
  }
</script>

<style>
  .card {
    display: flex !important;
    align-items: space-around !important;
    background-color: #424242 !important;
    height: 18vh !important;
    width: 100% !important;
  }
  .card-image {
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 10px !important;
    width: 25%;
  }
  .card-image img{
    border-color: solid black !important;
    border-radius: 50% !important;
    height: 14vh !important;
    position: static !important;
    justify-content: center !important;
    border: 4px solid #CD7D0B;
    width: 100% !important;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    padding: 0px 0px !important;
    padding-left: 20px !important;
    height: 9vh !important;
  }
  .flex-end-close {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .card-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 9vh !important;
    position: static !important;
    padding: 0px 0px !important;
    padding-left: 20px !important;
  }
  #beername {
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 1.25em;
    color: white;
  }
  #description {
    font-size: 0.5em;
    color: white;
  }
  #quantity_text {
    color: #CD7D0B;
    font-size: 1.5em;
    font-weight: bold;
  }
  #quantity_data_1 {
    font-size: 1.25em;
    font-weight: bold;
    color: white;
  }
  #quantity_data_2 {
    padding-left: 70px;
    padding-right: 20px;
    font-size: 1.25em;
    font-weight: bold;
    color: #CD7D0B;
  }
  .btn-floating.btn-small {
    background-color: #CD7D0B;
  }
  #layout_closebutton {
    background-color: #424242;
    height: 25px;
    width: 25px;
    color: white;
    border-style: none;
    outline: none;
  }
  #layout_closebutton i:hover {
    color: #CD7D0B;
  }
</style>
