import axios from "axios";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: { "Content-Type": "application/json" },
  });

  return {
    provide: { api },
  };
});