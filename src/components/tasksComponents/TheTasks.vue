<template>
  <router-view @removeTask="removeTask" @changeName="changeName"></router-view>
</template>

<script>
export default {
  emits: ["removeTask", "changeName"],
  data() {
    return {
      tasks: [],
      // tasks: [
      //   {
      //     id: 1,
      //     groupName: "Main Group",
      //     tasks: [
      //       {
      //         id: 1,
      //         title: "Finish todo module",
      //         description: "I have to finish this module",
      //         priority: "high",
      //         color: "green",
      //       },
      //     ],
      //   },
      //   {
      //     id: 2,
      //     groupName: "Home Tasks",
      //     tasks: [
      //       {
      //         id: 1,
      //         title: "sleep",
      //         description: "I have to take a nap",
      //         priority: "high",
      //         color: "red",
      //       },
      //       {
      //         id: 2,
      //         title: "eat",
      //         description: "I want to eat",
      //         priority: "high",
      //         color: "red",
      //       },
      //     ],
      //   },
      //   {
      //     id: 3,
      //     groupName: "Job",
      //     tasks: [
      //       {
      //         id: 1,
      //         title: "Search job",
      //         description:
      //           "I want to find a job in office, so that i can grow up",
      //         priority: "high",
      //         color: "purple",
      //       },
      //     ],
      //   },
      // ],
    };
  },
  provide() {
    return {
      tasks: this.tasks,
      addTask: this.addTask,
    };
  },
  computed: {
    getTasks() {
      return JSON.parse(localStorage.getItem("tasks"));
    },
  },
  mounted() {
    if (this.getTasks) {
      this.loadTasks(this.getTasks);
    }
  },
  methods: {
    loadTasks(data) {
      this.tasks.push(...data);
    },
    addTask(title, description, priority, color, group) {
      const selectedGroup = this.tasks.find((g) => g.groupName === group);
      const newTask = {
        id: selectedGroup.tasks.length + 1,
        title,
        description,
        priority,
        color,
      };
      selectedGroup.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    removeTask(taskId, groupId) {
      const groupIndex = this.tasks.findIndex((group) => group.id === groupId);
      const group = this.tasks[groupIndex];
      const taskIndex = group.tasks.findIndex((task) => task.id === taskId);
      group.tasks.splice(taskIndex, 1);

      if (group.tasks.length === 0) this.tasks.splice(groupIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    changeName(groupId, newName) {
      const groupIndex = this.tasks.findIndex((group) => group.id === groupId);
      const group = this.tasks[groupIndex];
      group.groupName = newName;
    },
  },
};
</script>
