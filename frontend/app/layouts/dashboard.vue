<template>
  <div class="flex min-h-screen bg-base-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <main class="flex-1 p-6">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';
</script>
