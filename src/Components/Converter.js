import React, { useState, useEffect } from "react";

import useExchange from "./hooks/useExchanger"
import SwitchButton from "./SwitchButton";
import Result from "./Result";
import { data } from "../data"
import CurrencySelector2 from "./CurrencySelector"

export default function Converter() {
  const [convertForm, setConvertForm] = useState({
    convertFrom: "USD",
    convertTo: "GBP",
    amount: "1",
  })
  const [converted, setConverted] = useState(convertForm)
  const [exchangeRate, setExchangeRate] = useState(convertForm)

  // sets the result card convertFrom to only populate on "convert" button click
  const [convertClicked, setConvertClicked] = useState(false)

  const newConversion = useExchange(converted)
  const newExchangeRate  = useExchange(exchangeRate)
  const submitHandler = (e) => {
    e.preventDefault()
    setConverted(convertForm)
    setExchangeRate({
      ...convertForm,
      amount: "1"
    })
    setConvertClicked(true)
  }

  return (
    <div className="my-3 p-3 flex flex-col justify-center align-center md:items-center md:border-solid md:border-t-2 md:border-black md:mx-3">
      <div className="border-solid border-t-2 border-black mb-7 md:mb-2" />
      <div>
        <form onSubmit={submitHandler} className="flex flex-col" >
          <CurrencySelector2 name={"convertFrom"} value={convertForm.convertFrom} doSelectCurrency={(v) => setConvertForm({ ...convertForm, convertFrom: v })} />
          <CurrencySelector2 name={"convertFrom"} value={convertForm.convertTo} doSelectCurrency={(v) => setConvertForm({ ...convertForm, convertTo: v })} />
          <input
            type="text"
            name="amount"
            placeholder="enter an amount greater than 0"
            className="mt-1 mb-3 py-2 h-[43px] text-center text-2xl rounded-lg shadow-xl focus:outline-none focus:bg-slate-300"
            value={convertForm.amount}
            required
            onChange={(e) => setConvertForm({ ...convertForm, amount: e.target.value })}
          />
          <div className="my-2 flex flex-row space-between md:max-w-xl">
            <button type="submit" className="p-2 max-h-[48px] flex-auto w-32 bg-transparent font-semibold border-solid border-2 rounded-xl border-white text-xl text-white" >CONVERT</button>
            <SwitchButton setConvertForm={setConvertForm} convertForm={convertForm} />
          </div>
        </form>
      </div>
      {convertClicked && 
        <Result
          newConversion={newConversion}
          convertForm={convertForm}
          newExchangeRate={newExchangeRate}
        />}
    </div>
  )
}