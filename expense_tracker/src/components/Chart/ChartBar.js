import React, { useState } from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const fill = Math.round((props.value / props.maxValue) * 100) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__bar">
        <div className="chart-bar__fill" style={{ height: fill }}></div>
      </div>
      <p className="chart-bar__month">{props.label}</p>
    </div>
  );
};

export default ChartBar;
