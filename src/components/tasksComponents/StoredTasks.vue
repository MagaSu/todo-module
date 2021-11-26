<template>
  <div class="container">
    <base-btn link :to="'/add'">Add Task</base-btn>
    <div class="group-section">
      <tasks-groups
        v-for="group in tasks"
        :key="group.id"
        :id="group.id"
        :groupName="group.groupName"
        :tasks="group.tasks"
        @removeTask="removeTask"
        @changeName="changeName"
      ></tasks-groups>
    </div>
  </div>
</template>

<script>
import TasksGroups from "./TasksGroups.vue";
export default {
  inject: ["tasks"],
  emits: ["removeTask", "changeName"],
  components: {
    TasksGroups,
  },
  methods: {
    changeName(groupId, newName) {
      this.$emit("changeName", groupId, newName);
    },
    removeTask(taskId, groupId) {
      this.$emit("removeTask", taskId, groupId);
    },
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 30px auto;
}
.group-section {
  margin: 0 auto;
  text-align: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
