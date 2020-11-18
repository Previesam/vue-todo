<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon left color="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <!--<v-img-->
        <!--  alt="Vuetify Logo"-->
        <!--  class="shrink mr-2"-->
        <!--  contain-->
        <!--  src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
        <!--  transition="scale-transition"-->
        <!--  width="40"-->
        <!--/>-->

        <v-app-bar-title class="text-uppercase">
          Vue<span class="grey--text">TODO</span>
        </v-app-bar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/about"
        text
        flat outlined
      >
        <span>Login</span>
        <v-icon right>dashboard</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer dark app v-model="drawer" color="primary" width="256">
      <v-list>
        <v-list-item v-for="(link, i) in links" :key="i" router :to="link.url" class="green--text text-uppercase">
          <v-icon left>{{ link.icon }}</v-icon>
          <span class="ml-2">{{ link.name }}</span>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        drawer: this.$store.state.drawer,
        links: this.$store.state.links
      }
    }
  }
</script>