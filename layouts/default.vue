<template>
  <div class="app-container">
    <header class="header-wrapper">
      <NavContainer />
    </header>

    <main class="homepage-wrapper">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-container {
  width: 100%;
  background-color: #151f2c;
  @media (width >= 1024px) {
    height: 100vh;
    overflow: scroll;
  }
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}
.homepage-wrapper {
  height: calc(100% - 8.4rem); // 6.4rem = navigation
}
</style>
