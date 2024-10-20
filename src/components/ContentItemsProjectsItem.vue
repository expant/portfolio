<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';

const hoverProject = ref();

onMounted(() => {
  hoverProject.value = gsap.to('.project', { paused: true, x: 20, duration: 0.2 });
});
</script>

<template>
  <li 
    class="project relative"
    @mouseover="hoverProject.play()"
    @mouseleave="hoverProject.reverse()"
  >
    <a 
      href="#"
      :class="[
        'line',
        'inline-block font-montserrat bg-yellow-400 text-lg p-3 uppercase bg-transparent', 
        'md:text-4xl lg:text-5xl xl:text-7xl',
      ]" 
    >
      <slot></slot>
    </a>
  </li>
</template>

<style scoped>
</style>
