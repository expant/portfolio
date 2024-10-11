<script setup>
import gsap from 'gsap';
import TheHeader from './components/views/TheHeader.vue';
import ContentItems from './components/ContentItems.vue';
import { onMounted } from 'vue';

</script>

<template>
  <div class="h-screen bg-green-50 text-[#333]">
    <TheHeader />
    <ContentItems />
  </div>
</template>

<style scoped>
</style>
