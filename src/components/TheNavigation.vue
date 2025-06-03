<script setup>
import { useNavigationStore } from '@/stores/navigation';
import NavigationItem from './NavigationItem.vue';

const store = useNavigationStore();
</script>

<template>
  <nav>
    <ul>
      <NavigationItem v-for="(item, idx) of store.items" :key="item.id" :item="item" :order="idx" />
    </ul>
  </nav>
</template>
