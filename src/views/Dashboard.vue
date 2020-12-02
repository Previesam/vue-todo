<template>
  <div class="dashboard ma-4">
    <div class="subheading accent--text">
      <em>{{ this.$route.name }}</em>
    </div>
    <v-container fluid>
      <v-row wrap>
        <v-col class="col-6 col-md-4">
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">All Todos</div>
            <div class="mt-7 display-2 primary--text">{{ todos.length }}</div>
          </v-card>
        </v-col>
        <v-col class="col-6 col-md-4">
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Completed</div>
            <div class="mt-7 display-2 success--text">
              {{ completed.length }}
            </div>
          </v-card>
        </v-col>
        <v-col class="col-6 col-md-4">
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Pending</div>
            <div class="mt-7 display-2 error--text">{{ pending.length }}</div>
          </v-card>
        </v-col>
        <v-col class="col-6 col-md-4">
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Cancelled</div>
            <div class="mt-7 display-2 warning--text">
              {{ cancelled.length }}
            </div>
          </v-card>
        </v-col>
        <v-col class="col-6 col-md-4">
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Personal</div>
            <div class="mt-7 display-2 accent--text">{{ personal.length }}</div>
          </v-card>
        </v-col>
        <v-col class="col-6 col-md-4">
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Work</div>
            <div class="mt-7 display-2 pink--text">{{ work.length }}</div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="py-1">
            <v-card-title class="subheading">All Todos</v-card-title>
              <v-simple-table height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Description</th>
                      <th class="text-left">Status</th>
                      <th class="text-left">User</th>
                      <th class="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(todo, i) in todos" :key="i">
                      <td>{{ todo.description }}</td>
                      <td>
                        <v-chip color="accent">
                          {{ todo.status }}
                        </v-chip>
                      </td>
                      <td>{{ todo.user }}</td>
                      <td class="text-center">
                        <v-icon small left>edit</v-icon>
                        <v-icon small>delete</v-icon>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card
          ></v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      completed: [],
      pending: [],
      cancelled: [],
      work: [],
      personal: [],
      todos: this.$store.state.todos,
    };
  },

  // methods: {
  //   changeChipColor: (item) => {
  //     if
  //   }
  // },

  mounted() {
    this.todos.forEach((element) => {
      if (element.status == "completed") return this.completed.push(element);
      else if (element.status == "pending") return this.pending.push(element);
      else if (element.status == "cancelled")
        return this.cancelled.push(element);
      else if (element.type == "work") return this.work.push(element);
      else if (element.type == "personal") return this.personal.push(element);
    });

    this.todos.forEach((element) => {
      if (element.type == "work") return this.work.push(element);
      else if (element.type == "personal") return this.personal.push(element);
    });
  },
};
</script>