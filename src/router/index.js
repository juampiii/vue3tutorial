import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersProfile from '../views/UsersProfile.vue'
import AdminView from '../views/AdminView.vue'
import store from '@/store'
import { users } from '../assets/users'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UsersProfile
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;

  if (!user) {
    await store.dispatch('User/setUser', users[3])
  }
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if (requiresAdmin && (!user || !user.isAdmin))
    next({ name: 'home' })
  else
    next();
})

export default router
