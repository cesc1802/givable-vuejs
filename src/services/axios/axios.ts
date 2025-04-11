import axios, { AxiosRequestHeaders } from "axios";
import { useAuthService } from "@/services/modules/authServices";

const { CancelToken } = axios;
const source = CancelToken.source();

const axiosInstance = axios.create({
  timeout: 10 * 60 * 1000, // timeout 10 minutes
  cancelToken: source.token,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || ({} as AxiosRequestHeaders);
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const { logout } = useAuthService();

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
