import React, { useState, useEffect } from 'react';
import './Orders.css';
import { useStateValue } from "./StateProvider";

import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";



function Orders() {
  
    const [{ basket, user }, dispatch] = useStateValue();
    
    return (
        <div className='orders'>
        <div className='orders__container'>
            <h1>
                Your  Orders has been placed
            </h1>

            
            <div className='orders__section'>
                <div className='orders__title'>
                    <h3>Delivery to Address</h3>
                </div>
                <div className='orders__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Siliguri,West Bengal</p>
                </div>
            </div>

           
            <div className='orders__section'>
                <div className='orders__title'>
                    <h3>Your items List</h3>
                </div>
                <div className='orders__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            hideButton
                        />
                    ))}
                </div>
            </div>
        

           
            <div className='orders__section'>
                
                <div className="orders__details">
                        

                      
                            

                            <div className='orders__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                
                            </div>

                           
                        
                </div>
            </div>
        </div>
    </div>
)
}

export default Orders
