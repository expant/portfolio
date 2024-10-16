<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted } from 'vue';

const getGsapFromToPropsByEl = (el, fromX, toX) => {
  const duration = 1.5;

  const from = {
    x: fromX,
    opacity: 0,
    duration,
  };
  const to = {
    x: toX,
    opacity: 1,
    duration,
  };

  return [el, from, to];
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(...getGsapFromToPropsByEl('.title-1', -500, 0));
  gsap.fromTo(...getGsapFromToPropsByEl('.title-3', 500, 0));
});

</script>

<template>
  <section class="h-screen flex flex-col justify-center items-center py-8 uppercase">
    <div class="max-w-8xl w-full">
      <h1 class="title-1 px-8 w-full font-main text-7xl text-left opacity-0 md:text-9xl lg:text-[12rem] xl:text-[15rem]">Elagin</h1>
      <h1 class="title-2 w-full font-montserrat text-2xl text-green-50 p-2 bg-[#333] md:text-4xl lg:text-7xl xl:text-8xl">Frontend-разработка</h1>
      <h1 class="title-3 px-8 w-full font-main text-7xl text-right opacity-0 md:text-9xl lg:text-[12rem] xl:text-[15rem]">Anton</h1>
    </div>
  </section>
</template>

<style scoped>
</style>
