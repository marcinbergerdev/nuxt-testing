<template>
  <li>
    <NuxtLink :to="path" class="nav-link"> {{ name }}</NuxtLink>
  </li>
</template>

<script setup lang="ts">
const { path, name } = defineProps<{
  path: string;
  name: string;
}>();
</script>

<style scoped lang="scss">
.nav-link {
  display: block;
  padding: 1rem 2rem;
  font-size: 2rem;
  color: var(--dark-blue);
}

.desktop-nav,
.mobile-nav {
  .nav-link {
    &.router-link-active {
      color: var(--light-blue);
    }
  }
}
</style>
