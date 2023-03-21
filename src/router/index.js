import { createRouter, createWebHistory } from 'vue-router'
import HomeStock from '../views/HomeStock.vue'
import ShoppingList from '../views/ShoppingList.vue'
import Create from '../views/Create.vue'
import AddItem from '../views/AddItem.vue'
import Pending from '../views/Pending.vue'
import Account from '../views/Account.vue'
import LogIn from '../views/LogIn.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { async } from '@firebase/util'

const routes = [
  {
    path: '/',
    redirect: '/home-stock',
  },
  {
    path: '/home-stock',
    name: 'home stock',
    component: HomeStock,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/home-stock/create',
    name: 'create',
    component: Create,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/shopping-list',
    name: 'shopping list',
    component: ShoppingList,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/shopping-list/add-item',
    name: 'add item',
    component: AddItem,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/pending',
    name: 'pending',
    component: Pending,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/log-in',
    name: 'login',
    component: LogIn
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject)=> {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user)=> {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}
router.beforeEach(async(to, from, next)=> {
  if(to.matched.some((record)=> record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      next("/log-in");
    }
  } else {
    next();
  }
});

export default router

