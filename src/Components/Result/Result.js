import React from 'react';

import { data } from "../../data/data"

export default function Result({ newConversion, convertForm, newExchangeRate }) {

  return (
    <div className="bg-white rounded p-2 my-6  text-4xl flex flex-col text-center font-semibold">
      <div className="flex flex-row justify-center">
        <>{convertForm.amount && <h1>{data[convertForm.convertFrom].symbol}{convertForm.amount}&nbsp;</h1>}</>
        {/* <h1>{convertForm.convertFrom} to {convertForm.convertTo}</h1> */}
        
      </div>
      <h1>=</h1>
      <h1>{data[convertForm.convertTo].symbol}{newConversion.toFixed(2)}</h1>
      {convertForm.amount !== "1" &&
        <p className="text-base opacity-50">
          {`${data[convertForm.convertFrom].symbol}1 = ${data[convertForm.convertTo].symbol}${newExchangeRate.toFixed(2)}`}
        </p>
      }
    </div>
  )
}