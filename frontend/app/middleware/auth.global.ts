import { defineNuxtRouteMiddleware } from '#imports';
import { useAuth } from '~/composables/useAuth';

export default defineNuxtRouteMiddleware((to) => {
  const { token } = useAuth();

  if (to.path.startsWith('/dashboard') && !token.value) {
    return navigateTo('/login');
  }
});
