<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Cadastrar items!</h1>
      <p class="lead">Cadastre um item encontrado para que outras pessoas possam acha-lo.</p>
      <hr class="my-4" />
      <router-link
        to="/cadastrar_item"
        class="btn btn-primary btn-lg"
        href="#"
        role="button"
      >CADASTRAR</router-link>
    </div>
    <div class="mt-5">
      <CarouselItems :items="itemsPerdidos" title="Items Perdidos" />
    </div>
    <div class="mt-5">
      <CarouselItems :items="itemsAchados" title="Items Achados" />
    </div>
  </div>
</template>

<script>
import CarouselItems from "../components/CarouselItems";

export default {
  name: "Inicio",
  data() {
    return {
      items: [
        {
          id: 1,
          nome: "carteira",
          categoria: "",
          imagem: "carteira-de-couro",
          status: "achado"
        },
        {
          id: 2,
          nome: "carteira",
          categoria: "",
          imagem: "../../static/carteira-de-couro.webp",
          status: "achado"
        },
        {
          id: 3,
          nome: "carteira",
          categoria: "",
          imagem: "../../static/carteira-de-couro.webp",
          status: "perdido"
        },
        {
          id: 4,
          nome: "carteira",
          categoria: "",
          imagem: "../../static/carteira-de-couro.webp",
          status: "perdido"
        },
        {
          id: 5,
          nome: "carteira",
          categoria: "",
          imagem: "../../static/carteira-de-couro.webp",
          status: "achado"
        },
        {
          id: 6,
          nome: "carteira",
          categoria: "",
          imagem: "../../static/carteira-de-couro.webp",
          status: "achado"
        },
        {
          id: 6,
          nome: "carteira",
          categoria: "",
          imagem: "../../static/carteira-de-couro.webp",
          status: "perdido"
        }
      ],
      itemsPerdidos: [],
      itemsAchados: []
    };
  },
  created() {
    this.itemsPerdidos = this.items.filter(item => item.status === "perdido");
    this.itemsAchados = this.items.filter(item => item.status === "achado");
  },
  components: {
    CarouselItems
  }
};
</script>

<style scoped>
</style>
