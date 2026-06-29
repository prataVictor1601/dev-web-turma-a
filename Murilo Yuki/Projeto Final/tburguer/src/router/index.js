import { createRouter, createWebHistory } from 'vue-router'
import MenuVue from '../views/MenuVue.vue'
import PedidosVue from '../views/PedidosVue.vue'
import ConfiguracaoPedidosVue from '../views/ConfiguracaoPedidosVue.vue'


const routes = [
  {
    path: "/",
    name: "Menu",
    component:MenuVue
  },
  {
    path: "/Menu",
    name: "Menu",
    component :MenuVue
  },
  {
    path: "/Pedido",
    name: "Pedido",
    component: PedidosVue
  },
  {
    path: "/Config",
    name: "Config",
    component:ConfiguracaoPedidosVue
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
