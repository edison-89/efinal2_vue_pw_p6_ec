<template>
  <FormularioVehiculo :vehiculo="this.vehiculo" :esCrear="true"/>
</template>

<script>
import FormularioVehiculo from "@/components/FormularioVehiculo.vue";

export default {
  data() {
    return {
      vehiculo: {
        placa: null,
        marca: null,
        modelo: null,
        color: null,
        precio: null,
      },
    };
  },
  components: {
    FormularioVehiculo,
  },
};
</script>

<style>
</style>