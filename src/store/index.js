import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";
import localforage from "localforage";

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  kay: 'random_string',
  strictMode: true,
  asyncStorage: true,
  storage: localforage
})

export default new Vuex.Store({
  strict: true,
  state: {
    tasks: []
  },
  mutations: {
    CREATE_TASK (state, task) {
      state.tasks.push(task)
    },
    UPDATE_TASK_STATUS (state, task) {
      const index = state.tasks.findIndex(function(t, i){
        return t.id === task.id
      });
      Vue.set(state.tasks, index, task)
    },
    REMOVE_TASK (state, task) {
      state.tasks = state.tasks.filter(t => t.id !== task.id)
    },
    REMOVE_TASKS (state, task) {
      state.tasks = []
    },
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
  },
  actions: {
  },
  modules: {
  },
  getters: {
    task (state) {
      return function (id) {
        return state.tasks.find(t => t.id === parseInt(id))
      }
    }
  },
  plugins: [vuexLocal.plugin]
})
