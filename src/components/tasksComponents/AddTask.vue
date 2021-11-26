<template>
  <div class="container">
    <base-btn link :to="'/'">View Tasks</base-btn>
    <div class="form-container">
      <h2>New Task</h2>
      <form @submit.prevent="submitData">
        <div class="title-section">
          <label for="title">Title</label>
          <input ref="titleInput" name="title" type="text" />
        </div>
        <div class="description-section">
          <label for="description">Description</label>
          <textarea ref="descInput" name="description" type="text"></textarea>
        </div>
        <div class="color-section">
          <label for="color">Color</label>
          <input ref="selectedColor" name="color" type="color" />
        </div>
        <div class="list-section">
          <div class="priority-section">
            <label for="priority">Priority</label>
            <select ref="selectedPriority">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low" selected>Low</option>
            </select>
          </div>
          <div class="group-section">
            <label for="group">Group</label>
            <select name="group" ref="selectedGroup">
              <option
                v-for="group in tasks"
                :key="group.id"
                :group="group.groupName"
              >
                {{ group.groupName }}
              </option>
              <option>New Group</option>
            </select>
          </div>
        </div>
        <base-btn>Submit</base-btn>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "add",
  inject: ["addTask", "tasks"],
  methods: {
    submitData() {
      let selectedGroup = this.$refs.selectedGroup.value;
      if (this.tasks.length > 0) {
        var group = this.tasks.find(
          (group) => group.groupName === selectedGroup
        );
      }
      if (!group) {
        selectedGroup = prompt("Enter new group name: ");
        var newGroup = {
          id: this.tasks.length + 1,
          groupName: selectedGroup,
          tasks: [],
        };
        this.tasks.push(newGroup);
        selectedGroup = newGroup.groupName;
      }
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const selectedColor = this.$refs.selectedColor.value;
      const selectedPriority = this.$refs.selectedPriority.value;

      if (enteredTitle.trim() === "" || enteredDesc.trim() === "") {
        alert("Each input must be filled");
        return;
      }
      this.addTask(
        enteredTitle,
        enteredDesc,
        selectedPriority,
        selectedColor,
        selectedGroup
      );
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
h2 {
  border-bottom: 1px solid #000;
}
input,
textarea {
  outline: none;
  box-sizing: border-box;
  border-radius: 2px;
  height: 20px;
  border: none;
}
label {
  float: left;
  font-size: 18px;
}
.form-container {
  text-align: center;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 50px auto;
  background-color: #e9c46a;
  border-radius: 5px;
}
.container {
  width: 90%;
  margin: 30px auto;
}
.form-container div {
  margin: 10px 0;
}
.title-section input {
  width: 100%;
}
.description-section textarea {
  width: 100%;
  resize: none;
  height: 100px;
  max-height: fit-content;
}
.color-section {
  text-align: left;
}
.color-section input {
  margin-left: 10px;
  border: none;
}

.priority-section select {
  float: left;
  margin-left: 10px;
  outline: none;
}
.group-section label {
  margin: 0 10px 0 30px;
}
.list-section {
  display: flex;
  justify-content: flex-start;
}
</style>
