import React, {useState, useEffect} from 'react';
import './App.css';
import CurrencyRow from "./components/currencyRow"

const BASE_URL = "https://open.er-api.com/v6/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangerate] = useState();
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[64];
        setCurrencyOptions([data.base_code, ...Object.keys(data.rates)]);
        setFromCurrency(data.base_code);
        setToCurrency(firstCurrency);
        setExchangerate(data.rates[firstCurrency]);
      });
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base_code=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangerate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency])


  return (
   <>
    <h1> Currency Converter</h1>
    <p className="oneCurrencyText">{amount} {fromCurrency} equals</p>
      <p className="ratesText">{exchangeRate * amount} {toCurrency}</p>
      <p className="date">{`${new Date()}`}</p>
    <CurrencyRow 
      currencyOptions={currencyOptions}
      selectedCurrency={fromCurrency}
      onChangeCurrency={(e) => setFromCurrency(e.target.value)}
      amount={fromAmount}
      onChangeAmount={handleFromAmountChange}
    />
    <div className="equals">=</div>
    <CurrencyRow 
      currencyOptions={currencyOptions}
      selectedCurrency={toCurrency}
      onChangeCurrency={(e) => setToCurrency(e.target.value)}
      amount={toAmount}
      onChangeAmount={handleToAmountChange}
    />
   </>
  );
}

export default App;
