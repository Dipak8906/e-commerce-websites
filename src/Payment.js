import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();


    const [error, setError] = useState(null);
    
   
    const handleSubmit = event => {

        
        dispatch({
            type: 'EMPTY_BASKET'
        })
        

        history.replace('orders')
       
    }

    
    
    return (
        <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
            </h1>
          

            {/* Payment section - delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane </p>
                    <p>Siliguri,West Bengal</p>
                </div>
            </div>

            {/* Payment section - Review Items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
        

            {/* Payment section - Payment method */}
            <div className='payment__section'>
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                        {/* Stripe magic will go */}

                        <form onSubmit={handleSubmit} >
                            

                            <div className='payment__priceContainer'>
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
                                 <button onClick={e => history.push('/orders')}>Buy Now</button>
                            </div>

                              {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default Payment
