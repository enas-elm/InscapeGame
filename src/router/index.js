import { createRouter, createWebHistory } from 'vue-router'
import Jouer from '../views/Jouer.vue'
import Home from '../views/Home.vue'

import AxeCD from '../views/AxeCD.vue'
import AxeCDEB from '../views/AxeCDEB.vue'
import AxeDev from '../views/AxeDev.vue'
import AxeTroisD from '../views/AxeTroisD.vue'
import AxeJV from '../views/AxeJV.vue'

// import Success from '../views/Success.vue'

const routes =[
  {
    path: '/',
    name: 'home',
    component: Home
  },
    {
      path: '/jouer',
      name: 'jouer',
      component: Jouer
    },
    {
      path: '/axecd',
      name: 'axecd',
      component: AxeCD
    },
    {
      path: '/axejv',
      name: 'axejv',
      component: AxeJV
    },
    {
      path: '/axedev',
      name: 'axedev',
      component: AxeDev
    },
    {
      path: '/axe3d',
      name: 'axetroisd',
      component: AxeTroisD
    },
    {
      path: '/axecdeb',
      name: 'axecdeb',
      component: AxeCDEB
    },
    // {
    //   path: '/success',
    //   name: 'success',
    //   component: Success
    // },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router



