import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import React from "react";

import { motion } from "framer-motion";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="cart"
    >
      <section className="d-flex justify-content-around flex-wrap ">
        <div className="col-12 col-lg-4 cart-overall">
          <div className="overall-price d-flex justify-content-between ">
            <p>
              <span className="float-start cart-currency">تومان</span>
              <span>{totalPrice}</span>
            </p>
            <p className="lightgray-color">قیمت کالاها({cartItems.length})</p>
          </div>
          <div className="cart-discount d-flex justify-content-between ">
            <p>
              <span className="float-start cart-currency">تومان</span>
              <span>0</span>
            </p>
            <p className="lightgray-color">تخفیف</p>
          </div>
          <div className="overall-discounted-price d-flex justify-content-between">
            <p>
              <span>{totalPrice}</span>
              <span className="float-start cart-currency">تومان</span>
            </p>
            <p>جمع سبد خرید</p>
          </div>
          <div className="cart-overall-text">
            <p>
              هزینه ارسال بر اساس آدرس ، زمان تحویل ، وزن و حجم مرسوله محاسبه
              میشود
            </p>
          </div>
          {cartItems.length === 0 ? (
            <p>سبد کالای شما خالیست</p>
          ) : (
            <button className="cart-continue-btn ">ادامه</button>
          )}
        </div>
        <div className="col-12 col-lg-7  cart-items-container">
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  rating: item.rating,
                  total: item.totalprice,
                  price: item.price,
                  description: item.description,
                  image: item.image,
                  quantity: item.quantity,
                }}
              />
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default Cart;
