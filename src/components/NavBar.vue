<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link to="/inicio" class="navbar-brand" href="#">WIKAT</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Alterna navegação"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/inicio" class="nav-link">
            INICIO
            <span class="sr-only">(Página atual)</span>
          </router-link>
        </li>
        <li class="nav-item active"></li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >ITEMS</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link to="/items" class="dropdown-item" href="#">ACHADOS</router-link>
            <router-link to="/items" class="dropdown-item" href="#">PERDIDOS</router-link>
          </div>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">
            FÓRUM
            <span class="sr-only">(Página atual)</span>
          </a>
        </li>
        <li class="nav-item active">
          <router-link
            to="/cadastrar_item"
            class="nav-link btn btn-light btn-sm text-dark ml-3"
            href="#"
          >
            CADASTRAR ITEM
            <span class="sr-only">(Página atual)</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
</style>
