<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';
import { enlargeNavItem } from '../animations/navigation';

const props = defineProps({
  color: 'String',
  navItemId: String,
});

onMounted(() => {
  // gsap.to('.nav-item-2', { scale: 3, x: -200, y: 100, duration: 2 });
  enlargeNavItem(props.navItemId);
}); 
</script>

<template>
  <button
    :id="navItemId"
    :class="[
      color,
      `nav-item-${navItemId}`,
      'font-montserrat text-xl uppercase transition-all', 
      'hover:text-neutral-400',
      'md:text-3xl',
    ]"
  >
    <slot></slot>
  </button>
</template>

<style scoped>

</style>
