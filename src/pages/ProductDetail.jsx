import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsById } from "../store/product-slice";
import { useEffect } from "react";

const ProductDetail = () => {
  const product = useSelector((state) => state.productsSlice.productItem);
  const params = useParams();
  const id = params?.productid;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h3>{product.title}</h3>
    </div>
  );
};

export default ProductDetail;
