import { createRouter, createWebHistory } from 'vue-router'
import GdbList from './components/GdbList.vue';
import GameList from './components/GameList.vue';
import BookList from './components/BookList.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'GdbList',
      component: GameList
    },
    {
      path: '/book',
      name: 'BookList',
      component: BookList
    },
    // 其他路由项...
    {
      path: '/game',
      name: 'GameList',
      component: GdbList
    }
  ]
})
export default router;