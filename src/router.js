import { createRouter, createWebHistory } from "vue-router";

import AddTask from "./components/tasksComponents/AddTask.vue";
import StoredTasks from "./components/tasksComponents/StoredTasks.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "view", path: "/", component: StoredTasks },
    { name: "add", path: "/add", component: AddTask },
  ],
});

export default router;
