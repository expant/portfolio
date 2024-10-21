<script setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const hoverProject = ref();
const props = defineProps({
  id: Number,
})

onMounted(() => {
  hoverProject.value = gsap.to(`.project-${props.id}`, { paused: true, duration: 0.2 });
});
</script>

<template>
  <li 
    :class="['project', 'relative']"
    @mouseover="hoverProject.play()"
    @mouseleave="hoverProject.reverse()"
  >
    <a
      href="#"
      :class="[
        `project-${props.id} line`,
        'inline-block font-montserrat text-lg p-3 uppercase bg-yellow-400 transition-all',
        'hover:bg-[#333] hover:text-[#fff]',
        'md:text-4xl lg:text-5xl xl:text-7xl',
      ]" 
    >
      <slot></slot>
    </a>
  </li>
</template>

<style scoped>
</style>
