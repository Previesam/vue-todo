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
    <v-navigation-drawer app v-model="drawer" color="primary" width="256">
      <p>Samuel</p>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        drawer: null
      }
    },
    
    computed: {
            isComputer() {
                return this.$vuetify.breakpoint.name !== 'xs';
            },
            
            showDrawer() {
                return this.isLarge || this.drawer
            }
    }
  }
</script>