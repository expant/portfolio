<script setup>
defineProps({
  color: 'String',
});
</script>

<template>
  <button :class="[color, 'font-montserrat text-xl md:text-3xl hover:text-neutral-400 transition-all uppercase']">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>
