export {};

declare global {
  interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    info: T | null;
  }
  
  interface User {
    id: number;
    name: string;
    email: string;
  }

  interface LoginRequest {
    email: string;
    password: string;
  }

  interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
}
