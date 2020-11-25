<template>
  <div class="my-todo ma-4">
    <v-row>
      <v-col class="col-4 col-sm-4">
        <div class="subheading accent--text">
          <em>{{ this.$route.name }}</em>
        </div>
      </v-col>
      <v-spacer></v-spacer>
       <v-col class="col-3 col-sm-2">
        <div>
          <v-btn class="hidden-sm-and-down" text outlined color="primary">
            <v-icon small left>add</v-icon>
            <span class="text-capitalize small">New</span>
          </v-btn>
          <v-btn rounded class="hidden-md-and-up" text small outlined color="primary">
            <v-icon small>add</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col class="col-3 col-sm-2">
        <div>
          <v-btn class="hidden-sm-and-down"  text outlined color="primary">
            <v-icon small left>input</v-icon>
            <span class="text-capitalize small">Import</span>
          </v-btn>
           <v-btn rounded class="hidden-md-and-up" small text outlined color="primary">
            <v-icon small>input</v-icon>
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