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

    <Teleport to="body">
      <Transition name="modal" mode="out-in">
        <div class="modal-container" v-if="isModal">
          <dialog open>
            <button class="modal-close" @click="closeModal">back</button>
            <h2 class="modal-header">warning!</h2>
            <p class="modal-description">
              this project is only for Nuxt and Unit Test exercises, it does not have
              login and registration logic
            </p>
          </dialog>
        </div>
      </Transition>
    </Teleport>
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
