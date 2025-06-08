<script setup>
import { useNavigationStore } from '@/stores/navigation';

const store = useNavigationStore();
</script>

<template>
  <main class="rounded-4xl p-5 grow bg-white shadow-(--app-shadow)">
    <div class="h-full overflow-y-auto">
      <component v-if="store.activeView !== null" :is="store.items[store.activeView].component" />
    </div>
  </main>
</template>
