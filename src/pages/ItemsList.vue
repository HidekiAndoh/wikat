<template>
  <div>
    <h1 class="h2 mb-5">Listagem de Items</h1>
    <div class="row">
      <div v-for="item in items" :key="item.id" class="col-md-4">
        <div class="card mb-4" style="width: 18rem;">
          <img
            class="card-img-top"
            src="../assets/carteira-de-couro.webp"
            alt="Imagem de capa do card"
          />
          <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <p
              class="card-text"
            >Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            <a href="#" class="btn btn-primary">Visitar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsList",
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
      ]
    };
  }
};
</script>

<style scoped>
</style>
