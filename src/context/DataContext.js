import { createContext } from "react";

const DataContext =createContext({
    isloggedin:false,
    setisloggedin:()=>{}
})

export default DataContext;