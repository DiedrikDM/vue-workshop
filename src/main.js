import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App';
import CocktailsList from "./components/CocktailsList";
import OrdersList from "./components/OrdersList";


Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter)

let ordersStore = {
  orders: [],
  orderCocktail: function (cocktail) {
    let index = this.orders.findIndex(o => o.cocktail === cocktail);
    if (index < 0) {
      this.orders.push({ cocktail: cocktail, amount: 1 });
    } else {
      this.orders[index].amount += 1;
    }
  },
  removeOrder: function (order) {
    order.amount -= 1;
    if (!order.amount) {
      let index = this.orders.indexOf(order);
      this.orders.splice(index, 1);
    }
  },
  finishOrders: function() {
    console.log("Processing orders now...", this.orders);
    console.log("Reset orders to empty array...");
    this.orders.splice(0);
  }
}

let routes = [
  { path: '/', component: CocktailsList, props: {ordersStore} },
  { path: '/orders', component: OrdersList, props: {ordersStore} }
]

let router = new VueRouter({
  mode: 'history',
  routes
})

let app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
