import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/product-slice.jsx";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { additem } from "../store/cart-slice";
import star from "../assets/icons/star.png";
import { RiShoppingCart2Line } from "react-icons/ri";

const Products = () => {
  const products = useSelector((state) => state.productsSlice.data.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {products &&
        products.map((product) => {
          const {
            id,
            title,
            price,
            images,
            rating,
            discountPercentage,
            description,
          } = product;

          const discount = product?.discountPercentage / 100;
          const newPrice = price - discount * price;
          return (
            <>
              <div className="product-item  h-100 text-center p-3" key={id}>
                <NavLink to={`/products/${id}`}>
                  <img
                    src={images[0]}
                    className="card-img"
                    alt={title}
                    height="200px"
                  />
                </NavLink>
                <div className="product-details">
                  <h5 className="product-title mb-0 text-end pt-4 pb-5">
                    {title}
                  </h5>
                  <div className="d-flex justify-content-end gap-4">
                    <p className="product-price">{price}</p>

                    <p className="product-discount">{discountPercentage} %</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="product-rating">
                      <span>
                        <img src={star} alt="" />
                      </span>{" "}
                      {rating}
                      <span>(45)</span>
                    </p>
                    <p className="product-final-price">
                      <span>تومان</span>
                      {newPrice.toLocaleString()}
                    </p>
                  </div>

                  <button
                    className="add-to-cart-btn"
                    onClick={() =>
                      dispatch(
                        additem({
                          id,
                          title,
                          images,
                          price,
                          description,
                        })
                      )
                    }
                  >
                    افزودن به سبد خرید{" "}
                    <span>
                      <RiShoppingCart2Line />
                    </span>
                  </button>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Products;
