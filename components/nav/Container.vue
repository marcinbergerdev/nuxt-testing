<template>
  <NuxtLink to="/" class="header-logo">Nuxt&UnitTest</NuxtLink>
  <Hamburger />
  <BaseNavigation :style="'desktop-nav'" v-if="isNavigation" />
</template>

<script setup lang="ts">
import { useMenuVisibility } from "../../stores/menuVisibility";

const menu = useMenuVisibility();
const isNavigation = ref(false);

const checkUserWidth = () => {
  if (innerWidth >= 1024) {
    isNavigation.value = true;
    menu.closeMenu();
    return;
  }

  isNavigation.value = false;
};

onMounted(() => {
  if (innerWidth >= 1024) isNavigation.value = true;
  window.addEventListener("resize", checkUserWidth);
});
</script>

<style scoped lang="scss">
.header-logo {
  font-size: 2.5rem;
  color: var(--light-blue);

  @media (width >= 300px) {
    font-size: 3rem;
  }
}
</style>
