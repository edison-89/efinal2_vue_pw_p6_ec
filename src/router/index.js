import { createRouter, createWebHashHistory } from "vue-router";

import ConsultarPage from "../pages/ConsultarPage.vue";
import CrearPage from "../pages/CrearPage.vue";
import InicioPage from "../pages/InicioPage.vue";

const routes = [
    {
        path: "/crear",
        component: CrearPage,
    },
    {
        path: "/consultar",
        component: ConsultarPage,
    },
    {
        path: "/",
        component: InicioPage,
    }
];
const router = createRouter({
    history: createWebHashHistory(),
      routes,
  });
  export default router;