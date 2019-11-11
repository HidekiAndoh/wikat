<template>
  <div>
    <h2 class="h2">{{ title }}:</h2>
    <carousel :autoplay="true" :autoplayTimeout="5000">
      <img v-for="item in items" :key="item.id" src="../assets/carteira-de-couro.webp" />
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "CarouselItems",
  props: {
    items: { type: Array, required: true },
    title: { type: String, required: true }
  },
  components: {
    carousel
  }
};
</script>

<style scoped>
</style>
