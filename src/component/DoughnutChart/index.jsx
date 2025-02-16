import React from "react";
import { Chart } from "react-google-charts";

const DounghnutChart=()=> {
    const options = {
        title: "Complaint status",
        legend: "none",
        pieSliceText: "label",
        slices: {
          3: { offset: 0.2 },
          12: { offset: 0.3 },
          14: { offset: 0.4 },
          15: { offset: 0.5 },
        },
      }
      const data = [
        ["Complaints", "Speakers (in millions)"],
        ["Back track",23],
        ["Pending", 13],
        ["", 0],
        ["Resolved",45],
        ["",0]
      ];
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
export default DounghnutChart;