import React, { useState } from "react";
import "../index.css";

const FormComponent = props => {

    const calculateHandler = (event) => {
        event.preventDefault();
      
        const userInput = {
          "current-savings": +event.target["current-savings"].value,
          "yearly-contribution": +event.target["yearly-contribution"].value,
          "expected-return": +event.target["expected-return"].value / 100,
          "duration": +event.target["duration"].value,
        };
      
        let currentSavings = userInput["current-savings"];
        const yearlyContribution = userInput["yearly-contribution"];
        const expectedReturn = userInput["expected-return"];
        const duration = userInput["duration"];
      
        const calculatedYearlyData = [];
      
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          calculatedYearlyData.push({
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution
          });
        }
      
        props.updateYearlyData(calculatedYearlyData);
      };

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormComponent;
