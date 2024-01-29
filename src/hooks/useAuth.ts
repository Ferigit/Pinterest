import { useUser } from "./useUser";
import config from "@/src/utils/config";
import axios from "axios";
import { AuthResponse, TLogin } from "@/src/types/auth";
import useCookie from "./useCookie";
import { ApiInstance } from "@/src/utils/api";

const API_URL = config.BACKEND_URL;

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();

  const { getCookie } = useCookie();

  const refresh = () => {
    let existingUser = null;
    const getFromCookie = async () => (existingUser = getCookie("user"));
    getFromCookie();

    if (existingUser) {
      try {
        addUser(JSON.parse(existingUser));
      } catch (e) {}
    }
  };

  const login = async (creds: TLogin) => {
    return await axios
      .post(`/api/login`, creds)
      .then((res) => {
        if (res.data?.data && res.data.data?.token) addUser(res.data.data);
        return res.data as AuthResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as AuthResponse;
        else return err as AuthResponse;
      });
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout, refresh };
};
