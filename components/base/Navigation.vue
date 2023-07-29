<template>
  <nav :class="style">
    <ul class="nav-list">
      <NavItem
        v-for="(link, id) in links"
        :key="id"
        :path="link.path"
        :name="link.name"
      ></NavItem>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  style: string;
}>();

interface Links {
  path: string;
  name: string;
}

const links = ref<Links[]>([
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/tests", name: "tests" },
  { path: "/contact", name: "contact" },
  { path: "/login", name: "login" },
  { path: "/register", name: "signup" },
]);
</script>

<style scoped lang="scss">
.desktop-nav {
  flex: 1;
  .nav-list {
    display: flex;
    justify-content: flex-end;
    gap: 0 3rem;
  }
}

.mobile-nav {
  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem 0;
    padding: 4rem 0;
  }
}
</style>
