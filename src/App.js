import React from "react";

import Converter from "./Components/Converter/Converter";
import { CurrencyContextProvider } from "./Components/CurrencyContext/CurrencyContext"
import Header from "./Components/Header/Header"

function App() {
  return (
    <CurrencyContextProvider>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen p-2">
        <Header />
        <Converter />
      </div>
    </CurrencyContextProvider>
  );
}

export default App;
