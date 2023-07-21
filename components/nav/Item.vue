<template>
  <li>
    <NuxtLink :to="path" class="nav-link"> {{ name }}</NuxtLink>
  </li>
</template>

<script setup lang="ts">
const { path, name } = defineProps<{
  path: string;
  name: string;
}>();
</script>

<style scoped lang="scss">
.nav-link {
  display: block;
  padding: 1rem 2rem;
  font-size: 2rem;
  color: var(--dark-blue);
}

.desktop-nav,
.mobile-nav {
  li:nth-child(5) {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      background-color: var(--dark-blue);
    }
  }
  .nav-link {
    &.router-link-active {
      color: var(--light-blue);
    }
  }
}

.desktop-nav {
  li:nth-child(5) {
    &::before {
      left: -1.5rem;
      width: 1px;
      height: 100%;
    }
  }

  .nav-link {
    @media (width >= 1024px) {
      &.router-link-active {
        border-bottom: 1px solid var(--light-blue);
        transition: 0.2s ease-in-out;
      }
      cursor: pointer;
    }
  }
}

.mobile-nav {
  li:nth-child(5) {
    margin-top: 2rem;
    padding-top: 2rem;
    &::before {
      width: 100%;
      height: 1px;
    }
  }
  .nav-link {
    &.router-link-active {
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
