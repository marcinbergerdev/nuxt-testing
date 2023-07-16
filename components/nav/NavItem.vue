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
li:nth-child(5) {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1.5rem;
    width: 1px;
    height: 100%;
    background-color: var(--dark-blue);
  }
}

.nav-link {
  display: block;
  padding: 1rem 2rem;
  font-size: 2rem;
  color: var(--dark-blue);

  &.router-link-active {
    color: var(--light-blue);
    border-bottom: 1px solid var(--light-blue);
    transition: 0.2s ease-in-out;
  }
  @media (width >= 768px) {
    cursor: pointer;
  }
}
</style>
