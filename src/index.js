import React from "react";
// import ReactDOM from "react-dom/client";

import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import App from "./App";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="Products" element={<Products />} />

        <Route path="/Products/:productid" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
