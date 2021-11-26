<template>
  <div class="container">
    <h3>
      {{ groupName }}<img @click="changeName(id)" src="../../assets/edit.svg" />
    </h3>
    <div class="tasks-section">
      <assigned-task
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :description="task.description"
        :priority="task.priority"
        :color="task.color"
        @removeTask="removeTask"
      ></assigned-task>
    </div>
  </div>
</template>

<script>
import AssignedTask from "./AssignedTask.vue";
export default {
  props: ["id", "groupName", "tasks"],
  emits: ["removeTask", "changeName"],
  components: {
    AssignedTask,
  },
  methods: {
    changeName(groupId) {
      const name = prompt("Give new group name:");
      if (name) {
        this.$emit("changeName", groupId, name);
      }
    },
    removeTask(taskId) {
      this.$emit("removeTask", taskId, this.id);
    },
  },
};
</script>

<style scoped>
img {
  margin-left: 5px;
  width: 15px;
}
</style>
