<script setup>
import gsap from 'gsap';
import BaseButtonProject from './BaseButtonProject.vue';
import ContentProjectsImage from './ContentProjectsImage.vue';
import { onMounted, reactive, ref } from 'vue';

const projects = [
  { 
    id: 0, 
    title: 'RSS-Агрегатор',
    imageName: 'rss',
  },
  { 
    id: 1,
    title: 'Список заметок',
    imageName: 'notes',
  },
  { 
    id: 2, 
    title: 'Генератор различий json/yml',
    imageName: 'diff',
  },
  { 
    id: 3,
    title: 'Your tour',
    imageName: 'yourtour',
  },
];

// const mouse = reactive({
//   over: false,
//   leave: false,
// })

onMounted(() => {
 
})

const showImage = gsap.to('.img-item', { width: '600px', duration: 2 });
</script>

<template>
  <section class="h-screen py-4 px-5 md:py-20 md:px-10">
    <ul class="h-full flex flex-col justify-center gap-y-20">
      <li 
        class="relative"
        @mouseover="showImage.play()"
        @mouseleave="showImage.reverse()"
        v-for="{id, title, imageName} in projects"
        :key="id"
      >
        <a href="#">
          <span
            class="font-main text-7xl uppercase" 
            :data-text="title"
          >
          {{ title }}
        </span>
        </a>
        <!-- <ContentProjectsImage :imageName="imageName" :mouse="mouse" /> -->
        <span class="img-item absolute inline-block w-0">
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
      </li>
      
    </ul>
  </section>
</template>

<style scoped>

/* before:content-[attr(data-text)] before:w-0 before:text-white before:overflow-hidden before:absolute before:transition-all before:duration-100 before:ease-[cubic-bezier(0.84, 0, 0.08, 0.99)] before:hover:w-full */
</style>
