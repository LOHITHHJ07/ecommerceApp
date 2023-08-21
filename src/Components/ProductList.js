import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, } from "react-redux";
import { setProduct } from "../redux/ActionTypes/productActions";
import Product from "./Product";


function ProductList() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error:", err);
      });
  
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Product></Product>
    </div>
  );
}

export default ProductList;
