import React, { useEffect, useState } from "react";

export default function useFecth() {
  const [fetched, setFetched] = useState();

  useEffect(() => {
    async function fetchUrl() {
      const res = await fetch(`
        https://api.exchangerate.host/timeseries?start_date=2021-01-01&end_date=2022-05-05
      `)
      const data = await res.json();
      setFetched(data.rates)
    }
    fetchUrl
  }, [])

  return fetched
}