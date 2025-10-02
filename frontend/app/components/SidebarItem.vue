<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next';

defineProps<{
  icon: string;
  label: string;
  to?: string;
}>();

const props = defineProps<{ icon: string; label: string; to?: string }>();
const iconComponent = (LucideIcons as any)[props.icon];
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition-colors"
  >
    <component :is="iconComponent" class="w-5 h-5" />
    <span>{{ label }}</span>
  </NuxtLink>

  <button
    v-else
    class="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition-colors w-full text-left"
    @click="$emit('click')"
  >
    <component :is="iconComponent" class="w-5 h-5" />
    <span>{{ label }}</span>
  </button>
</template>
