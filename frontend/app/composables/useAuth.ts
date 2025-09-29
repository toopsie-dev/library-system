import { ref } from "vue";
import { useCookie } from "#imports";

export function useAuth() {
  const { $api } = useNuxtApp();
  const token = useCookie<string>("auth_token");
  const user = ref(null);
  const login = async (email: string, password: string) => {
    try {
      const res = await $api.post("/login", { email, password });
      if (res.data.success) {
        token.value = res.data.info.token;
        localStorage.setItem("auth_token", token.value);
        user.value = res.data.info.user;
      }
      return res.data;
    } catch (err: any) {
      return {
        success: false,
        message: err.response?.data?.message || err.message,
      };
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) => {
    try {
      const res = await $api.post("/register", {
        name,
        email,
        password,
        password_confirmation,
      });
      if (res.data.success) {
        token.value = res.data.info.token;
        localStorage.setItem("auth_token", token.value);
        user.value = res.data.info.user;
      }
      return res.data;
    } catch (err: any) {
      return {
        success: false,
        message: err.response?.data?.message || err.message,
      };
    }
  };

  const logout = async () => {
    if (!token.value) return;
    await $api.post(
      "/logout",
      {},
      { headers: { Authorization: `Bearer ${token.value}` } }
    );
    token.value = "";
    user.value = null;
    localStorage.removeItem("auth_token");
  };

  const fetchUser = async () => {
    if (!token.value) return;
    const res = await $api.get("/me", {
      headers: { Authorization: `Bearer ${token.value}` },
    });
    user.value = res.data.info;
  };

  return { token, user, login, register, logout, fetchUser };
}
