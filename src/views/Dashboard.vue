<template>
  <div class="dashboard ma-4">
    <div class="title accent--text"
      ><em>{{ this.$route.name }}</em></div
    >

    <v-container>
      <v-row>
        <v-col>
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">All Todos</div>
            <div class="mt-7 display-2 primary--text">{{ todos.length }}</div>
          </v-card>
        </v-col>
        <v-col>
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Completed</div>
            <div class="mt-7 display-2 success--text">{{ completed.length }}</div>
          </v-card>
        </v-col>
        <v-col>
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Pending</div>
            <div class="mt-7 display-2 error--text">{{ pending.length }}</div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Cancelled</div>
            <div class="mt-7 display-2 warning--text">{{ cancelled.length }}</div>
          </v-card>
        </v-col>
        <v-col>
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Personal</div>
            <div class="mt-7 display-2 accent--text">{{ personal.length }}</div>
          </v-card>
        </v-col>
        <v-col>
          <v-card height="150px" class="py-2 text-center">
            <div class="grey--text subtitle">Work</div>
            <div class="mt-7 display-2 pink--text">{{ work.length }}</div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="py-2">
            <v-container>
              <v-row>
                <v-col> All Todos </v-col>
                <v-spacer></v-spacer>
                <v-col
                  ><v-text-field
                    placeholder="Search"
                    append-icon="search"
                  ></v-text-field
                ></v-col>
              </v-row>
              <v-row>
                <v-col
                  ><v-card flat outlined class="overflow-x-hidden">
                    <v-row>
                      <v-col class="mx-2 subtitle"> Description </v-col>
                      <v-col class="mx-2 subtitle text-center"> Status </v-col>
                      <v-col class="mx-2 subtitle text-center"> User </v-col>
                      <v-col class="mx-2 mr-4 subtitle text-center">
                        Action
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <div v-for="(todo, i) in todos" :key="i">
                      <v-row class="mb-2">
                        <v-col class="mx-2 mt-2 subtitle grey--text">
                          {{ todo.description }}
                        </v-col>
                        <v-col
                          class="mx-2 mt-2 subtitle grey--text text-center"
                        >
                          <v-chip color="primary">
                            {{ todo.status }}
                          </v-chip>
                        </v-col>
                        <v-col
                          class="mx-2 mt-2 subtitle grey--text text-center"
                        >
                          {{ todo.user }}
                        </v-col>
                        <v-col
                          class="mx-2 mr-4 mt-2 subtitle grey--text text-center"
                        >
                          <v-icon small class="mr-2">edit</v-icon>
                          <v-icon small>delete</v-icon>
                        </v-col>
                      </v-row>
                      <v-divider></v-divider>
                    </div> </v-card
                ></v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
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
      else if (element.status == "cancelled") return this.cancelled.push(element);
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