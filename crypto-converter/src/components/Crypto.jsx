import { useEffect, useState } from "react";
const CURRENCY_OPTIONS = ["USD", "EUR", "GBP", "CNY"];
const CRYPTO_API = "https://api.frontendeval.com/fake/crypto";

export default function Crypto() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [prevConvertedAmount, setPrevConvertedAmount] = useState(0);
  const [currency, setCurrency] = useState(CURRENCY_OPTIONS[0]);
  useEffect(() => {
    async function fetchConversionRate() {
      try {
        const resp = await fetch(`${CRYPTO_API}/${currency}`);
        const data = await resp.json();
        setConversionRate(data.value);
      } catch (err) {
        console.log(err);
      }
    }
    fetchConversionRate();
    const timer = setInterval(fetchConversionRate, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currency]);

  useEffect(() => {
    setPrevConvertedAmount(convertedAmount);
    setConvertedAmount(amount * conversionRate);
  }, [conversionRate]);

  const priceChange = convertedAmount - prevConvertedAmount;
  return (
    <div>
      <label htmlFor="amountToConvert">
        Amount to Convert :
        <input
          type="number"
          id="amountToConvert"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label htmlFor="currency">
        Currency :
        <select id="currency" onChange={(e) => setCurrency(e.target.value)}>
          {CURRENCY_OPTIONS.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </label>
      <p>WUC Crypto Equivalent: {convertedAmount.toFixed(2)}</p>
      <p
        aria-live="polite"
        style={{ color: priceChange > 0 ? "green" : "red" }}
      >
        Change : {priceChange > 0 ? "⬆️" : "🔻"} {priceChange.toFixed(2)}
      </p>
    </div>
  );
}
