<template>
  <li class="test-content">
    <header class="test-header">
      <h2 class="test-header__title">{{ title }}</h2>
      <p class="test-header__description">{{ description }}</p>
    </header>

    <article class="test-images">
      <img class="test-images__img" v-for="img in images" :src="img" alt="test" />
    </article>

    <NuxtLink class="test-link" href="https://unitytests.netlify.app/">
      → check example here ←
    </NuxtLink>
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
  padding: 15rem 0;
  border-bottom: 1px solid var(--text-dark);

  @media (width >= 1024px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "header images"
      "link images";
  }
}

.test-header {
  grid-area: header;
  text-align: center;

  &__title {
    font-size: 2rem;
  }

  &__description {
    margin: 3rem 0;
    font-size: 1.5rem;
    padding: 0 2rem;
  }

  @media (width >= 1024px) {
    text-align: start;
    &__title {
      margin-left: 2rem;
      font-size: 2rem;
    }

    &__description {
      line-height: 1.4;
    }
  }
}

.test-images {
  grid-area: images;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem 0;

  &__img {
    width: 95%;
    object-fit: cover;
    border: 1px solid var(--light-red);
  }

  @media (width >= 1024px) {
    display: grid;
    flex-direction: row;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    &__img {
      object-fit: fill;
      height: 20rem;
    }
  }
}

.test-link {
  position: relative;
  grid-area: link;
  align-self: center;
  margin-top: 3rem;
  font-size: 2rem;

  @media (width >= 1024px) {
    width: 25rem;
    justify-self: center;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      display: block;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background-color: var(--light-red);
      transition: width 0.3s ease-in-out;
    }

    &:hover::before {
      width: 25rem;
      transition: 0.3s ease-in-out;
    }
  }
}
</style>
