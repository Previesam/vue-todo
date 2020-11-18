import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    links: [
      { name: "Dashboard", icon: "dashboard", url: "/dashboard" },
      { name: "My Todo", icon: "folder", url: "/my-todo" },
      { name: "All Todo", icon: "assignment", url: "/todos" },
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
