<template>
  <form>
    <h2 class="h5 mb-4">Dados do item</h2>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Descrição do item</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Categoria</label>
      <select class="form-control" id="exampleFormControlSelect2" v-model="selected">
        <option :value="0">Selecione uma categoria...</option>
        <option :value="1">Achado</option>
        <option :value="2">Perdido</option>
      </select>
    </div>
    <div v-if="selected !== 0">
      <h2 class="h5 mt-2 mb-4">{{ title }}</h2>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Municipio</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            placeholder="Insira o municipio onde você encontrou o item"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Bairro</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            placeholder="Insira o bairro onde você encontrou o item"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="inputPassword4">Rua</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            placeholder="Insira o bairro onde você encontrou o item"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleFormControlFile1">Insira a foto do item</label>
      <input type="file" class="form-control-file" id="exampleFormControlFile1" />
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
  </form>
</template>

<script>
export default {
  name: "FormularioItem",
  data() {
    return { selected: 0 };
  },
  computed: {
    title() {
      return this.select === 1
        ? "Endereço de onde você encontrou o item"
        : "Endereço de onde você perdeu o item";
    }
  }
};
</script>

<style scoped>
</style>
