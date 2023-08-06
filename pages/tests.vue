<template>
  <ul class="tests-list">
    <ContentTests
      v-for="test in tests"
      :title="test.title"
      :description="test.description"
      :images="test.images"
    ></ContentTests>
  </ul>
</template>

<script setup lang="ts">
interface Tests {
  title: string;
  description: string;
  images: string[];
}

const tests = ref<Tests[]>([
  {
    title: "Numbers Validation",
    description: `The project in JavaScript/TypeScript is a validator that takes two values and checks if they are numbers.
      It uses unit tests to verify the correctness of the input data and calculates their sum if both are numbers.
      In case the input data is not numeric, it displays an appropriate error message. This allows for automated testing and ensures the applications correctness in various scenarios.`,
    images: [
      "/images/tests/numbers/test1.png",
      "/images/tests/numbers/test2.png",
      "/images/tests/numbers/test3.png",
      "/images/tests/numbers/test4.png",
    ],
  },
]);
</script>

<style scoped lang="scss">
.tests-list {
  margin-top: 5rem;
  @media (width >= 1024px) {
    margin-top: 10rem;
  }
}
</style>
