<template>
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
</template>

<script>
import cocktails from "../cocktails.json";

export default {
  data: function(){
    return {
      cocktails: cocktails
    }
  },
  methods: {
    orderCocktail: function(cocktail){
      this.$emit('cocktailOrdered', cocktail);
    }
  }

};
</script>

<style>
</style>
