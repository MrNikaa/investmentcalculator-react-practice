import React, { useState } from 'react';
import ResultComponent from './Components/ResultComponent';
import FormComponent from './Components/FormComponent';
import Header from './Components/Header';

//SORRY FOR NO CSS MODULES DID NOT HAVE ENOUGH TIME FOR THAT

function App() {

  const [yearlyData, setYearlyData] = useState([]); //could make and set this in formComponent and just get it from there but does it matter?

  const updateYearlyData = (data) => {
    setYearlyData(data);
    console.log(data);
  };

  return (
    <div>
      <Header/>
      <FormComponent updateYearlyData={updateYearlyData} />
      <ResultComponent yearlyDatas={yearlyData}/>
    </div>
  );
}

export default App;
