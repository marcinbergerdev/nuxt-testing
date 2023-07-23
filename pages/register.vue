<template>
  <BaseFormRegister>
    <FormKit type="form" @submit="userRegister">
      <h2 class="form-title">Sign up</h2>

      <FormKit
        type="email"
        name="email"
        placeholder="admin@admin.com"
        validation="required|*email"
        v-model="email"
      />

      <FormKit
        type="password"
        name="password"
        placeholder="qwerty"
        validation="required|length:6"
        autocomplete="password"
        :validation-messages="{
          length: 'Try to make your password longer min 6!',
        }"
        v-model="password"
      /><FormKit
        type="password"
        name="password_confirm"
        placeholder="qwerty"
        validation="required|confirm"
        autocomplete="confirm-password"
        :validation-messages="{
          length: 'Try to make your password longer min 6!',
        }"
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

const userRegister = () => {
  isModal.value = true;
};

const closeModal = () => {
  isModal.value = false;
};
</script>

<style scoped lang="scss"></style>
