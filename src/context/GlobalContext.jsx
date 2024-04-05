import { createContext, useState } from "react";

export const GlobalContext = createContext()

export function GlobalContextProvider({ children }) {

  const userDefault  = {
    email: 'default@fpllefia.com',
    imagen:'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png'
  }
  const [user, setUser] = useState(userDefault)

  return (
    <GlobalContext.Provider value={{
     user, setUser,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}