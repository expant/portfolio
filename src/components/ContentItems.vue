<script setup>
import gsap from 'gsap';
import ContentItemsHeader from './ContentItemsHeader.vue';
import ContentItemsProjects from './ContentItemsProjects.vue';
import ContentItemsAbout from './ContentItemsAbout.vue';
</script>

<template>
  <div class="font-main">
    <ContentItemsHeader />
    <ContentItemsProjects />
    <ContentItemsAbout />
  </div>
</template>

<style scoped>
</style>
