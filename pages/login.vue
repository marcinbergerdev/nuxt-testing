<template>
  <BaseFormRegister>
    <FormKit type="form" @submit="userSignIn">
      <h2 class="form-title">Log in</h2>

      <FormKit
        type="email"
        name="email"
        placeholder="test@test.com"
        validation="required|*email"
        v-model="email"
      />

      <FormKit
        type="password"
        name="password"
        placeholder="qwerty"
        validation="required|length:6"
        autocomplete="current-password"
        :validation-messages="{
          length: 'Try to make your password longer min 6!',
        }"
        v-model="password"
      />
    </FormKit>

    <ModalWarning :is-modal="isModal" @close="closeModal"></ModalWarning>
  </BaseFormRegister>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication",
});

const email = ref<string>("");
const password = ref<string>("");
const isModal = ref(false);

const userSignIn = () => {
  isModal.value = true;
};
const closeModal = () => {
  isModal.value = false;
};
</script>

<style scoped lang="scss">
.modal-leave-to,
.modal-enter-from {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.15s ease-in-out;
}
.modal-leave-from,
.modal-enter-to {
  opacity: 1;
}
</style>
