<template>
  <Teleport to="body">
    <Transition name="modal" mode="out-in">
      <div class="modal-container" v-if="isModal">
        <dialog class="modal-dialog" open>
          <button class="modal-close" @click="emit('close')">back</button>
          <h2 class="modal-header">warning!</h2>
          <p class="modal-description">
            this project is only for exercises, it does not have login and registration
            base and logic.
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

<style scoped lang="scss">
@keyframes dialogAnimation {
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}

.modal-container {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  min-height: 100%;
  background-color: rgba(#000000, 0.4);
  display: flex;
  align-items: center;
}

.modal-dialog {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  margin: 0 auto;
  padding: 2rem;
  width: min(40rem, 70%);

  text-align: center;
  border-radius: 1.5rem;
  border: 1px solid var(--light-red);
  animation: dialogAnimation 0.2s;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #151f2c;
  color: white;
  padding: 0.3rem;
  border-radius: 0.4rem;

  @media (width >= 1024px) {
    &:hover {
      cursor: pointer;
    }
  }
}

.modal-header {
  font-size: 2.5rem;
}

.modal-description {
  font-size: 1.3rem;
}
</style>
