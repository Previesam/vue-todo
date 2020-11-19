<template>
  <div class="my-todo ma-4">
    <v-row>
      <v-col class="col-auto">
        <div class="title accent--text">
          <em>{{ this.$route.name }}</em>
        </div>
      </v-col>
      <v-spacer></v-spacer>
       <v-col class="col-auto">
        <div>
          <v-btn text outlined color="primary">
            <v-icon small left>add</v-icon>
            <span class="text-capitalize small">New</span>
          </v-btn>
        </div>
      </v-col>
      <v-col class="col-auto mr-10">
        <div>
          <v-btn text outlined color="primary">
            <v-icon small left>input</v-icon>
            <span class="text-capitalize small">Import</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-container fluid>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="todos"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "My Todo",
  data() {
    return {
      headers: [
        {
          text: "Description",
          align: "start",
          sortable: true,
          value: "description",
        },
        {
          text: "Status",
          align: "start",
          sortable: true,
          value: "status",
        },
        {
          text: "User",
          align: "start",
          sortable: true,
          value: "user",
        },
        {
          text: "Type",
          align: "start",
          sortable: true,
          value: "type",
        },
      ],
      todos: this.$store.state.todos,
    };
  },
};
</script>