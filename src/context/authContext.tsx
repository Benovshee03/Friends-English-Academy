import React, {
    createContext,
    useCallback,
    useContext,
  } from "react";
  import { AuthContextType } from "../features/auth/types";
  import {
    removeStore,
  } from "../../src/common/utils/localStorageHelper";
  import { UserAppDispatch } from "../app/hooks";
  import { authLogin } from "../features/auth/authSlice";
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  
  export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const dispatch = UserAppDispatch();
  
    const loginAuth = async (
      username: string,
      password: string
    ): Promise<void> => {
      try {
        alert("loginAuth");
        // encript password
        await dispatch(
          authLogin({ username: username, password: password })
        ).unwrap();
      } catch (e) {
        throw new Error("An error occured while login.");
      }
    };
  
    const logoutAuth = useCallback((): void => {
      removeStore("token");
    }, []);
    const value = { loginAuth, logoutAuth };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };