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

const playMarquee = (marquee, marqueeContent) => {
  const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10);
  const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue('column-gap'), 10);
  const distanceToTranslate = -1 * (gap + width);

  gsap.fromTo(
    marquee.children,
    { x: 0 },
    { x: distanceToTranslate, duration: 8, ease: 'none', repeat: -1 },
  );
};

onMounted(() => {
  const marquee = document.querySelector('.marquee');
  const marqueeContent = marquee.querySelector('.marquee-content');
  playMarquee(marquee, marqueeContent);

  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(...getGsapFromToPropsByEl('.title-1', -500, 0));
  gsap.fromTo(...getGsapFromToPropsByEl('.title-3', 500, 0));

  window.addEventListener('resize', () => playMarquee(marquee, marqueeContent));
});

</script>

<template>
  <section class="h-screen flex flex-col justify-center items-center py-8 uppercase">
    <div class="max-w-8xl w-full">
      <h1 class="title-1 px-8 w-full font-main text-7xl text-left opacity-0 md:text-9xl lg:text-[12rem] xl:text-[15rem]">Elagin</h1>
      <section :class="[
        'marquee',
        'flex w-full overflow-hidden font-montserrat text-2xl text-[#333] gap-x-5 bg-yellow-400', 
        'md:text-4xl lg:text-7xl xl:text-8xl',
      ]">
        <div class="marquee-content min-w-full flex-auto flex-grow-0 flex-shrink-0 gap-5">
          <div>Frontend-разработка</div>
        </div>
        <div class="marquee-content min-w-full flex-auto flex-grow-0 flex-shrink-0 gap-5">
          <div>Frontend-разработка</div>
        </div>
      </section>

        <div class="flex flex-row flex-nowrap">
        
        </div>
      <h1 class="title-3 px-8 w-full font-main text-7xl text-right opacity-0 md:text-9xl lg:text-[12rem] xl:text-[15rem]">Anton</h1>
    </div>
  </section>
</template>

<style scoped>
</style>
