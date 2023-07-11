<template>
  <li>
    <NuxtLink :to="path"> {{ name }}</NuxtLink>
  </li>
</template>

<script setup lang="ts">
const { path, name } = defineProps<{
  path: string;
  name: string;
}>();
</script>

<style scoped lang="scss">


</style>
