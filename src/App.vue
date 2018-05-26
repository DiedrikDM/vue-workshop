<template>
  <div class="container">
        <section class="row cocktails">
          <div class="card" v-for="cocktail in cocktails" :key="cocktail.id">
            <div class="section">
              <h3>{{cocktail.name}}</h3>
            </div>
            <img :src="cocktail.imgurl" class="section media">
            <div class="section">
              <button class="tertiary orderbutton" @click="orderCocktail(cocktail)">Order</button>
            </div>
          </div>
        </section>
        <section v-if="orders && orders.length" class="row">
          <div class="col-sm-4 col-sm-offset-4">
            <div class="card fluid">
              <ul class="orders">
                <li v-for="order in orders" :key="order.id">
                  <div class="row">
                    <div class="col-sm-6">{{order.cocktail.name}} × {{order.amount}}</div>
                    <div class="col-sm-6 right">
                      <svg version="1.1" id="trash" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                        <path fill="black" d="M3.389,7.113L4.49,18.021C4.551,18.482,6.777,19.998,10,20c3.225-0.002,5.451-1.518,5.511-1.979  l1.102-10.908C14.929,8.055,12.412,8.5,10,8.5C7.59,8.5,5.072,8.055,3.389,7.113z M13.168,1.51l-0.859-0.951  C11.977,0.086,11.617,0,10.916,0H9.085c-0.7,0-1.061,0.086-1.392,0.559L6.834,1.51C4.264,1.959,2.4,3.15,2.4,4.029v0.17  C2.4,5.746,5.803,7,10,7c4.198,0,7.601-1.254,7.601-2.801v-0.17C17.601,3.15,15.738,1.959,13.168,1.51z M12.07,4.34L11,3H9  L7.932,4.34h-1.7c0,0,1.862-2.221,2.111-2.522C8.533,1.588,8.727,1.5,8.979,1.5h2.043c0.253,0,0.447,0.088,0.637,0.318  C11.907,2.119,13.77,4.34,13.77,4.34H12.07z"
                        />
                      </svg>
                    </div>
                  </div>
                </li>

              </ul>
              <button class="tertiary orderbutton">Finish Orders</button>
            </div>
          </div>
        </section>
      </div>
</template>

<script>
import cocktails from "./cocktails.json";

export default {
  name: "App",
  data: function() {
    return {
      cocktails: cocktails,
      orders: []
    };
  },
  methods: {
    orderCocktail: function(cocktail){
      let index = this.orders.findIndex(o => o.cocktail === cocktail);
      if(index < 0) { this.orders.push({cocktail: cocktail, amount: 1}); }
      else {this.orders[index].amount += 1; }
    }
  }
};
</script>

<style>
</style>
