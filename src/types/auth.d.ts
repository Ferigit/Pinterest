export type TUser = {
    email: string;
    firstName: string;
    lastName: string;
  };
  
  export type AuthUser = {
    token: string;
    user: TUser;
  };
  
  export type TLogin = {
    username: string;
    password: string;
  };
  
  export type AuthResponse = {
    message: string;
    data?: AuthUser;
    success?: boolean;
  };

  export type TRegister = {
    email: string;
    password: string;
  };

  export interface TAuthContext {
    user: AuthUser | null;
    setUser: (user: AuthUser | null) => void;
  }