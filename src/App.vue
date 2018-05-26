<template>
  <div class="container">
    <cocktails-list @cocktailOrdered="handleOrder($event)" />
    <orders-list :orders="orders" @removeOrder="handleRemove($event)" @ordersFinished="finishOrders" />
  </div>
</template>

<script>
import CocktailsList from "./components/CocktailsList";
import OrdersList from "./components/OrdersList";

export default {
  name: "App",
  components: {
    "cocktails-list": CocktailsList,
    "orders-list": OrdersList
  },
  data: function() {
    return {
      orders: []
    };
  },
  methods: {
    handleOrder: function(cocktail) {
      let index = this.orders.findIndex(o => o.cocktail === cocktail);
      if (index < 0) {
        this.orders.push({ cocktail: cocktail, amount: 1 });
      } else {
        this.orders[index].amount += 1;
      }
    },
    handleRemove: function(order) {
      order.amount -= 1;
      if (!order.amount) {
        let index = this.orders.indexOf(order);
        this.orders.splice(index, 1);
      }
    },
    finishOrders: function() {
      console.log("Processing orders now...", this.orders);
      console.log("Reset orders to empty array...");
      this.orders = [];
    }
  }
};
</script>

<style>

</style>
