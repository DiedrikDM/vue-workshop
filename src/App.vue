<template>
<div>
  <header>
    <router-link to="/"><h1 class="header">Awesome Cocktails</h1></router-link>
    <router-link to="/orders" id="cart"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-10 -10 40 40"
      enable-background="new 0 0 20 20" xml:space="preserve">
      <path fill="#FFFFFF" d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17z M3,17  c0,1.104,0.895,2,2,2c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17z M6.547,12.172L17.615,9.01  C17.826,8.949,18,8.721,18,8.5V3H4V1.4C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4V3h2l1.91,8.957L4,12.9v1.649  c0,0.219,0.18,0.4,0.4,0.4h13.2c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"
      />
    </svg></router-link>
  </header>
  <main >
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
  <footer>
    <p>&copy; U2U 2018</p>
  </footer>
</div>
</template>

<script>
import CocktailsList from "./components/CocktailsList";
import OrdersList from "./components/OrdersList";

export default {
  name: "App",
};
</script>

<style>

</style>
