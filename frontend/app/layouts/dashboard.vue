<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';
import Header from '~/components/Header.vue';
</script>

<template>
  <!-- Sidebar -->
  <Sidebar />

  <!-- Main content -->
  <div class="flex flex-col ml-64 min-h-screen">
    <Header />
    <main class="flex-1 p-6 bg-gray-100">
      <slot />
    </main>
  </div>
</template>
