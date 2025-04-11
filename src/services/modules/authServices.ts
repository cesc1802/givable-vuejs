import { IAuth, IAuthLoginRequest } from "@/models/auth";
import { authRepository } from "@/repositories";
import { HttpError } from "@/services/axios/http";

export const useAuthService = () => {
  const error = ref<string | null>(null);

  const login = async (payload: IAuthLoginRequest): Promise<IAuth | null> => {
    error.value = null;
    try {
      const response = await authRepository.login(payload);
      const auth: IAuth = {
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
        expiresIn: response.expires_in,
      };
      saveAuthToLocalStorage(auth);
      return auth;
    } catch (err) {
      handleError(err);
      return null;
    }
  };

  const refreshToken = async (): Promise<IAuth | null> => {
    error.value = null;
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return null;

    try {
      const response = await authRepository.refreshToken(refreshToken);
      const auth: IAuth = {
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
        expiresIn: response.expires_in,
      };
      saveAuthToLocalStorage(auth);
      return auth;
    } catch (err) {
      handleError(err);
      return null;
    }
  };

  const logout = async (): Promise<void> => {
    error.value = null;
    try {
      await authRepository.logout();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      clearAuthFromLocalStorage();
    }
  };

  const handleError = (err: unknown) => {
    if (err instanceof HttpError) {
      error.value = err.message || "Có lỗi xảy ra!";
    } else {
      error.value = "Lỗi hệ thống!";
    }
    console.error("Error:", err);
  };

  const saveAuthToLocalStorage = (auth: IAuth) => {
    localStorage.setItem("token", auth.accessToken);
    localStorage.setItem("refreshToken", auth.refreshToken);
  };

  const clearAuthFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  };

  return {
    login,
    refreshToken,
    logout,
    error,
  };
};
