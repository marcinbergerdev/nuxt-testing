import { defineStore } from "pinia";

export const useMenuVisibility = defineStore("menuVisibility", () => {
   const isActive = ref(false);

   const toggleMenuHandler = () => {
      isActive.value = !isActive.value;
   };

   const closeMenu = () => {
      isActive.value = false;
   };

   return { isActive, toggleMenuHandler, closeMenu};
});
