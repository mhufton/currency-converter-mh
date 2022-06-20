import React, { useEffect, useState } from "react";
import { LineChart, Line, YAxis, XAxis } from "recharts";

export default function HistoryGraph({ convertForm, newConversion }) {
  const [timeData, setTimeData] = useState();
  const { convertFrom, convertTo } = convertForm;

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`
        https://api.exchangerate.host/timeseries?start_date=2022-02-01&end_date=2022-05-05&base=${convertFrom}&symbols=${convertTo}
      `);
      const json = await res.json();
      setTimeData(json.rates);
    }
    loadData();
  }, [newConversion]);

  let mappedData; 
  if (timeData) mappedData = Object.keys(timeData).map((date) => {
      const temp = timeData[date];
      return temp[convertTo];
    });

  const xAxisData = Object.keys(timeData).map((date) => date);
  console.log("xAxisData", xAxisData)

  const renderLineChart = (
    <LineChart width={400} height={100} data={mappedData}>
      <XAxis dataKey={xAxisData} scale="log" />
      <YAxis tickCount={10} />
      <Line type="monotone" dataKey={(v) => v} stroke="#8884d8" dot={false} />
    </LineChart>
  )
  
  return (
    <div>
      {mappedData !== undefined && renderLineChart}
    </div>
  )
}