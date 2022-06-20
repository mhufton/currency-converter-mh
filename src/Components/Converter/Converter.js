import React, { useState } from "react";
import SelectMap from "../SelectMap/SelectMap";
import useExchange from "../hooks/useExchanger"
import SwitchButton from "../SwitchButton/SwitchButton";
import HistoryGraph from "../HistoryGraph/HistoryGraph";
import Header from "../Header/Header"

export default function Converter() {
  const [convertForm, setConvertForm] = useState({
    convertFrom: "",
    convertTo: "",
    amount: "",
  })
  const [converted, setConverted] = useState(convertForm)

  const newConversion = useExchange(converted)
  const submitHandler = (e) => {
    e.preventDefault()
    setConverted(convertForm)
  }

  return (
    <div className="my-3 p-3 flex flex-col justify-center align-center">
      <div className="border-solid border-t-2 border-black mb-7"></div>
      <form onSubmit={submitHandler} className="flex flex-col">
        <SelectMap setConvertForm={setConvertForm} toOrFrom={"convertFrom"} />
        <SelectMap setConvertForm={setConvertForm} toOrFrom={"convertTo"} />
        <input
          type="text"
          name="amount"
          placeholder="amount (optional)"
          className="my-2 py-2 text-center text-2xl rounded shadow-xl focus:outline-none focus:bg-slate-300"
          value={convertForm.amount}
          onChange={(e) => setConvertForm({ ...convertForm, amount: e.target.value })}
        />
        <div className="my-2 flex flex-row space-between">
          <button type="submit" className="p-2 max-h-[48px] flex-auto w-32 bg-transparent font-semibold border-solid border-2 rounded border-white text-xl text-white">CONVERT!</button>
          <SwitchButton setConvertForm={setConvertForm} convertForm={convertForm} s/>
        </div>
      </form>
      {/* <h3>{convertForm.convertFrom} = {convertForm.convertTo}</h3> */}
      <h3>{newConversion && <h3>CONVERTED: {newConversion.toFixed(2)}</h3>}</h3>
     {/* <HistoryGraph convertForm={convertForm} newConversion={newConversion} /> */}
    </div>
  )
}