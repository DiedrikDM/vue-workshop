<template>
  <section v-if="orders && orders.length" class="row">
    <div class="col-sm-4 col-sm-offset-4">
      <div class="card fluid">
        <ul class="orders">
          <order-detail v-for="order in orders" :key="order.cocktail.id" :order="order" @removeOrder="$emit('removeOrder', $event)" />
        </ul>
        <button class="tertiary orderbutton" @click="finishOrders">Finish Orders</button>
      </div>
    </div>
  </section>
</template>

<script>
import OrderDetail from './OrderDetail';
export default {
  components: {'order-detail': OrderDetail},
  props: ['orders'],
  methods: {
    finishOrders: function(){
      this.$emit('ordersFinished');
    }
  }
}
</script>

<style>
svg#trash {
  cursor: pointer;
}
</style>
