import React, { useState, useEffect } from "react";

export default function useExchange(toConvert) {
  const [converted, setConverted] = useState()
  const { convertFrom, convertTo, amount } = toConvert;
  let url;

  if (amount !== "1") {
    url = `https://api.exchangerate.host/convert?from=${convertFrom}&to=${convertTo}&amount=${amount}`
  } else {
    url = `https://api.exchangerate.host/convert?from=${convertFrom}&to=${convertTo}`
  }

  useEffect(() => {
    async function convertCurrencies() {
      const res = await fetch(url)
      const data = await res.json()
      setConverted(data.result)
    }
    convertCurrencies();
  }, [convertFrom, convertTo, amount])

  return converted
}