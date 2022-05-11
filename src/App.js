import React from "react";

import Converter from "./Components/Converter/Converter";
import { CurrencyContextProvider } from "./Components/CurrencyContext/CurrencyContext"

function App() {
  return (
    <CurrencyContextProvider>
      <Converter />
    </CurrencyContextProvider>
  );
}

export default App;
