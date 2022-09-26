import "./css/cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import CartItem from "./CartItem";
import { useState } from "react";
import React from "react";
import Topbar from "./Topbar";

function App() {
  const products = [
    {
      id: 1,
      title: "Iphone",
      currency:"Rs",
      price: 130000,
      rating:4,
      image: "assets/Iphone.jpg"
    },
    {
      id: 2,
      title: "iwatch",
      currency:"Rs",
      price: 25000,
      rating:5,
      image:"assets/iwatch.jpg"
    },
    {
      id: 3,
      title: "Boat Stone 350",
      currency:"Rs",
      price: 1199,
      rating:3,
      image:"assets/boat.jpg",
    },
    {
      id: 4,
      title: "Redmi note 11s",
      currency:"Rs",
      price: 16490,
      rating:4,
      image:"assets/XiaomiRedmiNote11S.jpg",
    },
    {
      id: 5,
      title: "Realme 9i",
      currency:"Rs",
      price: 15000,
      rating:4,
      image:"assets/realme.jpg",
    },
    {
      id: 6,
      title: "Motorola edge 30",
      currency:"Rs",
      price: 30000,
      rating:3,
      image:"assets/moto.jpg",
    },
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  let removeFromCart = (item) => {
    // find which object to be removed
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  };

  return (
    <div className="Container">
      <Topbar></Topbar>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            
            {products.map((item) => {
              return (
                <Card
                  item={item}
                  cartItems={cart}
                  handleAddToCart={addToCart}
                ></Card>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4">
          {cart.length === 0 ? (
            <div>No Items in Cart</div>
          ) : (
            <div className="row">
              <ol class="list-group list-group-numbered">
                {cart.map((cartItem) => {
                  return (
                    <CartItem
                      cartItem={cartItem}
                      removeFromCart={removeFromCart}
                    ></CartItem>
                  );
                })}
              </ol>
              <h1>Total = {total}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
