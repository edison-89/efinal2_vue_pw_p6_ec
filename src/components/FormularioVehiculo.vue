<template>
  <div class="container">
    <h3 v-if="showMessage">{{ message }}</h3>
    <div class="form">
      <h1>Formulario Vehículo</h1>

      <div class="form-group">
        <label for="placa">Placa</label>
        <input
          type="text"
          v-model="placa"
          @click="hiddenMessage"
          :disabled="!this.esCrear"
        />
      </div>
      <div class="form-group">
        <label for="marca">Marca</label>
        <input
          type="text"
          v-model="marca"
          @click="hiddenMessage"
          :disabled="!this.esCrear"
        />
      </div>
      <div class="form-group">
        <label for="modelo">Modelo</label>
        <input
          type="text"
          v-model="modelo"
          @click="hiddenMessage"
          :disabled="!this.esCrear"
        />
      </div>
      <div class="form-group">
        <label for="color">Color</label>
        <input
          type="text"
          v-model="color"
          @click="hiddenMessage"
          :disabled="!this.esCrear"
        />
      </div>
      <div class="form-group">
        <label for="precio">Precio</label>
        <input
          type="number"
          v-model="precio"
          @click="hiddenMessage"
          :disabled="!this.esCrear"
        />
      </div>

      <button @click="guardar" v-if="this.esCrear">Guardar</button>
    </div>
  </div>
</template>

<script>
import { saveFacade } from "../helpers/clienteVehiculo.js";
export default {
  props: {
    vehiculo: {
      type: Object,
      required: true,
    },
    esCrear: {
      type: Boolean,
      defaul: true,
    },
  },

  data() {
    return {
      placa: this.vehiculo.placa,
      marca: this.vehiculo.marca,
      modelo: this.vehiculo.modelo,
      color: this.vehiculo.color,
      precio: this.vehiculo.precio,
      showMessage: false,
      message: "¡Se ha guardado con exito el vehículo!",
    };
  },
  methods: {
    async guardar() {
      const vehiculo = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        precio: this.precio,
      };
      const data = await saveFacade(vehiculo);
      this.showMessage = true;
      this.reset();
    },
    reset() {
      this.placa = null;
      this.marca = null;
      this.modelo = null;
      this.color = null;
      this.precio = null;
    },
    hiddenMessage() {
      this.showMessage = false;
    },
  },
  updated() {
    if (!this.esCrear) {
      this.placa = this.vehiculo.placa;
      this.marca = this.vehiculo.marca;
      this.modelo = this.vehiculo.modelo;
      this.color = this.vehiculo.color;
      this.precio = this.vehiculo.precio;
    }
  },
};
</script>

<style>
</style>
