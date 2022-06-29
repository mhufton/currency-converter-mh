import React from "react";
import { HiSwitchVertical, HiOutlineSwitchVertical } from "react-icons/hi";

export default function SwitchButton({ setConvertForm, convertForm, setSwitched, switched }) {
  
  const stateSwap = () => {
    const tempFrom = convertForm.convertFrom;
    const tempTo = convertForm.convertTo;
    setConvertForm({
      ...convertForm,
      convertFrom: tempTo,
      convertTo: tempFrom
    })
    setSwitched(!switched)
  }

  return (
    <button onClick={stateSwap} className="flex-1 ml-2 max-h-[48px] max-w-[48px] border-2 border-white rounded-xl p-3.5">
      <HiOutlineSwitchVertical style={{ color: "white" }}/>
    </button>
  )
}