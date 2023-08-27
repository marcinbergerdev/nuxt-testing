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
    description: `The project in JavaScript/TypeScript and Unity Testing: is a validator that takes two values and checks if they are numbers.
      It uses unit tests to verify the correctness of the input data and calculates their sum if both are numbers.
      In case the input data is not numeric, it displays an appropriate error message. This allows for automated testing and ensures the applications correctness in various scenarios.`,
    images: [
      "/images/tests/numbers/test1.png",
      "/images/tests/numbers/test2.png",
      "/images/tests/numbers/test3.png",
      "/images/tests/numbers/test4.png",
    ],
  },

  {
    title: "Strings Validation",
    description: `The project in JavaScript/TypeScript and Unity Testing: is a validator that takes that takes four strings as input. 
      The validator performs comprehensive validation and conversion tasks: it matches and validates the provided strings against specific criteria.
      Additionally, it transforms one of the input values labeled as 'age' into a numeric format. The validator then checks if all the conditions align successfully; 
      if they do, it presents the user with the individual's information. However, if any of the conditions fail, it returns an error message, 
      providing a reliable way to ensure data accuracy and prompt user feedback.`,
    images: [
      "/images/tests/strings/test1.png",
      "/images/tests/strings/test2.png",
      "/images/tests/strings/test3.png",
      "/images/tests/strings/test4.png",
    ],
  },
  {
    title: "Request Api Validation",
    description: `The project in JavaScript/TypeScript and Unity Testing: "In my recent mini project developed using TypeScript, I created a simple web application focused on fetching animal images. 
      Upon clicking the 'Fetch' button, the application utilizes the Fetch API to retrieve a collection of 10 captivating animal images. 
      The TypeScript codebase ensures strong typing and enhances code quality. To ensure the reliability and accuracy of the application, 
      I also implemented unit tests that validate the fetching mechanism and the appropriate display of animal images. This project not only allowed me to practice TypeScript and 
      asynchronous programming but also underscored the importance of testing in maintaining robust software."`,
    images: [
      "/images/tests/apis/test1.png",
      "/images/tests/apis/test2.png",
      "/images/tests/apis/test3.png",
      "/images/tests/apis/test4.png",
    ],
  },
]);
</script>

<style scoped lang="scss">
.tests-list {
  margin-top: 5rem;

  li:first-child {
    padding-top: 0;
  }

  @media (width >= 1024px) {
    margin-top: 10rem;
  }
}
</style>
