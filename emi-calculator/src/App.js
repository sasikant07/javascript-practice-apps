import React, {useState, useEffect} from 'react';
import './App.css';
import { tenureData } from './utils/constants';
import { amountWithCommas } from './utils/config';
import TextInput from './components/TextInput';
import SliderInput from './components/SliderInput';

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEMI = (downpayment) => {
    // EMI amount = [P X R X (1+R)^N]/[(1+R)^N-1]
    if (!cost) return;

    const loanAmt = cost - downpayment;
    const rateOfInterest = interest / 100;
    const numberOfYears = tenure / 12;

    const EMI = (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numberOfYears) / ((1 + rateOfInterest)**numberOfYears - 1);

    return Number(EMI/12).toFixed(0);
  }

  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    const emi = calculateEMI(dp);
    setEmi(emi);
  }

  const calculateDownPayment = (emi) => {
    if (!cost) return;

    const downPaymentPercent = 100 - (emi/calculateEMI(0)) * 100;
    
    return Number((downPaymentPercent / 100) * cost).toFixed(0); 
  }

  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    const dp = calculateDownPayment(emi);
    setDownPayment(dp);
  }

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [tenure, cost])

  const totalDownPayment = () => {
    return amountWithCommas((Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0));
  }

  const totalEMI = () => {
    return amountWithCommas((emi * tenure).toFixed(0));
  }

  return (
    <div className="App">
      <span className="title" style={{fontSize: "30px", marginTop: "10px"}}>EMI Calculator</span>
      
      <TextInput
        title={"Total Cost of Asset"} 
        state={cost} 
        setState={setCost}/>
      
      <TextInput
        title={"Interest Rate (in %)"}
        minValue={1}
        maxValue={100}
        state={interest} 
        setState={setInterest}/>

      <TextInput
        title={"Processing Fee (in %)"}
        minValue={0}
        maxValue={100}
        state={fee} 
        setState={setFee}/>

      <SliderInput
        title="Down Payment"
        undrlineTitle={`Total Down Payment - ${totalDownPayment()}`}
        onChange={updateEMI}
        state={downPayment}
        min={0}
        max={cost}
        labelMin={"0%"}
        labelMax={"100%"}
      />

      <SliderInput
        title="Loan Per Month"
        undrlineTitle={`Total Loan Amount - ${totalEMI()}`}
        onChange={updateDownPayment}
        state={emi}
        min={calculateEMI(cost)}
        max={calculateEMI(0)}
      />

      <span className="title">Tenure in Months</span>
      <div className="tenureContainer">
        {tenureData.map((data) => {
          return <button className={`tenure ${data === tenure ? "selected" : ""}`} onClick={() => setTenure(data)}>{data}</button>
        })}
      </div>
    </div>
  );
}

export default App;
