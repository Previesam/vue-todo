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

        <div class="text-uppercase">
          Vue<span class="accent--text">TODO</span>
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/about"
        text
        outlined
      >
        <span>Login</span>
        <v-icon right>dashboard</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer class="sidenav" dark app v-model="drawer" color="primary" width="256">
      <v-list>
        <v-list-item v-for="(link, i) in links" :key="i" router :to="link.url" class="accent--text text-uppercase">
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
