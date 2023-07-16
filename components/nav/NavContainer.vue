<template>
  <NuxtLink to="/" class="header-logo">NuxtLearning</NuxtLink>
  <Hamburger />
  <NavList />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header-logo {
  font-size: 3rem;
  color: var(--light-blue);
}
</style>
