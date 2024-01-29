import axios from "axios";
import { AuthResponse } from "@/src/types/auth";

export const usePosts = () => {
  const getPosts = async () => {
    return await axios
      .get(`/api/posts`)
      .then((res) => {
        return res.data as AuthResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as AuthResponse;
        else return err as AuthResponse;
      });
  };

  return {
    getPosts,
  };
};
