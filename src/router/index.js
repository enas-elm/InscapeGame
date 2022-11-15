import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AxeCD from '../views/AxeCD.vue'
import AxeDev from '../views/AxeDev.vue'
import AxeTroisD from '../views/AxeTroisD.vue'


const routes =[
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/axecd',
      name: 'axecd',
      component: AxeCD
    },
    {
      path: '/axedev',
      name: 'axedev',
      component: AxeDev
    },
    {
      path: '/axetroisd',
      name: 'axetroisd',
      component: AxeTroisD
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router



