import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../CurrencyContext/CurrencyContext";
import { data } from "../../data/data";

export default function CurrencySelector({ setConvertForm, toOrFrom }) {
  const currencyObj = useContext(CurrencyContext);
  const currencyCodes = Object.keys(currencyObj).map((c) => c);
  const [selectedCode, setSelectedCode] = useState(
    toOrFrom === "convertFrom" ? "USD" : "GBP"
  );
  const [query, setQuery] = useState('');

  useEffect(() => {
    toOrFrom === "convertFrom"
      ? setConvertForm((convertForm) => ({ ...convertForm, convertFrom: selectedCode }))
      : setConvertForm((convertForm) => ({ ...convertForm, convertTo: selectedCode }))
  }, [selectedCode])

  return (
    <div>
      <select name="Currency Code" onChange={setSelectedCode} >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        <option disabled>- - - - - -</option>
        {currencyCodes.map((c) => {
          return <option value={c}>{c}</option>
        })}
      </select>
      {currencyCodes.map((c) => {
          <option value={c}>{c}</option>
        })}
    </div>
  )
}