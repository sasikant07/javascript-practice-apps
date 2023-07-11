import React, {useEffect, useReducer} from 'react';
import axios from "axios";
import { cartReducer } from './reducers/cartReducer';
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {
    const [state, dispatch] = useReducer(cartReducer, {
        products: [],
        cart: [],
    })

    const fetchProducts = async () => {
        try {
            const {data} = await axios.get("https://dummyjson.com/products");
            
            dispatch({
                type: "ADD_PRODUCTS",
                payload: data.products,
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])
  return (
    <div style={{display: "flex"}}>
        <Product state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
    </div>
  )
}

export default App;