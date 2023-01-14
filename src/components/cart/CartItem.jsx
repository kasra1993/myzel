import { useDispatch } from "react-redux";
import { removeitem, additem, removeproduct } from "../../store/cart-slice";
import React from "react";
import CartItemCard from "../ui/CartItemCard";
import deletecartitem from "../../assets/icons/trash.png";
import listicon1 from "../../assets/icons/listicon1.svg";
import listicon2 from "../../assets/icons/listicon2.svg";
import listicon3 from "../../assets/icons/listicon3.svg";
import listicon4 from "../../assets/icons/listicon4.svg";

const CartItem = (props) => {
  const { title, quantity, total, price, id, description, image } = props.item;

  const desc1 = description.substring(20, 0);
  const desc2 = description.substring(40, 20);
  const desc3 = description.substring(20, 0);
  const desc4 = description.substring(40, 20);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(
      additem({
        title,
        id,
        price,
      })
    );
  };
  const removeHandler = () => {
    dispatch(removeitem(id));
  };
  const removeProductHandler = () => {
    dispatch(removeproduct(id));
  };
  return (
    <CartItemCard>
      <li className="cart-item">
        <div className="cart-item-details p-3">
          <div className="cart-top-desc">
            <button className="delete-cart-item" onClick={removeProductHandler}>
              <img src={deletecartitem} alt="" />
            </button>
            <h3 className="cart-item-title">{title}</h3>
          </div>
          <div className="cart-bottom-desc">
            <div className="price">
              <span className="float-start cart-currency">تومان</span>
              {total.toLocaleString()}
              {/* <span className="item-price">(${price.toFixed(3)}/item)</span> */}
            </div>

            <div className="actions">
              <button className="operator" onClick={removeHandler}>
                -
              </button>
              <span>{quantity}</span>

              <button className="operator" onClick={addHandler}>
                +
              </button>
            </div>
            {/* <p className="cart-description">{description}</p> */}
            <ul className="item-cart-description">
              <li>
                {desc1}{" "}
                <span>
                  <img src={listicon1} alt="" />
                </span>
              </li>
              <li>
                {desc2}
                <span>
                  <img src={listicon2} alt="" />
                </span>
              </li>
              <li>
                {desc3}
                <span>
                  <img src={listicon3} alt="" />
                </span>
              </li>
              <li>
                {desc4}
                <span>
                  <img src={listicon4} alt="" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-item-image">
          <img src={image} alt="" />
        </div>
      </li>
    </CartItemCard>
  );
};

export default CartItem;
