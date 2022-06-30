import React from 'react';

import { data } from "../../data"

export default function Result({ newConversion, convertForm, newExchangeRate, resultFrom }) {
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
        {/* {convertForm.amount && data[convertForm.convertFrom] &&
          <h1>{data[convertForm.convertFrom].symbol}{resultFrom.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&nbsp;</h1>}
        {convertForm.amount && !data[convertForm.convertFrom] &&
          <h1>{resultFrom.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {resultFrom}</h1>} */}
        <h1>{data[convertForm.convertFrom].symbol}{resultFrom.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&nbsp;</h1>
      </div>
      <h1>=</h1>
      {convertForm.amount === "1" ? convertFromOne() : convertFromMoreThanOne()}
      {convertForm.amount !== "1" ?
        <p className="text-base opacity-50">1 {convertForm.convertFrom} = {newExchangeRate.toFixed(3)} {convertForm.convertTo}</p> : null}
    </div>
  )
}



  // fail safe for if there is no currency data in the data file
  // const symbols = () => {
  //   if (convertForm.amount !== "1" && !data[convertForm.convertFrom] && !data[convertForm.convertTo]) {
  //     return
  //       <p className="text-base opacity-50">
  //         {`1${convertForm.convertFrom} = ${newExchangeRate.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${convertForm.convertTo}`}
  //       </p>
  //   } else if (convertForm.amount !== "1" && !data[convertForm.convertFrom] && data[convertForm.convertTo]) {
  //     return
  //       <p className="text-base opacity-50">
  //         {`1${convertForm.convertFrom} = ${data[convertForm.convertTo].symbol}${newExchangeRate.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
  //       </p>
  //   } else if (convertForm.amount !== "1" && data[convertForm.convertFrom] && !data[convertForm.convertTo]) {
  //     return
  //       <p className="text-base opacity-50">
  //         {`${data[convertForm.convertFrom].symbol}1 = ${newExchangeRate.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${convertForm.convertTo}`}
  //       </p>
  //   } else {
  //     return 
  //       <p className="text-base opacity-50">
  //         {`${data[convertForm.convertFrom].symbol}1 = ${data[convertForm.convertTo].symbol}${newExchangeRate.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
  //       </p>
  //   } 
  // }