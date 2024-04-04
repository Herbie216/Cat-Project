// components/Cart.js
import React from 'react';

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.description}</p>
          <p>${item.value}</p>
        </div>
      ))}
    </div>
  );
};
// the calculator, NY tax %8.75, total

export default Cart;
