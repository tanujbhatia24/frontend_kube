import React, { useState } from 'react'
import DataContext from './DataContext'
export default function ContextProvider({children}) {
    const [auth,setAuth] =useState(true) 
  return (
    <DataContext.Provider value={{
        isloggedin:auth,
        setisloggedin:(value)=>{
            setAuth(value)
        }
    }}>
        {children}
    </DataContext.Provider>
  )
}
