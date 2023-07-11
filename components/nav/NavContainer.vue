<template>
  <header class="header-wrapper">
    <NuxtLink to="/" class="header-logo">NuxtVerify</NuxtLink>

    <NavList />
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
}

.header-logo {
  font-size: 1.8rem;
  color: #00fff2;
}
</style>
