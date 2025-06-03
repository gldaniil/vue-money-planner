<script setup>
import { useNavigationStore } from '@/stores/navigation';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  order: {
    type: Number,
  },
});

const store = useNavigationStore();

const handleClick = () => {
  store.updateActive(props.item.id);
};
</script>

<template>
  <li class="not-first:mt-3">
    <a class="p-1 relative flex cursor-pointer" @click="handleClick">
      <i
        v-if="item.icon"
        class="pi text-black hover:text-indigo-400 transition-colors duration-300 ease-out"
        :class="item.icon"
      />
    </a>
  </li>
</template>
