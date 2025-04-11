import { IAuthLoginRequest, IAuthDTO } from "@/models/auth";
import httpClient from "@/services/axios/http";

export const authRepository = {
  async login(payload: IAuthLoginRequest): Promise<IAuthDTO> {
    return httpClient.post("/auth/login", payload);
  },

  async refreshToken(refreshToken: string): Promise<IAuthDTO> {
    return httpClient.post("/auth/refresh", {
      refresh_token: refreshToken,
    });
  },

  async logout(): Promise<void> {
    await httpClient.post("/auth/logout");
  },
};
