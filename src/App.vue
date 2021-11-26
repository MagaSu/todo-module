<template>
  <the-header></the-header>
  <the-tasks></the-tasks>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheTasks from "./components/tasksComponents/TheTasks.vue";
export default {
  components: {
    TheHeader,
    TheTasks,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
ul {
  list-style: none;
}
</style>
