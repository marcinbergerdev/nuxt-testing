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
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  color: #1c5e5b;

  &.router-link-active {
    color: #00fff2;
    border-bottom: 1px solid #00fff2;
    transition: 0.2s ease-in-out;
  }
  @media (width >= 768px) {
    cursor: pointer;
  }
}
</style>
