import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = new useState(null);
  const [registerError, setRegisterError] = new useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = new useState(false);
  const [registerData, setRegisterData] = new useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = new useState(null);
  const [isLoginLoading, setIsLoginLoading] = new useState(false);
  const [loginData, setLoginData] = new useState({
    email: "",
    password: "",
  });

  console.log("User", user);
  console.log("LoginData", loginData)

  useEffect(() => {
    const user = localStorage.getItem("User");

    setUser(JSON.parse(user));
  }, []);

  const updateRegisterData = useCallback((data) => {
    setRegisterData(data);
  }, []);

  const updateLoginData = useCallback((data) => {
    setLoginData(data);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsRegisterLoading(true);
      setRegisterError(null);

      const response = await postRequest(
        `${baseUrl}/users/register`,
        JSON.stringify(registerData)
      );

      setIsRegisterLoading(false);

      if (response.error) return setRegisterError(response);

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [registerData]
  );

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsLoginLoading(true);
      setLoginError(null);

      const response = await postRequest(
        `${baseUrl}/users/login`,
        JSON.stringify(loginData)
      );

      setIsLoginLoading(false);

      if (response.error) return setLoginError(response);

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [loginData]
  );

  const logoutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,

        registerData,
        updateRegisterData,
        registerUser,
        registerError,
        isRegisterLoading,

        loginData,
        updateLoginData,
        loginUser,
        loginError,
        isLoginLoading,

        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
