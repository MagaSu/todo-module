<template>
  <div class="card">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 150px;
  max-height: fit-content;
  border-radius: 10px;
  border: 1px solid #000;
}
</style>
