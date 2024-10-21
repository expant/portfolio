<script setup>
import gsap from 'gsap';
import ContentItemsProjectsItem from './ContentItemsProjectsItem.vue';
import { onMounted } from 'vue';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const projects = [
  { id: 0, title: 'RSS-Агрегатор' },
  { id: 1, title: 'Список заметок' },
  { id: 2, title: 'Генератор различий json/yml' },
  { id: 3, title: 'Your tour' },
];

const showProjects = () => {
  gsap.from('.animate .line', {
    y: 500,
    x: 1000,
    rotation: 90,
    opacity: 0,
    duration: 2,
    ease: 'Second.in',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.animate',
      start: 'top center',
      end: 'center center',
      markers: true,
      scrub: 2,
      toggleActions: 'restart pause reverse none',
    },
  });
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  showProjects();
});

</script>

<template>
  <section class="animate h-screen py-4 px-5 md:py-20 md:px-10">
    <ul class="h-full flex flex-col justify-center items-start gap-y-20">
      <content-items-projects-item
        v-for="{id, title} in projects"
        :key="id"
        :id="id"
      >
      {{ title }}
      </content-items-projects-item>
    </ul>
  </section>
</template>

<style scoped>
</style>
