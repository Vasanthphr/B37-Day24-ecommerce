import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";

function Card({ item, handleAddToCart, cartItems }) {
  return (
    <div className="col-lg-4 mb-2">
      <div class="card" style={{ width: "17rem" }}>
        <img
          src={item.image}
          style={{ height: "20rem" }}
          class="card-img-top"
          alt="Noimage"
        />
        <div>
          <ReactStars activeColor="#ffd700" size={24} value={item.rating} />
        </div>
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">
            {" "}
            <strong>{item.currency} - </strong> {item.price}
          </p>
          <button
            disabled={cartItems.some((obj) => obj.id === item.id)}
            onClick={() => {
              handleAddToCart(item);
            }}
            class="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
