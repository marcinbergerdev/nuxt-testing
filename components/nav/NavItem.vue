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
    background-color: #1c5e5b;
  }
}

.nav-link {
  display: block;
  padding: 1rem 2rem;
  font-size: 2rem;
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
