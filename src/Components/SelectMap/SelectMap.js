import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../CurrencyContext/CurrencyContext";
import { Combobox } from "@headlessui/react";

export default function SelectMap({ setConvertForm, toOrFrom }) {
  const currencyObj = useContext(CurrencyContext);
  const currencyCodes = Object.keys(currencyObj).map((c) => c)
  const [selectedCode, setSelectedCode] = useState(
    toOrFrom === "convertFrom" ? "USD" : "GBP"
  );
  const [query, setQuery] = useState('');

  const filteredCodes = 
    query === ''
      ? currencyCodes
      : currencyCodes.filter((code) => 
          code
            .toLowerCase()
            .includes(query.toLowerCase())
      )

  useEffect(() => {
    toOrFrom === "convertFrom"
      ? setConvertForm((convertForm) => ({ ...convertForm, convertFrom: selectedCode }))
      : setConvertForm((convertForm) => ({ ...convertForm, convertTo: selectedCode }))
  }, [selectedCode])

  return (
    <Combobox value={selectedCode} onChange={setSelectedCode} name="code">
      <Combobox.Input
        onChange={(e) => setQuery(e.target.value)}
        displayValue={(code) => code}
      />
      <Combobox.Options>
        {filteredCodes.map((code) => (
          <Combobox.Option key={code} value={code}>
            {code}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}