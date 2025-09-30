<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '#imports';

const { login } = useAuth();

const isLoading = ref(false);

const form: LoginRequest = reactive({
  email: "",
  password: ""
})

const handleLogin = async () => {
  const { email, password } = form;
  isLoading.value = true;

  const response = await login(email, password);
  const {success, message} = response;

  if (success) {
    setTimeout(() => {
      isLoading.value = false;
      navigateTo("/dashboard");
    }, 3000);
  } else {
    alert(message);
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="card w-full max-w-sm bg-base-100 shadow-xl">
      <div class="card-body">
        <form class="flex flex-col gap-5 p-4" @submit.prevent="handleLogin">
          <h2 class="text-2xl font-bold text-center">Login</h2>
          <!-- Username Input field -->
          <label class="input w-full">
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="email"
              required
              placeholder="Username"
              minlength="3"
              maxlength="30"
              v-model="form.email"
            />
          </label>

          <!-- Password Input field -->
          <label class="input w-full">
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minlength="6"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              autocomplete="none"
              v-model="form.password"
            />
          </label>
          <button class="btn btn-primary mt-2"><span v-if="isLoading" class="loading loading-spinner loading-md"></span>Login</button>
          <p class="mt-3 text-sm text-center">
            Don’t have an account?
            <NuxtLink to="/register" class="link link-primary"
              >Register</NuxtLink
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
