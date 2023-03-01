import { createRouter, createWebHistory } from 'vue-router'
import HomeStock from '../views/HomeStock.vue'
import ShoppingList from '../views/ShoppingList.vue'
import Create from '../views/Create.vue'
import AddItem from '../views/AddItem.vue'
import Pending from '../views/Pending.vue'

const routes = [
  {
    path: '/home-stock',
    name: 'home stock',
    component: HomeStock
  },
  {
    path: '/home-stock/create',
    name: 'create',
    component: Create
  },
  {
    path: '/shopping-list',
    name: 'shopping list',
    component: ShoppingList
  },
  {
    path: '/shopping-list/add-item',
    name: 'add item',
    component: AddItem
  },
  {
    path: '/pending',
    name: 'pending',
    component: Pending
  },
  {
    path: '/',
    redirect: '/home-stock',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

