import React, { createContext, useCallback, useContext } from "react";
import { useState } from "react";
import { AuthContextType, RegisterModel } from "../features/auth/types";
import { removeStore } from "../../src/common/utils/localStorageHelper";
import { UserAppDispatch } from "../app/hooks";
import { authLogin, authRegister } from "../features/auth/authSlice";

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
const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginAuth = async (
    username: string,
    password: string
  ): Promise<void> => {
    try {
      // Encrypt password if needed
      await dispatch(authLogin({ username, password })).unwrap();
    setIsLoggedIn(true)
    } catch (e) {
      throw new Error("An error occurred while logging in.");
    }
  };

  const logoutAuth = useCallback((): void => {
    removeStore("token");
    setIsLoggedIn(false)

  }, []);

  const registerAuth = async (
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<void> => {
    try {
      // Encrypt password if needed
      await dispatch(
        authRegister({ username, firstname, lastname, email, password } as RegisterModel)
      ).unwrap();
    } catch (e) {
      throw new Error("An error occurred while registering.");
    }
  };

  const value = {loginAuth, logoutAuth, registerAuth,isLoggedIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
