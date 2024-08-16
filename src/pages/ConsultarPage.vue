<template>
  <ListaVehiculos @selectVehi="consultar" />
  <FormularioVehiculo
    :vehiculo="this.vehiculo"
    v-if="this.vehiculo"
    :esCrear="false"
  />
</template>

<script>
import ListaVehiculos from "@/components/ListaVehiculos.vue";
import FormularioVehiculo from "@/components/FormularioVehiculo.vue";
import { getByPlacaFacade } from "../helpers/clienteVehiculo.js";
export default {
  data() {
    return {
      showForm: false,
      vehiculo: null,
    };
  },
  components: {
    ListaVehiculos,
    FormularioVehiculo,
  },
  methods: {
    async consultar(link) {
      const data = await getByPlacaFacade(link);
      this.vehiculo = {
        placa: data.placa,
        marca: data.marca,
        modelo: data.modelo,
        color: data.color,
        precio: data.precio,
      };
      this.showForm = true;
    },
  },
};
</script>

<style></style>
