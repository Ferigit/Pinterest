"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { AuthUser } from "@/src/types/auth";
import useCookie from "@/src/hooks/useCookie";
import { TAuthContext } from "@/src/types/auth";

export const AuthContext = createContext<TAuthContext>({
  user: null,
  setUser: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const { getCookie } = useCookie();

  useEffect(() => {
    if (!user) {
      let existingUser = null;
      const getFromCookie = async () => (existingUser = getCookie("user"));
      getFromCookie();

      if (existingUser) {
        try {
          setUser(JSON.parse(existingUser));
        } catch (e) {}
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
