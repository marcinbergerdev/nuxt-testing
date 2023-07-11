<template>
  <nav class="nav-container">
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
interface Links {
  path: string;
  name: string;
}

const links = ref<Links[]>([
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/study", name: "study" },
  { path: "/contact", name: "contact" },
]);
</script>

<style scoped lang="scss">
.nav-container {
  flex: 1;
}

.nav-list {
  display: flex;
  justify-content: flex-end;
  gap: 0 2rem;
}
</style>
