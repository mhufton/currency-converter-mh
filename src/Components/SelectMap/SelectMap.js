import React, { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../CurrencyContext/CurrencyContext";
import { Combobox, Transition } from "@headlessui/react";
import { data } from "../../data"

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
    <div className="bg-white my-2 pl-8 flex flex-row space-x-2 justify-center align-center rounded shadow-xl md:max-w-xl">
      <div className="pt-2 pl-20 text-5xl text-right w-1/2">
        {data[selectedCode] && data[selectedCode].flag && data[selectedCode].flag}
      </div>
      <div className="">
        <Combobox value={selectedCode} onChange={setSelectedCode} name="code">
        <Combobox.Input
          onChange={(e) => setQuery(e.target.value)}
          displayValue={(code) => code}
          maxlength="3"
          className="my-2 py-2 pr-2 rounded text-2xl focus:outline-none font-semibold text-left w-1/2"
        >
        </Combobox.Input>
        <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        />  
        <Combobox.Options className="text-2xl">
          {filteredCodes.map((code) =>
            <Combobox.Option key={code} value={code}>
              {code}
            </Combobox.Option>
          )}
          </Combobox.Options>
        </Combobox>
      </div>
    </div>
  );
}
