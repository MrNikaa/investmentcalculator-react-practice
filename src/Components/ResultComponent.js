import React from "react";
import "../index.css";

const ResultComponent = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const yearlyData = () => {
    let totalInterest = 0;

    return props.yearlyDatas.map((yearlyData, index) => {
      totalInterest += yearlyData.yearlyInterest;

      return (
        <tr key={index}>
          <td>{yearlyData.year}</td>
          <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
          <td>{formatter.format(yearlyData.yearlyInterest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(yearlyData.savingsEndOfYear - totalInterest)}</td>
        </tr>
      );
    });
  };

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{yearlyData()}</tbody>
    </table>
  );
};

export default ResultComponent;
