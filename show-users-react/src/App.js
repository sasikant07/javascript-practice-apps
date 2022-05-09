import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
      const product = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(product.data);
      console.log(product.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      {
        products.filter(item => item.price > 50 && item.price < 100).map((product) => {
          return <p key={product.id}>{product.title}</p>
        })
      }
    </div>
  );
}

export default App;
