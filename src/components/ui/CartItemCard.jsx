import React from "react";

const CartItemCard = (props) => {
  return (
    <section
      className={`cart-item-card ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default CartItemCard;
