<template>
  <div class="dashboard ma-4">
    <v-text class="subheading green--text"><em>{{ this.$route.name }}</em></v-text>
    
    <v-container>
      <v-row>
        <v-col>
          <v-card class="text-center" xs6 sm6 md6 lg4>Samuel</v-card>
          <v-card class="text-center" xs6 sm6 md6 lg4>Samuel</v-card>
          <v-card class="text-center" xs6 sm6 md6 lg4>Samuel</v-card>
          <v-card class="text-center" xs6 sm6 md6 lg4>Samuel</v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <v-card flat color="white" height="250px" width="250px">
      
    </v-card>
    
  </div>
</template>

<script>
  export default {
    name: "Dashboard",
    data: () => {
      
      return {
        // todo: this.$store.state.todo
      }
    }
  }
</script>