<template>
  <ul class="tests-list">
    <li class="tests-content">
      <ContentForm />
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.tests-list {
  margin-top: 5rem;
  @media (width >= 1024px) {
    margin-top: 10rem;
  }
}

.tests-content {
  display: grid;
  grid-template-rows: 2fr 1fr 2fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  grid-template-areas:
    "form"
    "result"
    "img"
    "link";
  gap: 1rem;
  padding-bottom: 10rem;
  border-bottom: 1px solid var(--text-dark);

  @media (width >= 1024px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "form img"
      "result link";
  }
}
</style>
