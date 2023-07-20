import React from 'react'

const CurrencyInput = (props) => {
    const {
        amount,
        currencies,
        currency,
        onAmountChange,
        onCurrencyChange,
    } = props;
  return (
    <div>
        <input value={amount} onChange={(e) => onAmountChange(e.target.value)}/>
        <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
            {currencies.map((currency, index) => (
                <option key={index} value={currency}>{currency}</option>
            ))}
        </select>
    </div>
  )
}

export default CurrencyInput;