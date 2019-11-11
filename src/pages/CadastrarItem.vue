<template>
  <div>
    <h1 class="h1">Cadastrar Item</h1>
    <div class="card p-4 mt-5">
      <FormularioItem />
    </div>
  </div>
</template>

<script>
import FormularioItem from "../components/FormularioItem";

export default {
  name: "CadastrarItem",
  components: {
    FormularioItem
  }
};
</script>

<style scoped>
</style>
