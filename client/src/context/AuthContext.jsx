import { createContext, useCallback, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = new useState(null)
  const [registerError, setRegisterError] = new useState(null)
  const [isRegisterLoading, setIsRegisterLoading] = new useState(false)
  const [registerData, setRegisterData] = new useState({
    name: "",
    email: "",
    password: ""
  })

  const updateRegisterData = useCallback((data)=>{
    setRegisterData(data)
  }, []) 

  const registerUser = useCallback( async (e) => {
    e.preventDefault()

    setIsRegisterLoading(true)
    setRegisterError(null)

    const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerData))

    setIsRegisterLoading(false)

    if(response.error) return setRegisterError(response)
    
    localStorage.setItem("User", JSON.stringify(response))
    setUser(response)

  }, [registerData] )

  return (
    <AuthContext.Provider value = {{
      user,
      registerData,
      updateRegisterData,
      registerUser,
      registerError,
      isRegisterLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}