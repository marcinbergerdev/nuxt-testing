<template>
  <li class="test-content">
    <header class="test-header">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </header>

    <article class="test-images">
      <img v-for="img in images" :src="img" alt="test" />
    </article>

    <NuxtLink
      class="test-link"
      href="https://github.com/marcinbergerdev/nuxt-verify/blob/main/pages/study.vue"
      >check my code <u>here</u></NuxtLink
    >
  </li>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  images: string[];
}>();
</script>

<style scoped lang="scss">
.test-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 10rem;
  border-bottom: 1px solid var(--text-dark);

  @media (width >= 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "header images"
      "link link";
  }
}

.test-header {
  grid-area: header;
}

.test-images {
  grid-area: images;
}

.test-link {
  grid-area: link;
}
</style>
