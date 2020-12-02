<template>
  <v-app>
    <Navbar />
    <v-main class="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './Navbar';


export default {
  name: 'App',
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>