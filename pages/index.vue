<template>
  <section class="introduction-container">
    <article class="introduction-box">
      <span class="introduction-box__logo">NuxtLearning</span>
      <NuxtLink class="introduction-box__link" to="/study">Get study</NuxtLink>
    </article>

    <article class="introduction-box">
      <header class="introduction-header">
        <h2 class="introduction-header__title">Nuxt Learn</h2>
      </header>

      <p class="introduction-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem doloremque sequi
        repudiandae delectus quisquam id nesciunt voluptatem esse enim ad. Minima quod
        laboriosam eum dolorem harum autem rerum alias optio animi non. Adipisci
        perspiciatis tempora, cum necessitatibus totam, nam unde dolor molestiae incidunt
        corporis laudantium soluta exercitationem consectetur veniam odio ut.
      </p>
    </article>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.introduction-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65%;

  @media (width >= 1024px) {
    flex-direction: row;
  }
}

.introduction-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem 0;
  margin-top: 20rem;

  @media (width >= 1024px) {
    flex: 1;
    padding: 0 4rem;
  }

  &__logo {
    align-self: flex-start;
    font-size: 3.5rem;
    font-weight: 700;

    @media (width >= 300px) {
      font-size: 4rem;
    }
    @media (width >= 600px) {
      font-size: 7rem;
    }
  }

  &__link {
    align-self: flex-start;
    padding: 1rem 2rem;
    font-size: 2rem;
    border-radius: 50px;
    border: 2px solid var(--dark-blue);
    color: var(--dark-blue);
    transition: 0.15s ease-in-out;

    @media (width >= 1024px) {
      &:hover {
        border: 2px solid var(--light-blue);
        color: var(--light-blue);
        transition: 0.15s ease-in-out;
      }
    }
  }
}
.introduction-header {
  align-self: center;
  font-size: 2rem;
  color: var(--dark-blue);

  @media (width >= 1024px) {
    align-self: flex-start;
  }
}

.introduction-description {
  text-align: center;
  font-size: 1.7rem;
  padding: 0 3rem;

  @media (width >= 300px) {
    padding: 0 5rem;
  }
  @media (width >= 600px) {
    padding: 0 7rem;
  }
  @media (width >= 1024px) {
    text-align: start;
    padding: 0;
  }
}
</style>
