import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = new useState(null)
  const [registerData, setRegisterData] = new useState({
    name: "",
    email: "",
    password: ""
  })

  const updateRegisterData = useCallback((data)=>{
    setRegisterData(data)
  }, []) 

  return (
    <AuthContext.Provider value = {{
      user,
      registerData,
      updateRegisterData
    }}>
      {children}
    </AuthContext.Provider>
  )
}