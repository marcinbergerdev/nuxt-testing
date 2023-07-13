<template>
  <div class="homepage-wrapper">
    <section class="introduction-container">
      <article class="introduction-box get-study">
        <span class="introduction-box__logo">NuxtLearning</span>
        <NuxtLink class="introduction-box__link" to="/study">Get study</NuxtLink>
      </article>

      <article class="introduction-box">
        <header class="introduction-header">
          <h2 class="introduction-header__title">Nuxt Learn</h2>
        </header>

        <p class="introduction-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem doloremque
          sequi repudiandae delectus quisquam id nesciunt voluptatem esse enim ad. Minima
          quod laboriosam eum dolorem harum autem rerum alias optio animi non. Adipisci
          perspiciatis tempora, cum necessitatibus totam, nam unde dolor molestiae
          incidunt corporis laudantium soluta exercitationem consectetur veniam odio ut
          quia molestias delectus. Quo, possimus. Modi iusto corporis, amet iste suscipit
          dolorem dicta tempore maxime qui quibusdam vitae magni! Excepturi nostrum culpa.
        </p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.homepage-wrapper {
  height: calc(100% - 8.4rem); // 6.4rem = navigation
}

.introduction-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65%;
}

.introduction-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem 0;

  padding: 0 8rem;

  &__logo {
    align-self: flex-start;
    font-size: 7rem;
    font-weight: 700;
  }

  &__link {
    align-self: flex-start;
    padding: 1rem 2rem;
    font-size: 2rem;
    border-radius: 50px;
    border: 2px solid #1c5e5b;
    color: #1c5e5b;
    transition: 0.15s ease-in-out;

    @media (width >= 768px) {
      &:hover {
        border: 2px solid #00fff2;
        color: #00fff2;
        transition: 0.15s ease-in-out;
      }
    }
  }
}
.introduction-header {
  align-self: flex-start;
  font-size: 2rem;
  color: #1c5e5b;
}

.introduction-description {
  font-size: 1.7rem;
}
</style>
