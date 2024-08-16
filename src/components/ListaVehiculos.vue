<template>
  <div class="container">
    <div class="table">
      <h1>Tabla de Vehículos</h1>
      <div class="search">
        <button @click="consultar">Consultar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ver</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehiculo in vehiculos" :key="vehiculo.placa">
            <td>{{ vehiculo.placa }}</td>
            <td>{{ vehiculo.marca }}</td>
            <td>{{ vehiculo.modelo }}</td>
            <td>
              <button @click="actionVer(vehiculo.links[0].href)">Ver</button>
            </td>
            <td>
              <button @click="borrar(vehiculo.placa)">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="message" v-if="borrado">
        <h3>¡Se ha borrado exitosamente el vehículo!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAllFacade,
  deleteByPlacaFacade,
} from "@/helpers/clienteVehiculo.js";

export default {
  data() {
    return {
      vehiculos: [],
      borrado: false,
    };
  },
  methods: {
    async consultar() {
      const data = await getAllFacade();
      this.vehiculos = data;
    },

    async borrar(placa) {
      await deleteByPlacaFacade(placa);
      this.consultar();
      this.borrado = true;
    },
    actionVer(url) {
      this.$emit("selectVehi", url);
      this.borrado = false;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 2px;
}

thead tr {
  background-color: #980081;
  color: #ffffff;
  text-align: middle;
}

th,
td {
  padding: 12px 15px;
}

tbody tr {
  border-bottom: 1px solid #dddddd;
}

tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>
