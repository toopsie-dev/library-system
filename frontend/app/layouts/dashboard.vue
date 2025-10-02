<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';
</script>

<template>
  <div class="flex min-h-screen bg-base-100">
    <!-- Sidebar -->
    <Sidebar class="w-64 bg-gray-200 p-4" />

    <!-- Main content -->
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>
