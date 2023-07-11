<template>
  <div class="app-container">
    <NavContainer />

    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.app-container {
  width: 100%;
  height: 100vh;
  background-color: #151f2c;
}
</style>
