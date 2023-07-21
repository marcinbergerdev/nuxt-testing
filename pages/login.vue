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
