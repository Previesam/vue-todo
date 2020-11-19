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
      ],
    todos: [
      { description: "Code up the dashboard", user: "Samuel", status: "pending", type: "work" },
      { description: "Code up the navbar", user: "Prevail", status: "completed", type: "personal" },
      { description: "Code up the homepage", user: "Samuel", status: "cancelled", type: "work" },
      { description: "Code up the todo page", user: "Osas", status: "completed", type: "personal" },
      { description: "Code up the login", user: "Ferdinand", status: "pending", type: "work" }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
