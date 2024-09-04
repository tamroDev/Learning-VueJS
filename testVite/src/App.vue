<script setup>
import { ref } from "vue";

const isGreen = ref(false);

const toogleColor = () => {
  isGreen.value = !isGreen.value;
};
</script>

<template>
  <h1 :class="{ green: isGreen }">Hello word</h1>
  <button @click="toogleColor">Toggle</button>
</template>

<style scoped>
h1 {
  color: red;
}

.green {
  color: green;
}
</style>
