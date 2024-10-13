<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';

defineProps({
  imageName: String,
  mouse: Object,
});


const showImage = gsap.to('.img-item', { width: '100%', duration: 2 });
const hideImage = gsap.to('.img-item', { width: '0%', duration: 2 });


</script>

<template>
  <span class="absolute inline-block -right-10 w-0">
    <img 
      v-if="imageName === 'rss'" 
      src="@/assets/projects/rss.jpg" 
      :alt="imageName"
    >
    <img 
      v-if="imageName === 'notes'" 
      src="@/assets/projects/notes.jpg" 
      :alt="imageName"
    >
    <img 
      v-if="imageName === 'diff'" 
      src="@/assets/projects/diff.jpg" 
      :alt="imageName"
    >
    <img 
      v-if="imageName === 'yourtour'" 
      src="@/assets/projects/yourtour.jpg" 
      :alt="imageName"
    >
  </span>
</template>

<style scoped>
</style>
