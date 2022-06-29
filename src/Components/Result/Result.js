import React from 'react';

import { data } from "../..{data[c] && data[c].flag} {c}/data"

export default function Result({ newConversion, convertForm, newExchangeRate }) {

  // fail safe for if there is no currency data in the data file
  const symbols = () => {
    if (convertForm.amount !== "1" && !data[convertForm.convertFrom] && !data[convertForm.convertTo]) {
      return
        <p className="text-base opacity-50">
          {`1${convertForm.convertFrom} = ${newExchangeRate.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${convertForm.convertTo}`}
        </p>
    } else if (convertForm.amount !== "1" && !data[convertForm.convertFrom] && data[convertForm.convertTo]) {
      return
        <p className="text-base opacity-50">
          {`1${convertForm.convertFrom} = ${data[convertForm.convertTo].symbol}${newExchangeRate.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
        </p>
    } else if (convertForm.amount !== "1" && data[convertForm.convertFrom] && !data[convertForm.convertTo]) {
      return
        <p className="text-base opacity-50">
          {`${data[convertForm.convertFrom].symbol}1 = ${newExchangeRate.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${convertForm.convertTo}`}
        </p>
    } else {
      return 
        <p className="text-base opacity-50">
          {`${data[convertForm.convertFrom].symbol}1 = ${data[convertForm.convertTo].symbol}${newExchangeRate.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
        </p>
    } 
  }

  return (
    <div className="bg-white rounded p-2 my-6 text-4xl flex flex-col text-center shadow-xl font-semibold text-zinc-800 md:min-w-[57.5%] md:pt-5">
      <div className="flex flex-row justify-center">
        {convertForm.amount && data[convertForm.convertFrom] &&
          <h1>{data[convertForm.convertFrom].symbol}{convertForm.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&nbsp;</h1>
        }
        {convertForm.amount && !data[convertForm.convertFrom] &&
          <h1>{convertForm.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {convertForm.convertFrom}</h1>
        }
      </div>
      <h1>=</h1>
      {data[convertForm.convertTo]
        ? <h1>{data[convertForm.convertTo].symbol}{newConversion.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        : <h1>{newConversion.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {convertForm.convertTo}</h1>
      }
      {symbols()}
      {convertForm.amount !== "1" ?
        <p className="text-base opacity-50">1 {convertForm.convertFrom} = {newExchangeRate.toFixed(2)} {convertForm.convertTo}</p> : null
      }
    </div>
  )
}


// .toLocaleString("en-US")