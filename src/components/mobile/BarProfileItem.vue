<template>
    <div class="bar-profile-item">
        <ul class="collection">
            <li class="collection-item avatar">
            <img src="https://cdn.shopify.com/s/files/1/1335/2603/products/drinkka-san-miguel-red-horse-330ml.jpg?v=1526864548" alt="" class="circle">
            <span class="title">Red Horse</span>
            <p>Red Horse Beer is an extra-strong lager brewed by San Miguel Brewery.<br>
            </p>
            <div class="card-action">
            <span id="quantity_text"> Quantity: </span>
            <a class="waves-effect waves-light btn-floating btn-small"><i class="material-icons">remove</i></a>
            <span id="quantity_data_1">5</span>
            <a class="waves-effect waves-light btn-floating btn-small"><i class="material-icons">add</i></a>
            <a class="waves-effect waves-light btn">CART</a>
        </div>
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
    margin-bottom: 10px;
}

.collection{
    border: 0;
    margin: 10px;

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

.card-action {
    margin-top: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
}

#quantity_text {
    color: #CD7D0B;
    font-size: 20px;
    margin-top: 5px;
    /* font-weight: bold; */
}
#quantity_data_1 {
    margin-top: 5px;
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
.btn-floating, .btn-small{
    background-color:#CD7D0B;
}

.btn:hover, .btn-large:hover, .btn-small:hover {
    background-color: #CD7D0B;
}

.btn{
    background-color:#CD7D0B;
    border-radius: 30px;
    float: right;
}
.collection .material-icons {
    color: #f2f2f2 !important;
    font-weight: bold !important;
}
</style>