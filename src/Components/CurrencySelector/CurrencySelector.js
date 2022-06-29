import React, { useContext, useEffect, useState, Fragment } from "react";
import { CurrencyContext } from "../CurrencyContext/CurrencyContext";
import { data } from "../../data";
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export default function CurrencySelector({ setConvertForm, toOrFrom }) {
  const currencyObj = useContext(CurrencyContext);
  const currencyCodes = Object.keys(currencyObj).map((c) => c);
  const [selectedCode, setSelectedCode] = useState(
    toOrFrom === "convertFrom" ? "USD" : "GBP"
  );
  console.log("selectedCode", selectedCode)

  useEffect(() => {
    toOrFrom === "convertFrom"
      ? setConvertForm((convertForm) => ({ ...convertForm, convertFrom: selectedCode }))
      : setConvertForm((convertForm) => ({ ...convertForm, convertTo: selectedCode }))
  }, [selectedCode])

  return (
    <div className="my-2 w-[350px]">
      <Listbox value={selectedCode} onChange={setSelectedCode}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedCode}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {currencyCodes.map((c, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={c}
                >
                  {({ selectedCode }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selectedCode ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {data[c] && data[c].flag} {c}
                      </span>
                      {selectedCode ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}