<template>
  <nav class="nav-container" v-if="isNavigation">
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
  { path: "/login", name: "login" },
  { path: "/register", name: "signup" },
]);

const isNavigation = ref(false);

const checkUserWidth = () => {
  innerWidth > 1024 ? (isNavigation.value = true) : (isNavigation.value = false);
};

onMounted(() => {
  if (innerWidth >= 1024) isNavigation.value = true;
  window.addEventListener("resize", checkUserWidth);
});
</script>

<style scoped lang="scss">
.nav-container {
  flex: 1;
}

.nav-list {
  display: flex;
  justify-content: flex-end;
  gap: 0 3rem;
}
</style>
