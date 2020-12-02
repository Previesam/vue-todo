<template>
  <div>
    <v-app-bar app color="primary" dark dense>
      <v-text-field
        autofocus
        @mouseout="searching = !searching"
        v-if="searching"
        outlined
        prepend-inner-icon="search"
        placeholder="Search"
        dense="8"
        class="mt-6 mr-4"
        max-width="100%"
        color="accent"
      ></v-text-field>
      <v-app-bar-nav-icon
        v-if="!searching"
        left
        color="grey--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div v-if="!searching" class="d-flex align-center">
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

      <v-spacer v-if="!searching"></v-spacer>
      <v-btn
        v-if="!searching"
        @click="searching = !searching"
        class="hidden-md-and-up"
        text
        rounded
        ><v-icon>search</v-icon></v-btn
      >
      <v-col v-if="!searching" class="col-4 hidden-sm-only hidden-xs-only">
        <v-text-field
          autofocus
          outlined
          prepend-inner-icon="search"
          placeholder="Search"
          dense="8"
          class="mt-6 mr-4"
          max-width="250px"
          color="accent"
        ></v-text-field>
      </v-col>
      <v-btn v-if="!searching" to="/about" text outlined>
        <span>Login</span>
        <v-icon right>dashboard</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      class="sidenav"
      dark
      app
      v-model="drawer"
      color="primary"
      width="256"
    >
      <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          router
          :to="link.url"
          class="accent--text text-uppercase"
        >
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
      links: this.$store.state.links,
      searching: null,
    };
  },
};
</script>
