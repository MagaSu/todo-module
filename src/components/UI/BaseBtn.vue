<template>
  <router-link v-if="link" :to="to">
    <slot></slot>
  </router-link>
  <button class="close" v-else-if="close">
    <slot></slot>
  </button>
  <button class="btn" v-else>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: "",
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    close: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  height: 10px;
  padding: 10px 15px;
  font: inherit;
  background-color: #2a9d8f;
  border: 1px solid #264653;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s;
}
.btn {
  padding: 5px 15px;
  font: inherit;
  background-color: #2a9d8f;
  border: 1px solid #264653;
  border-radius: 5px;
  transition: all 0.2s;
}
a:hover,
.btn:hover {
  background-color: #264653;
}
.close {
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
}
.close::after {
  display: inline-block;
  font-size: 25px;
  color: #fff;
  content: "\00d7"; /* This will render the 'X' */
  transition: all 0.2s;
}
.close:hover::after {
  color: #000;
}
</style>
