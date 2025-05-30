import FinanceView from '@/views/FinanceView.vue';
import HomeView from '@/views/HomeView.vue';
import SettingsView from '@/views/SettingsView.vue';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  const items = ref([
    {
      id: 0,
      label: 'Главная',
      component: HomeView,
      icon: 'pi-home',
    },
    {
      id: 1,
      label: 'Финансы',
      component: FinanceView,
      icon: 'pi-wallet',
    },
    {
      id: 2,
      label: 'Настройки',
      component: SettingsView,
      icon: 'pi-cog',
    },
  ]);
  const activeView = ref(0);

  function updateActive(id) {
    activeView.value = id;
  }

  return { items, activeView, updateActive };
});
