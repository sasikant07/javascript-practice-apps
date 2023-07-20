import React, {useState, useEffect} from 'react';
import CurrencyInput from './components/CurrencyInput';
import "./App.css";
import axios from "axios";

const API_KEY = "3pOtJoqe88CVuyBLwn4vOrRe2IpT07aO";
const CURRENCY_API = `https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`;
// const BASE_URL = "https://open.er-api.com/v6/latest";

const App = () => {
  const [currencyRates, setCurrencyRates] = useState([]);
  const [amountOne, setAmountOne] = useState(1);
  const [amountTwo, setAmountTwo] = useState(1);
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("INR");

  useEffect(() => {
    axios.get(CURRENCY_API)
      .then(response => setCurrencyRates(response.data.rates))
      .catch(error => {
        console.log(error);
        setCurrencyRates(null);
      })
  }, []);

  const formatCurrencies = (number) => {
    return number.toFixed(2);
  }

  const handleAmountOneChange = (amountOne) => {
    setAmountTwo(formatCurrencies((amountOne * currencyRates[currencyTwo]) / currencyRates[currencyOne]));
    setAmountOne(amountOne);
  }

  const handleAmountTwoChange = (amountTwo) => {
    setAmountOne(formatCurrencies((amountTwo * currencyRates[currencyOne]) / currencyRates[currencyTwo]));
    setAmountTwo(amountTwo);
  }

  const handleCurrencyOneChange = (currencyOne) => {
    setAmountTwo(formatCurrencies((amountOne * currencyRates[currencyTwo]) / currencyRates[currencyOne]));
    setCurrencyOne(currencyOne);
  }

  const handleCurrencyTwoChange = (currencyTwo) => {
    setAmountOne(formatCurrencies((amountTwo * currencyRates[currencyOne]) / currencyRates[currencyTwo]));
    setCurrencyTwo(currencyTwo);
  }

  useEffect(() => {
    if (!currencyRates) {
      handleAmountOneChange(1);
    }
  }, [currencyRates]);

  if (!currencyRates) {
    return <p>Something wentt wrong</p>
  }

  if (currencyRates.length === 0) {
    return <p>Loading....</p>
  }

  return (
    <div>
      <h1>Currency Converter</h1>
      <p className="oneCurrencyText">1 {currencyOne} equals</p>
      <p className="ratesText">{formatCurrencies(amountTwo/amountOne)} {currencyTwo}</p>
      <p className="date">{`${new Date()}`}</p>
      <CurrencyInput 
      amount={amountOne}
      currency={currencyOne}
      currencies={Object.keys(currencyRates)}
      onAmountChange={handleAmountOneChange}
      onCurrencyChange={handleCurrencyOneChange}
        />
      <div className="equals">=</div>
      <CurrencyInput 
      amount={amountTwo}
      currency={currencyTwo}
      currencies={Object.keys(currencyRates)}
      onAmountChange={handleAmountTwoChange}
      onCurrencyChange={handleCurrencyTwoChange}
        />
    </div>
  )
}

export default App;