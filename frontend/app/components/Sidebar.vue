<template>
  <aside class="w-64 h-screen bg-base-200 p-4 flex flex-col">
    <!-- Avatar -->
    <div class="flex flex-col items-center mb-8">
      <img
        src="https://i.pravatar.cc/100"
        alt="User Avatar"
        class="w-20 h-20 rounded-full mb-2"
      />
      <span class="font-semibold">{{ userName }}</span>
    </div>

    <!-- Navigation -->
    <nav class="flex flex-col gap-2 flex-1">
      <SidebarItem icon="Book" label="Books" to="/books" />
      <SidebarItem icon="FileText" label="Issue" to="/issue" />
      <SidebarItem icon="RotateCw" label="Return" to="/return" />
      <SidebarItem icon="BookOpen" label="Book Detail" to="/book-detail" />
      <SidebarItem icon="LogOut" label="Logout" @click="logout" />
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';
import { computed } from 'vue';
import SidebarItem from './SidebarItem.vue';

const { user, logout } = useAuth();
const userName = computed(() => user.value?.name || 'Guest');
</script>
