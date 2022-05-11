import React from "react";

export default function SwitchButton({ setConvertForm, convertForm }) {
  
  const stateSwap = () => {
    const tempFrom = convertForm.convertFrom;
    const tempTo = convertForm.convertTo;
    setConvertForm({
      ...convertForm,
      convertFrom: tempTo,
      convertTo: tempFrom
    })
  }

  return (
    <>
      <button onClick={stateSwap}>S</button>
    </>
  )
}