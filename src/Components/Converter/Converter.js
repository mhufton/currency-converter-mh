import React, { useState } from "react";

import SelectMap from "../SelectMap/SelectMap";
import useExchange from "../hooks/useExchanger"
import SwitchButton from "../SwitchButton/SwitchButton";
import HistoryGraph from "../HistoryGraph/HistoryGraph";
import Header from "../Header/Header";
import Result from "../Result/Result";
import { data } from "../../data/data"
import Emoji from 'a11y-react-emoji'

export default function Converter() {
  const [convertForm, setConvertForm] = useState({
    convertFrom: "",
    convertTo: "",
    amount: "1",
  })
  const [converted, setConverted] = useState(convertForm)
  const [exchangeRate, setExchangeRate] = useState(convertForm)

  const newConversion = useExchange(converted)
  const newExchangeRate = useExchange(exchangeRate)
  const submitHandler = (e) => {
    e.preventDefault()
    setConverted(convertForm)
    setExchangeRate({
      ...convertForm,
      amount: "1"
    })
  }


  return (
    <div className="my-3 p-3 flex flex-col justify-center align-center md:items-center md:border-solid md:border-t-2 md:border-black md:mx-3">
      <div className="border-solid border-t-2 border-black mb-7 md:mb-2" />
      <form onSubmit={submitHandler} className="flex flex-col" >
        <SelectMap setConvertForm={setConvertForm} toOrFrom={"convertFrom"} />
        <SelectMap setConvertForm={setConvertForm} toOrFrom={"convertTo"} />
        <input
          type="text"
          name="amount"
          placeholder="amount (optional)"
          className="my-2 py-2 text-center text-2xl rounded shadow-xl focus:outline-none focus:bg-slate-300"
          value={convertForm.amount}
          required
          onChange={(e) => setConvertForm({ ...convertForm, amount: e.target.value })}
        />
        <div className="my-2 flex flex-row space-between md:max-w-xl">
          <button type="submit" className="p-2 max-h-[48px] flex-auto w-32 bg-transparent font-semibold border-solid border-2 rounded border-white text-xl text-white" >CONVERT!</button>
          <SwitchButton setConvertForm={setConvertForm} convertForm={convertForm} />
        </div>
      </form>
      {newConversion && 
        <Result
          newConversion={newConversion}
          convertForm={convertForm}
          newExchangeRate={newExchangeRate}
        />}
    </div>
  )
}