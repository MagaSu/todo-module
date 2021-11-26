<template>
  <li>
    <base-card>
      <header v-bind:style="{ 'background-color': color }">
        <h3>Title: {{ title }}</h3>
        <base-btn close @click="removeTask(id)"></base-btn>
      </header>
      <p>Description: {{ description }}</p>
      <p>Priority: {{ priority }}</p>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "description", "priority", "color"],
  methods: {
    removeTask(taskId) {
      this.$emit("removeTask", taskId);
    },
  },
};
</script>

<style scoped>
li {
  width: 250px;
  margin: 0 auto;
  margin-bottom: 30px;
  list-style: none;
}
header {
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
header h3 {
  color: #fff;
  font-weight: 400;
}
</style>
