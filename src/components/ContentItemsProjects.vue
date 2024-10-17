<script setup>
import gsap from 'gsap';
import BaseButtonProject from './BaseButtonProject.vue';
import ContentProjectsImage from './ContentProjectsImage.vue';
import { onMounted, reactive, ref } from 'vue';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

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

onMounted(() => {
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
})
</script>

<template>
  <section class="animate h-screen py-4 px-5 md:py-20 md:px-10">
    <ul class="h-full flex flex-col justify-center items-start gap-y-20">
      <li 
        class="relative"
        @mouseover="activeIcon = true"
        @mouseleave="activeIcon = false"
        v-for="{id, title} in projects"
        :key="id"
      >
        <a href="#">
          <span
            :class="[
              'line',
              'inline-block font-montserrat bg-yellow-400 text-lg p-3 uppercase bg-transparent', 
              'md:text-4xl lg:text-5xl xl:text-7xl',
            ]" 
            :data-text="title"
          >
          {{ title }}
          </span>
        </a>
        <!-- <ContentProjectsImage :imageName="imageName" :mouse="mouse" /> -->
        <!-- <span class="img-item absolute inline-block w-0">
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
        </span> -->
      </li>
      
    </ul>
  </section>
  <section class="px-10">
    <h1 class="text-center text-8xl">ABOUT</h1>
    <p class="text-center text-6xl my-10">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eveniet consectetur veniam a eius, laudantium libero est dignissimos quaerat repellat ullam accusantium sapiente veritatis quae temporibus quibusdam ea blanditiis? Repudiandae?
    </p>
    <h1 class="text-center text-8xl">ABOUT</h1>
    <p class="text-center text-6xl">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eveniet consectetur veniam a eius, laudantium libero est dignissimos quaerat repellat ullam accusantium sapiente veritatis quae temporibus quibusdam ea blanditiis? Repudiandae?
    </p>
    <h1 class="text-center text-8xl">ABOUT</h1>
    <p class="text-center text-6xl">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eveniet consectetur veniam a eius, laudantium libero est dignissimos quaerat repellat ullam accusantium sapiente veritatis quae temporibus quibusdam ea blanditiis? Repudiandae?
    </p>
  </section>
</template>

<style scoped>

/* before:content-[attr(data-text)] before:w-0 before:text-white before:overflow-hidden before:absolute before:transition-all before:duration-100 before:ease-[cubic-bezier(0.84, 0, 0.08, 0.99)] before:hover:w-full */
</style>
