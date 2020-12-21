import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Tasks from "../views/Tasks";
import TaskDetail from "../views/TaskDetail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/task/:id',
    name: 'taskDetail',
    component: TaskDetail
  }
]

const router = new VueRouter({
  routes
})

const waitForStorageToBeReady = async (to, from, next) => {
  await store.restored;
  next();
}

router.beforeEach(waitForStorageToBeReady);

export default router
