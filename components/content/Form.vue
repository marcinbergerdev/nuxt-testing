<template>
  <form class="form-numbers">
    <div class="form-numbers__box">
      <label for="value1">First Number</label>
      <input type="text" />
    </div>

    <div class="form-numbers__box">
      <label for="value2">Second Number</label>
      <input type="text" />
    </div>

    <button class="form-numbers__button">Show Result</button>
  </form>

  <div class="result-container" v-if="false">
    <p>resultat</p>
  </div>

  <div class="test-image">
    <img src="../../../assets/images/test1.png" alt="example-test" />
    <img src="../../../assets/images/test1.png" alt="example-test" />
    <img src="../../../assets/images/test1.png" alt="example-test" />
    <img src="../../../assets/images/test1.png" alt="example-test" />
  </div>

  <NuxtLink
    class="test-link"
    to="https://github.com/marcinbergerdev/nuxt-verify/blob/main/pages/study.vue"
    >check my test <u>here</u></NuxtLink
  >
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.form-numbers {
  display: flex;
  flex-direction: column;
  grid-area: form;

  &__box {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 0.7rem;

    margin-top: 1.5rem;
    width: min(40rem, 80%);
    font-size: 1.5rem;

    input {
      background-color: var(--text-dark);
      border: 0;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      outline: none;

      &:focus {
        background-color: #fff;
      }
    }
  }

  &__button {
    align-self: center;
    margin-top: 5rem;
    padding: 0.7rem;
    width: 10rem;
    background-color: transparent;
    border: 1px solid var(--text-dark);
    border-radius: 1rem;

    @media (width >= 1024px) {
      cursor: pointer;
      font-weight: 600;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: var(--text-dark);
        color: var(--bg-color);
        transition: 0.2s ease-in-out;
      }
    }
  }
}

.result-container {
  grid-area: result;
  text-align: center;
  font-size: 2rem;
}

.test-image {
  position: relative;
  grid-area: img;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  text-align: center;

  img {
    width: 95%;
  }
}

.test-link {
  grid-area: link;
  text-align: center;
  font-size: 2rem;
}
</style>
