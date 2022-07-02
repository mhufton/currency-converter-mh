import React from 'react';
import { data } from "../data"

export default function Result({ newConversion, convertForm, newExchangeRate }) {
  const convertFromOne = () => {
    return (
      data[convertForm.convertTo]
        ? <h1>{data[convertForm.convertTo].symbol}{newConversion.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        : <h1>{newConversion.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {convertForm.convertTo}</h1>
    )}
  const convertFromMoreThanOne = () => {
    return (
      data[convertForm.convertTo]
        ? <h1>{data[convertForm.convertTo].symbol}{newConversion.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        : <h1>{newConversion.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {convertForm.convertTo}</h1>
    )}

  return (
    <div className="bg-white rounded-xl p-2 my-3 text-4xl flex flex-col text-center shadow-xl font-semibold text-zinc-800 md:min-w-[350px] md:pt-5">
      <div className="flex flex-row justify-center">
        <h1>{data[convertForm.convertFrom].symbol}{convertForm.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&nbsp;</h1>
      </div>
      <h1>=</h1>
      {convertForm.amount === "1" ? convertFromOne() : convertFromMoreThanOne()}
      {convertForm.amount !== "1" ?
        <p className="text-base opacity-50">1 {convertForm.convertFrom} = {newExchangeRate.toFixed(3)} {convertForm.convertTo}</p> : null}
    </div>
  )
}