<template>
  <div class="navbar">
    <router-link to="/crear">Crear Nuevo Vehículo</router-link>
    <router-link to="/consultar">Consultar Vehículos</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  background-color: rgb(29, 6, 96);
  padding: 5px;
}
.navbar a {
  color: white;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
}
</style>