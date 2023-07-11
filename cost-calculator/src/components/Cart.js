import React, { useEffect, useState } from 'react'

const Cart = ({state, dispatch}) => {
    const {cart} = state;

    const [total, setTotal] = useState(0);

    const changeQty = (id, qty) => {
        dispatch({
            type: "CHANGE_CART_QTY",
            payload: {
                id,
                qty
            }
        })
    }

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [cart])
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        backgroundColor: "#ececec",
        padding: "10px",
        width: "20%",
    }}>
        <b style={{fontSize: "30px", alignSelf: "center"}}>Cart</b>
        <b style={{alignSelf: "center"}}>Subtotal: $ {total}</b>
        {
            cart.length > 0 ? (
                cart.map((prod) => (
                    <div 
                        key={prod.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px",
                            border: "1px solid gray",
                            margin: "5px",
                        }}
                    >
                        <div style={{display: "flex", gap: "10px"}}>
                            <img src={prod.thumbnail} alt={prod.title} style={{height: "70px", objectFit: "cover"}}/>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                                <span>{prod.title}</span>
                                <b>$ {prod.price}</b>
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                            <button onClick={() => changeQty(prod.id, prod.qty - 1)}>-</button>
                            <span>{prod.qty}</span>
                            <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
                        </div>
                    </div>
                ))
            ) : (
                <span style={{padding: "20px", alignSelf: "center"}}>Cart is Empty</span>
            )
        }
    </div>
  )
}

export default Cart