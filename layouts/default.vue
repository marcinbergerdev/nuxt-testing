<template>
  <div class="app-container">
    <teleport to="body">
      <div class="mobile-backdrop" :class="menuActivity">
        <BaseNavigation :style="'mobile-nav'" />
      </div>
    </teleport>

    <header class="header-wrapper">
      <NavContainer />
    </header>

    <main class="homepage-wrapper">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useMenuVisibility } from "../stores/menuVisibility";
import { onBeforeRouteUpdate } from "nuxt/app";

const menu = useMenuVisibility();

const menuActivity = computed(() => {
  return { "menu-opened": menu.isActive };
});

onBeforeRouteUpdate(() => {
  if (innerWidth < 1024) menu.closeMenu();
});
</script>

<style scoped lang="scss">
.app-container {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: var(--bg-color);
}
.mobile-backdrop {
  position: absolute;
  top: 0;
  z-index: 100;
  left: -100%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  transition: 0.2s ease-in-out;
  background-color: rgb(49, 48, 48);
}

.menu-opened {
  transform: translateX(100%);
  transition: 0.2s ease-in-out;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}
.homepage-wrapper {
  margin-top: 20rem;
  height: calc(100% - 8.4rem); // 6.4rem = navigation

  @media (width >= 1024px) {
    margin: 0;
  }
}
</style>
