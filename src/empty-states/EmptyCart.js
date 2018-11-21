import React, { Component } from "react";

const EmptyCart = props => {
  return (
    <div className="empty-cart">
      <img
        src="https://res.cloudinary.com/jessie/image/upload/v1541244838/images/empty-shopping-cart.png"
        alt="empty-cart"
      />
      <h2>You cart is empty!</h2>
    </div>
  );
};

export default EmptyCart;
