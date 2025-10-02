<script setup lang="ts">
import { onMounted } from 'vue';
import { navigateTo } from '#app';

onMounted(() => {
  navigateTo('/login');
});
</script>