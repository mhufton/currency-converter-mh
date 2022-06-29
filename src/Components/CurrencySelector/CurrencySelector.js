import React, { useContext, useEffect, useState, Fragment } from "react";
import { CurrencyContext } from "../CurrencyContext/CurrencyContext";
import { data } from "../../data";
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export default function CurrencySelector({ setConvertForm, toOrFrom }) {
  const currencyObj = useContext(CurrencyContext);
  const currencyCodes = Object.keys(currencyObj).map((c) => c);
  const customCodes = Object.keys(data).map(c => c)
  const [selectedCode, setSelectedCode] = useState(
    toOrFrom === "convertFrom" ? "USD" : "GBP"
  );

  useEffect(() => {
    toOrFrom === "convertFrom"
      ? setConvertForm((convertForm) => ({ ...convertForm, convertFrom: selectedCode }))
      : setConvertForm((convertForm) => ({ ...convertForm, convertTo: selectedCode }))
  }, [selectedCode])

  if (toOrFrom === "convertFrom") {
    return (
      <div className="convertFrom mb-4 text-xl z-[9999] md:w-[350px]">
        <Listbox value={selectedCode} onChange={setSelectedCode}>
          <div className="relative mt-1 z-10">
            <Listbox.Button className="text-center relative z-10 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
              <div className="flex flex-row justify-center pl-2">
                <span className="block truncate z-10">{data[selectedCode].flag}&nbsp;</span>
                <span className="block truncate z-10">&nbsp;{selectedCode}</span>
              </div>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400 z-10"
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
              <Listbox.Options className="absolute z-[9999] mt-1 max-h-60 w-full overflow-y-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {customCodes.map((c, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default z-10 select-none py-2 pl-10 pr-4 ${
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
  } else {
    return (
      <div className="mb-4 text-xl">
        <Listbox value={selectedCode} onChange={setSelectedCode}>
          <div className="relative mt-1 z-50">
            <Listbox.Button className="text-center relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300" >
              <div className="flex flex-row justify-center pl-2">
                <span className="block truncate z-10">{data[selectedCode].flag}&nbsp;</span>
                <span className="block truncate z-10">&nbsp;{selectedCode}</span>
              </div>
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
                {customCodes.map((c, index) => (
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
}