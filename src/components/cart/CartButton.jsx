// import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/cart-slice";
import { useSelector } from "react-redux";
import React from "react";
import shopicon from "../../assets/icons/shop.png";

const CartButton = () => {
  const cartitemsquantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    dispatch(toggle());
  };

  return (
    <>
      <span className="badge">{cartitemsquantity}</span>
      <span onClick={buttonClickHandler}>
        <img src={shopicon} alt="" />
      </span>
    </>
  );
};

export default CartButton;
