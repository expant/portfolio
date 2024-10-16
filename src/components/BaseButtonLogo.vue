<script setup>
import gsap from 'gsap';

defineProps({
  size: String,
  colorA: String,
  colorE: String,
  gap: String,
});
</script>

<template>
  <button :class="['flex', gap, size]">
    <span :class="colorA">A</span>
    <span :class="colorB">E</span>
  </button>
</template>

<style scoped>
</style>
