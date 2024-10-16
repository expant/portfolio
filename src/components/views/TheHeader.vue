<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';
import BaseButtonNavItem from '../BaseButtonNavItem.vue';
import BaseButtonLogo from '../BaseButtonLogo.vue';



</script>

<template>
  <header :class="[
    'backdrop-blur-xl fixed w-full flex justify-between items-center px-5 py-2.5 font-pirata bg-transparent',
    'md:px-10 md:py-5'
  ]">
      <base-button-nav-item>projects</base-button-nav-item>
      <BaseButtonLogo
        size="text-4xl"
      />
      <base-button-nav-item color="text-[#333]">about</base-button-nav-item>
  </header>
</template>

<style scoped>
</style>
