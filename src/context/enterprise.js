"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

const EnterpriseContext = createContext({
  id: '',
  setEnterpriseId: '',
  data: [],
  setData: []
})

export const EnterpriseContextProvider = ({ children }) => {
  const [enterpriseId, setEnterpriseId] = useState('');
  const [data, setData] = useState([]);

  return (
    <EnterpriseContext.Provider value={{enterpriseId, setEnterpriseId, data, setData}}>
      { children }
    </EnterpriseContext.Provider>
  )
  
}

export const useEnterpriseContext = () => useContext(EnterpriseContext);