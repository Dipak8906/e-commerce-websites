import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://media.gettyimages.com/vectors/online-shopping-ecommerce-related-web-banner-line-style-modern-design-vector-id1296100096"
          alt=""
        />
     <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Redmi miui phone"
            price={239.0}
            rating={4}
            image="./images/p4.png"
          />
          <Product
            id="12321342"
            title="Redmi note 7 pro "
            price={222.96}
            rating={5}
            image="./images/p3.png"
          />
           <Product
            id="12321322"
            title="HP Laptop 15s-gr0011AU"
            price={222.96}
            rating={5}
            image="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/5/35K34PA-2_T1611630539.png"
          />
             <Product
            id="123213292"
            title=" Mini Dress"
            price={22.96}
            rating={5}
            image="./images/p1.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
           <Product
            id="90829332"
            title="Redmi 12"
            price={1094.98}
            rating={4}
            image="./images/p4.png"
          />
           
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Redmi 12"
            price={1094.98}
            rating={4}
            image="./images/p4.png"
          />
             <Product
            id="12321332"
            title="HP Laptop 15s-gr0011AU"
            price={222.96}
            rating={5}
            image="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/5/35K34PA-2_T1611630539.png"
          />
              <Product
            id="123213292"
            title=" Mini Dress"
            price={22.96}
            rating={5}
            image="./images/p1.png"
          />
        </div>
        <div className="home__row">
        <Product
            id="12321322"
            title="HP Laptop 15s-gr0011AU"
            price={222.96}
            rating={5}
            image="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/5/35K34PA-2_T1611630539.png"
          />
            <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          
        </div>
      </div>
    </div>
  );
}
export default Home
