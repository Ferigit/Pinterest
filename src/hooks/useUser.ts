import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthUser } from "@/src/types/auth";
import useCookie from "./useCookie";
import { usePostStore } from "@/src/store/usePostStore";
import { useDraftPostTool } from "@/src/store/useDraftPostTool";
import { useRouter } from "next/router";
export const useUser = () => {
  const router = useRouter();
  const { setPosts } = usePostStore();
  const { setDraftPosts } = useDraftPostTool();
  const { user, setUser } = useContext(AuthContext);
  const { setCookie, removeCookie } = useCookie();

  const addUser = (user: AuthUser) => {
    setUser(user);
    setCookie("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setPosts([]);
    setDraftPosts([]);
    setUser(null);
    removeCookie("user");
    router.push("/");
  };

  return { user, addUser, removeUser };
};
