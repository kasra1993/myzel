import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
import "./assets/scss/main.scss";
import { useSelector } from "react-redux";

import MainNavigation from "./components/Nav/MainNavigation.jsx";
import Products from "./pages/Products";
import Cart from "./components/cart/Cart";

function App() {
  const showCart = useSelector((state) => state.cart.cartIsVisible);

  return (
    <div className="container">
      <MainNavigation />
      {showCart ? (
        <Cart />
      ) : (
        <motion.div
          className="product-items"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <Products />
        </motion.div>
      )}
    </div>
  );
}

export default App;
