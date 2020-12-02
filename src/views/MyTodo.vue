<template>
  <div class="my-todo ma-4">
    <v-dialog scrollable v-model="addNewDialog" max-width="1000px">
      <v-card>
        <v-card-title> Add New </v-card-title>
        <v-card-content>
          <v-row class="justify-center px-5 py-5">
            <v-col class="col-12 col-sm-12 col-md-6">
              <v-text-field
                outlined
                dense
                prepend-icon="info"
                label="Details"
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="col-12 col-sm-12 col-md-6">
              <v-text-field
                prepend-icon="web"
                outlined
                dense
                type="date"
                label="Due Date"
              ></v-text-field>
            </v-col>
            <v-col class="col-12 col-sm-12 col-md-6">
              <v-text-field
                outlined
                dense
                prepend-icon="account_circle"
                label="User"
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="col-12 col-sm-12 col-md-6">
              <v-select
                :items="selectItems"
                prepend-icon="list"
                outlined
                dense
                v-model="todo"
                type="select"
                label="Type"
              >
                <v-option value="Samuel">Samuel</v-option>
              </v-select>
            </v-col>
          </v-row>
          <v-row class="px-10 pb-10"
            ><v-spacer></v-spacer>
            <v-btn class="mr-3" @click="addNewDialog = false" text outlined color="primary">Cancel</v-btn>
            <v-btn outlined color="accent">Save</v-btn>
          </v-row>
        </v-card-content>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col class="col-4 col-sm-4">
        <div class="subheading accent--text">
          <em>{{ this.$route.name }}</em>
        </div>
      </v-col>
      <v-spacer></v-spacer>

      <div class="mr-2">
        <v-btn
          @click="addNewDialog = !addNewDialog"
          class="hidden-sm-and-down"
          text
          outlined
          color="primary"
        >
          <v-icon small left>add</v-icon>
          <span class="text-capitalize small">New</span>
        </v-btn>
        <v-btn
          @click="addNewDialog = !addNewDialog"
          rounded
          class="hidden-md-and-up"
          text
          small
          outlined
          color="primary"
        >
          <v-icon small>add</v-icon>
        </v-btn>
      </div>
      <div class="mr-5">
        <v-btn class="hidden-sm-and-down" text outlined color="primary">
          <v-icon small left>input</v-icon>
          <span class="text-capitalize small">Import</span>
        </v-btn>
        <v-btn
          rounded
          class="hidden-md-and-up"
          small
          text
          outlined
          color="primary"
        >
          <v-icon small>input</v-icon>
        </v-btn>
      </div>
    </v-row>

    <v-container fluid>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="todos"
            :items-per-page="5"
            class="elevation-3"
          >
            <template slot="actions">
              <v-icon>search</v-icon>
            </template>
          </v-data-table>
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
      addNewDialog: null,
      selectItems: ['Personal', 'Work'],
    };
  },
};
</script>