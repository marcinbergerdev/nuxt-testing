<template>
  <Teleport to="body">
    <Transition name="modal" mode="out-in">
      <div class="modal-container" v-if="isModal">
        <dialog open>
          <button class="modal-close" @click="emit('close')">back</button>
          <h2 class="modal-header">warning!</h2>
          <p class="modal-description">
            this project is only for Nuxt and Unit Test exercises, it does not have login
            and registration logic
          </p>
        </dialog>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  isModal: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped></style>
