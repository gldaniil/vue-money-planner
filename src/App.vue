<script setup>
import AppContent from './components/AppContent.vue';
import AppSidebar from './components/AppSidebar.vue';
</script>

<template>
  <div class="mx-auto max-w-7xl w-full p-10 flex gap-10">
    <AppSidebar />
    <AppContent />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
