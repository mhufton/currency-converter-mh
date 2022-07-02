import React, { createContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

const CurrencyContextProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function loadCurrencies() {
      const res = await fetch(`
        https://api.exchangerate.host/latest
      `)
      const data = await res.json();
      setCurrencies(data.rates)
    }
    loadCurrencies();
  }, [])

  return (
    <CurrencyContext.Provider value={currencies}>
      {children}
    </CurrencyContext.Provider>
  )
}

export { CurrencyContext, CurrencyContextProvider };