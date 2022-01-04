import React, { useState } from "react";
import Card from "../UI/Card";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const values = dataPoints.map((data) => data.value);
  const maxValue = Math.max(...values);
  console.log(dataPoints);
  return (
    <Card className={"chart"}>
      {dataPoints.map((data) => (
        <ChartBar
          value={data.value}
          maxValue={maxValue}
          key={data.label}
          label={data.label}
        />
      ))}
    </Card>
  );
};

export default Chart;
