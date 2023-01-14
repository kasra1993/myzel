import React from "react";
import logo from "../../assets/icons/logo.svg";
import user from "../../assets/icons/user.png";

import search from "../../assets/icons/search-normal.png";
import CartButton from "../cart/CartButton";
import { motion } from "framer-motion";
const MainNavigation = () => {
  return (
    <motion.div
      initial={{ y: "-20vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
      className="d-flex flex-wrap w-100 justify-content-between align-items-center p-5 "
    >
      <section className="cart-login-icon d-flex flex-wrap  gap-4 col-12 col-md-6 col-lg-4 a">
        <motion.div whileHover={{ scale: 1.1 }} className="home-cart-btn">
          <CartButton />
        </motion.div>

        <button className="login-btn">
          حساب کاربری{" "}
          <span>
            <img src={user} alt="" />
          </span>
        </button>
      </section>

      <div className="search col-12 col-md-12 col-lg-4 b">
        <img src={search} alt="" />
        <input type="text" placeholder="جستجو" />
      </div>
      <div className="logo col-12 col-md-6 col-lg-4 c">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default MainNavigation;
