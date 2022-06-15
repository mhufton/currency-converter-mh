import React, { useState } from "react";
import SelectMap from "../SelectMap/SelectMap";
import useExchange from "../hooks/useExchanger"
import SwitchButton from "../SwitchButton/SwitchButton";
import HistoryGraph from "../HistoryGraph/HistoryGraph";

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
    <div>
      converter drop downs go here
      <form onSubmit={submitHandler}>
        <SelectMap setConvertForm={setConvertForm} toOrFrom={"convertFrom"} />
        <SelectMap setConvertForm={setConvertForm} toOrFrom={"convertTo"} />
        <input
          type="text"
          name="amount"
          value={convertForm.amount}
          onChange={(e) => setConvertForm({ ...convertForm, amount: e.target.value })}
        />
        <button type="submit">CONVERT!</button>
        <SwitchButton setConvertForm={setConvertForm} convertForm={convertForm} />
      </form>
      {convertForm.convertFrom} = {convertForm.convertTo}
      {newConversion && <p>CONVERTED: {newConversion.toFixed(2)}</p>}
     {/* <HistoryGraph convertForm={convertForm} newConversion={newConversion} /> */}
    </div>
  )
}