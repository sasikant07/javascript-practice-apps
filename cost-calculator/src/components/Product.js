import React from 'react'

const Product = ({state, dispatch}) => {
    const {products, cart} = state;
  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
    }}>
        {
            products.map((prod) => (
                <div 
                    key={prod.id}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px",
                        border: "1px solid gray",
                        width: "30%",
                        marginTop: "10px",
                        gap: "10px",
                    }}
                >
                    <img src={prod.thumbnail} alt={prod.title} style={{height: "200px", objectFit: "cover"}}/>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{prod.title}</span>
                        <b>$ {prod.price}</b>
                    </div>
                    {
                        cart.some(p => p.id === prod.id) ? (
                            <button 
                                style={{
                                    padding: "5px",
                                    border: "0px",
                                    borderRadius: "5px",
                                    backgroundColor: "red",
                                    color: "white",
                            }}
                            onClick={() => dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                            })}
                            >
                                    Remove from Cart
                            </button>
                        ) : (
                            <button 
                                style={{
                                    padding: "5px",
                                    border: "0px",
                                    borderRadius: "5px",
                                    backgroundColor: "green",
                                    color: "white",
                                }}

                                onClick={() => dispatch({
                                    type: "ADD_TO_CART",
                                    payload: {
                                        id: prod.id,
                                        title: prod.title,
                                        thumbnail: prod.thumbnail,
                                        qty: 1,
                                        price: prod.price
                                    }
                                })}
                                >
                                    Add to cart
                            </button>
                        )
                    }
                    
                    
                </div>
            ))
        }
    </div>
  )
}

export default Product;