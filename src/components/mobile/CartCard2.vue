<template>
  <div v-bind:src="url" class="main_cart_box">
    <div class="child_box1">
      <img :src="url"/>
    </div>
    <div class="child_box2">
      <button id="layout_closebutton"><i class="material-icons">close</i></button>
    </div>
    <div class="child_box3">
      <span id="beername">{{this.beerdata[0].beername}}</span>
    </div>
    <div class="child_box4">
      <span id="description">{{this.beerdata[0].beerdesc}}</span>
    </div>
    <div class="child_box5">
      <div class="element1">
        <span id="quantity_text"> Quantity: </span>
      </div>
      <div class="element2">
        <button id="layout_button1" v-on:click="subtract"><i id="minus_icon" class="material-icons">remove</i></button>
      </div>
      <div class="element3">
        <span v-model="usercart.quantity" id="quantity_data_1"> {{this.usercart[0].quantity}}</span>
      </div>
      <div class="element4">
        <button id="layout_button2" v-on:click="add"><i id="add_icon" class="material-icons">add</i></button>
      </div>
      <div class="element5">
        <span v-model="usercart.totalcost" id="quantity_data_2"> {{this.usercart[0].totalcost}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => { /*SAMPLE DATA*/
      return {
        isAdd: false,
        isSubtract: false,
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
      }
    }
  }
</script>

<style>
  .main_cart_box { /*parent*/
    display: flex;
    flex-direction: row;  /*default*/
    flex-wrap: nowrap;  /*default*/
    height: 18vh;
    width: 100%;
  }

  /*children of main_cart_box*/
  .child_box1 {
    height: 18vh;
    order: 0;
  }
  .child_box2 {
    flex-direction: column;
    justify-content: flex-end;
    order: 1;
  }
  .child_box3 {
    flex-direction: column;
    order: 2;
  }
  .child_box4 {
    flex-direction: column;
    order: 3;
  }
  .child_box5 {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    order: 4;
  }

  /*children of child_box5*/
  .element1 {
    /* flex-direction: row; */
  }
  .element2 {
    /* flex-direction: row; */
  }
  .element3 {
    /* flex-direction: row; */
  }
  .element4 {
    /* flex-direction: row; */
  }
  .element5 {
    /* flex-direction: row; */
    justify-content: flex-end;
  }

  /*IDs*/
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
    padding-left: 35px;
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
  #layout_button1 {
    border-radius: 50%;
    background-color: #CD7D0B;
    border-style: none;
    outline: none;
  }
  #layout_button2 {
    border-radius: 50%;
    background-color: #CD7D0B;
    border-style: none;
    outline: none;
  }
  #layout_closebutton {
    background-color: #424242;
    height: 25px;
    width: 25px;
    color: white;
    border-style: none;
    outline: none;
  }
</style>
